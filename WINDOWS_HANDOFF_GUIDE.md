# Windows Handoff Guide

This guide is for the next maintainer of this project on Windows.

It covers:

- where to place the transfer bundle
- how to configure SSH and environment variables
- how to clone and run the project
- how to use Codex to make edits safely
- how to confirm the Cloudflare Pages workflow succeeded

## 1. What you need

You should receive two things:

- the GitHub repository: `git@github.com:samq68003/samuelqu-drummer-profile.git`
- the local transfer bundle folder from the current maintainer

The transfer bundle should contain:

- `.env.handoff`
- `.env.handoff.template`
- `README.md`
- `github_access_ed25519`
- `github_access_ed25519.pub`

Important:

- never commit the transfer bundle into the repo
- never paste secrets into tracked files
- keep the SSH private key and `.env.handoff` in a private folder outside the repo

## 2. Recommended Windows paths

Use these exact paths if possible:

- transfer bundle: `C:\CodexTransfer\music-website-transfer-bundle`
- repo folder: `C:\Code\samuelqu-drummer-profile`

If you already use a different drive, that is fine, but keep the transfer bundle outside the repo.

## 3. One-time software install

Open PowerShell and run these commands:

```powershell
winget install --id Git.Git -e --source winget
winget install --id OpenJS.NodeJS.LTS -e --source winget
winget install --id GitHub.cli -e --source winget
```

Then close PowerShell and open a fresh one.

If Codex Desktop is not installed yet, install it separately before continuing.

## 4. Copy the transfer bundle into place

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

If `.env.handoff` is missing and only `.env.handoff.template` exists, stop and ask the current maintainer for the real secret values.

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

## 9. Standard maintenance workflow

Use this order every time:

1. Pull latest changes:

```powershell
cd C:\Code\samuelqu-drummer-profile
git pull --ff-only origin master
```

2. Make content or layout changes.
3. Validate locally:

```powershell
pnpm lint
pnpm build
```

4. Commit and push:

```powershell
git add .
git commit -m "Describe the change"
git push origin HEAD:master
```

5. Confirm the GitHub Action succeeded:

```powershell
gh run list --limit 5
gh run watch
```

If `gh` asks you to authenticate, run:

```powershell
gh auth login -w -h github.com
```

## 10. Where project content lives

Most routine edits happen here:

- `src/content/siteContent.ts`
- `src/App.tsx`
- `src/index.css`
- `src/components/ContentBlocks.tsx`
- `CONTENT_SYSTEM.md`

The deployment workflow lives here:

- `.github/workflows/deploy-cloudflare-pages.yml`

## 11. How content placeholders work

This project intentionally uses stable identifiers so Codex can update one block at a time later.

Examples:

- `home.hero.title`
- `home.hero.media.01`
- `live.videos.01`

Typical content updates:

- replace placeholder text in `src/content/siteContent.ts`
- add a real image under `public/uploads/...`
- point a token to the new image path
- replace a placeholder YouTube URL with the real URL

## 12. How Cloudflare deployment works

Current deployment model:

- push to GitHub `master`
- GitHub Actions runs `.github/workflows/deploy-cloudflare-pages.yml`
- workflow installs dependencies
- workflow builds the site
- workflow deploys `dist` to Cloudflare Pages

This workflow expects these GitHub secrets to already exist:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT`

The handoff bundle also tracks these project values:

- `CLOUDFLARE_ACCOUNT_ID=e04c2a92f66fb33c63d7666c38ea38dd`
- `CLOUDFLARE_ZONE_ID=36218257091d3fa3f493d6595e42c4b7`
- `CLOUDFLARE_ZONE_NAME=samuelqu.org`
- `CLOUDFLARE_PAGES_PROJECT=samuelqu-org`

## 13. If deployment fails

Run:

```powershell
gh run list --limit 5
gh run view --log
```

Check these first:

- did `pnpm build` pass locally
- does `.github/workflows/deploy-cloudflare-pages.yml` still exist
- are the Cloudflare GitHub secrets still configured
- did someone accidentally change the deploy branch or project name

## 14. How to work with Codex

Tell Codex exactly what you want changed and point to identifiers when possible.

Good examples:

- "Replace `home.hero.title` with this text: ..."
- "Change `live.videos.01` to this YouTube URL: ..."
- "Use the image I added at `public/uploads/home-hero-01.jpg` for `home.hero.media.01`"
- "Push to GitHub and confirm the Cloudflare workflow succeeded"

This repo also includes a project skill for Codex:

- `.codex/skills/samuelqu-site-maintainer/SKILL.md`

Ask Codex to use that skill when doing maintenance work in this repository.
