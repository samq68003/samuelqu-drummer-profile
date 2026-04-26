param(
  [string]$TransferBundlePath = "C:\CodexTransfer\music-website-transfer-bundle"
)

$ErrorActionPreference = "Stop"

function Write-Step {
  param([string]$Message)
  Write-Host ""
  Write-Host "==> $Message" -ForegroundColor Cyan
}

function Require-Command {
  param([string]$Name, [string]$InstallHint)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "Missing command '$Name'. $InstallHint"
  }
}

function Set-UserEnvVar {
  param([string]$Name, [string]$Value)
  [Environment]::SetEnvironmentVariable($Name, $Value, "User")
  Write-Host "Set user env var $Name"
}

function Import-DotEnvFile {
  param([string]$FilePath)

  $Lines = Get-Content $FilePath
  foreach ($Line in $Lines) {
    $Trimmed = $Line.Trim()
    if (-not $Trimmed) { continue }
    if ($Trimmed.StartsWith("#")) { continue }
    if ($Trimmed -notmatch "=") { continue }

    $Name, $Value = $Trimmed.Split("=", 2)
    $Name = $Name.Trim()
    $Value = $Value.Trim()
    if (-not $Name) { continue }
    Set-UserEnvVar -Name $Name -Value $Value
  }
}

Write-Step "Checking required commands"
Require-Command -Name "git" -InstallHint "Install Git for Windows first with: winget install --id Git.Git -e --source winget"
Require-Command -Name "node" -InstallHint "Install Node.js LTS first with: winget install --id OpenJS.NodeJS.LTS -e --source winget"
Require-Command -Name "gh" -InstallHint "Install GitHub CLI first with: winget install --id GitHub.cli -e --source winget"

Write-Step "Validating transfer bundle"
if (-not (Test-Path $TransferBundlePath)) {
  throw "Transfer bundle not found at: $TransferBundlePath"
}

$EnvFile = Join-Path $TransferBundlePath ".env.handoff"
$PrivateKey = Join-Path $TransferBundlePath "github_access_ed25519"
$PublicKey = Join-Path $TransferBundlePath "github_access_ed25519.pub"

if (-not (Test-Path $EnvFile)) {
  throw "Missing .env.handoff at: $EnvFile"
}
if (-not (Test-Path $PrivateKey)) {
  throw "Missing private SSH key at: $PrivateKey"
}
if (-not (Test-Path $PublicKey)) {
  throw "Missing public SSH key at: $PublicKey"
}

Write-Step "Enabling corepack and preparing pnpm"
corepack enable
corepack prepare pnpm@10 --activate
Require-Command -Name "pnpm" -InstallHint "pnpm should have been installed by corepack. Restart PowerShell and run this script again."

Write-Step "Configuring SSH key for GitHub"
$SshDir = Join-Path $HOME ".ssh"
New-Item -ItemType Directory -Force -Path $SshDir | Out-Null

$DestPrivateKey = Join-Path $SshDir "github_access_ed25519"
$DestPublicKey = Join-Path $SshDir "github_access_ed25519.pub"

Copy-Item $PrivateKey $DestPrivateKey -Force
Copy-Item $PublicKey $DestPublicKey -Force

$ConfigPath = Join-Path $SshDir "config"
$ConfigBlock = @"
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_access_ed25519
  IdentitiesOnly yes
"@

if (Test-Path $ConfigPath) {
  $ExistingConfig = Get-Content $ConfigPath -Raw
  if ($ExistingConfig -notmatch "IdentityFile ~/.ssh/github_access_ed25519") {
    Add-Content -Path $ConfigPath -Value "`n$ConfigBlock"
  }
} else {
  Set-Content -Path $ConfigPath -Value $ConfigBlock
}

icacls $DestPrivateKey /inheritance:r | Out-Null
icacls $DestPrivateKey /grant:r "$($env:USERNAME):(R,W)" | Out-Null

Write-Step "Loading environment variables from .env.handoff"
Import-DotEnvFile -FilePath $EnvFile
Set-UserEnvVar -Name "CODEX_TRANSFER_BUNDLE" -Value $TransferBundlePath
Set-UserEnvVar -Name "GITHUB_SSH_KEY" -Value $DestPrivateKey

Write-Step "Checking GitHub SSH access"
ssh -T git@github.com

Write-Step "Checking GitHub CLI authentication"
gh auth status | Out-Host

Write-Step "Installing project dependencies"
$RepoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $RepoRoot
pnpm install

Write-Step "Finished"
Write-Host "Next steps:" -ForegroundColor Green
Write-Host "1. Close this PowerShell window."
Write-Host "2. Open a fresh PowerShell window."
Write-Host "3. Run: cd $RepoRoot"
Write-Host "4. Run: pnpm dev"
Write-Host "5. Use: gh run list --limit 5"
