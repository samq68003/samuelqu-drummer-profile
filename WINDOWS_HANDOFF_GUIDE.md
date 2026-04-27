# Windows Handoff Guide

This guide is for setting up this project from zero on Windows.

It covers:

- where to place the credential bundle
- how to install the required tools
- how to configure SSH and environment variables
- how to clone the repo and install dependencies
- how to start the project locally

## 1. What you need

You should receive two things:

- the GitHub repository: `git@github.com:samq68003/samuelqu-drummer-profile.git`
- the local transfer bundle folder from the current maintainer

The credential bundle should contain:

- `.env.handoff`
- `.env.handoff.template`
- `README.md`
- `github_access_ed25519`
- `github_access_ed25519.pub`

Keep this folder outside the repo.

## 2. Default Windows paths

Use these exact paths if possible:

- credential bundle: `C:\CodexTransfer\music-website-transfer-bundle`
- repo folder: `C:\Code\samuelqu-drummer-profile`

## 3. One-time software install

Open PowerShell and run these commands:

```powershell
winget install --id Git.Git -e --source winget
winget install --id OpenJS.NodeJS.LTS -e --source winget
winget install --id GitHub.cli -e --source winget
```

Then close PowerShell and open a fresh one.

If Codex Desktop is not installed yet, install it separately before continuing.

## 4. Place the credential bundle in the default location

Copy the provided folder to:

```text
C:\CodexTransfer\music-website-transfer-bundle
```

After copying, confirm these files exist:

```text
C:\CodexTransfer\music-website-transfer-bundle\.env.handoff
C:\CodexTransfer\music-website-transfer-bundle\github_access_ed25519
C:\CodexTransfer\music-website-transfer-bundle\github_access_ed25519.pub
```

If `.env.handoff` is missing and only `.env.handoff.template` exists, stop and get the real secret values before continuing.

## 5. Initial SSH setup before clone

Run this block in PowerShell:

```powershell
$Bundle = "C:\CodexTransfer\music-website-transfer-bundle"
$SshDir = Join-Path $HOME ".ssh"

New-Item -ItemType Directory -Force -Path $SshDir | Out-Null
Copy-Item (Join-Path $Bundle "github_access_ed25519") (Join-Path $SshDir "github_access_ed25519") -Force
Copy-Item (Join-Path $Bundle "github_access_ed25519.pub") (Join-Path $SshDir "github_access_ed25519.pub") -Force

$ConfigPath = Join-Path $SshDir "config"
$ConfigBlock = @"
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_access_ed25519
  IdentitiesOnly yes
"@

if (Test-Path $ConfigPath) {
  $Existing = Get-Content $ConfigPath -Raw
  if ($Existing -notmatch "IdentityFile ~/.ssh/github_access_ed25519") {
    Add-Content -Path $ConfigPath -Value "`n$ConfigBlock"
  }
} else {
  Set-Content -Path $ConfigPath -Value $ConfigBlock
}

icacls (Join-Path $SshDir "github_access_ed25519") /inheritance:r | Out-Null
icacls (Join-Path $SshDir "github_access_ed25519") /grant:r "$($env:USERNAME):(R,W)" | Out-Null
ssh -T git@github.com
```

The final line should say that GitHub authenticated you successfully.

## 6. Clone the repository

Run:

```powershell
New-Item -ItemType Directory -Force -Path C:\Code | Out-Null
git clone git@github.com:samq68003/samuelqu-drummer-profile.git C:\Code\samuelqu-drummer-profile
cd C:\Code\samuelqu-drummer-profile
```

## 7. Run the project bootstrap script

This repo includes a setup script that configures environment variables, SSH reuse, `pnpm`, dependencies, and GitHub CLI checks.

Run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\windows-bootstrap.ps1 -TransferBundlePath "C:\CodexTransfer\music-website-transfer-bundle"
```

What it does:

- checks for Git, Node.js, `pnpm`, and GitHub CLI
- enables `corepack` and prepares `pnpm`
- copies the SSH key into `~/.ssh`
- writes or updates SSH config for GitHub
- loads values from `.env.handoff`
- sets user environment variables for Cloudflare and GitHub metadata
- installs project dependencies with `pnpm install`

After it finishes, close PowerShell and open a new one so the user environment variables are available in your next session.

## 8. Start the project locally

Inside the repo:

```powershell
cd C:\Code\samuelqu-drummer-profile
pnpm dev
```

Then open the local URL printed by Vite, usually:

```text
http://localhost:5173
```
