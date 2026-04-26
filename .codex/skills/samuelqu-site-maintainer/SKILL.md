---
name: samuelqu-site-maintainer
description: Use when maintaining the Samuel Qu drummer profile website in this repository, especially for placeholder content updates, layout edits, GitHub SSH setup, Cloudflare Pages deployment, workflow repair, Windows maintainer handoff, and verifying GitHub Actions after pushes.
---

# Samuel Qu Site Maintainer

Use this skill whenever the task is about maintaining this specific repository.

## Scope

This skill covers:

- content updates through stable identifiers
- layout and styling changes
- image and YouTube placeholder replacement
- GitHub SSH usage for this repo
- Cloudflare Pages workflow maintenance
- Windows maintainer onboarding
- push and post-push deployment verification

## Repository map

Primary files:

- `src/content/siteContent.ts`: editable content tokens and identifiers
- `src/App.tsx`: page structure and section composition
- `src/index.css`: layout, spacing, typography, responsive behavior
- `src/components/ContentBlocks.tsx`: placeholder renderers and shared content blocks
- `.github/workflows/deploy-cloudflare-pages.yml`: Cloudflare Pages deploy workflow
- `WINDOWS_HANDOFF_GUIDE.md`: maintainer onboarding for Windows
- `scripts/windows-bootstrap.ps1`: helper setup script for a new Windows maintainer

## Content workflow

For text, image, video, and link updates:

1. Start in `src/content/siteContent.ts`.
2. Preserve stable identifiers whenever possible.
3. Replace only the content fields, not the identifiers, unless the user explicitly requests a content model change.
4. For images, prefer tracked files under `public/uploads/`.
5. For YouTube content, update the matching `youtubeUrl` field.
6. For outbound links, confirm whether the project still wants an internal placeholder route or a real external URL.

## Layout workflow

For visual or structural edits:

1. Inspect `src/App.tsx`, `src/index.css`, and the relevant component.
2. Preserve the original site structure and spacing logic unless the user asks for redesign.
3. Avoid introducing a new visual system when the request is to replicate or refine the existing design.
4. Validate desktop and mobile behavior after editing layout CSS.

## Git and SSH rules

This repo is expected to push through GitHub SSH, not by embedding credentials in tracked files.

Credential bundle expectations:

- the transfer bundle must stay outside the repo
- the SSH private key file is `github_access_ed25519`
- the bundle should include `.env.handoff` for local secret transfer

On macOS, use a one-off `GIT_SSH_COMMAND` if needed.

On Windows, prefer:

- copy the SSH key into `~/.ssh/github_access_ed25519`
- add a `Host github.com` block in `~/.ssh/config`
- use `scripts/windows-bootstrap.ps1` after clone

Never commit keys, tokens, or local handoff files.

## Cloudflare Pages workflow

Deployment model:

1. Push to GitHub `master`.
2. GitHub Actions runs `.github/workflows/deploy-cloudflare-pages.yml`.
3. The workflow installs dependencies, builds the site, and deploys `dist` to Cloudflare Pages.

Expected GitHub secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT`

Known project values:

- Pages project: `samuelqu-org`
- Cloudflare account id: `e04c2a92f66fb33c63d7666c38ea38dd`
- Zone name: `samuelqu.org`

If deployment stops triggering, check whether `.github/workflows/deploy-cloudflare-pages.yml` was removed or broken by a force push.

## Validation workflow

Before push:

1. Run `pnpm lint`.
2. Run `pnpm build`.
3. If a frontend change is substantial, inspect the local UI if possible.

After push:

1. Confirm the push reached the expected branch.
2. Confirm the GitHub Actions workflow triggered.
3. Confirm the workflow completed successfully.
4. If it failed, inspect the failing step and logs before reporting back.

Useful checks:

- `gh run list --limit 5`
- `gh run view --log`
- GitHub connector workflow run inspection

Do not stop at "push succeeded" if the user asked for deployment help. Follow through until the workflow state is known.

## Windows maintainer handoff

When helping a Windows maintainer:

1. Point them to `WINDOWS_HANDOFF_GUIDE.md`.
2. Use `scripts/windows-bootstrap.ps1` for local setup after clone.
3. Assume the preferred transfer bundle path is `C:\CodexTransfer\music-website-transfer-bundle` unless the user says otherwise.
4. If `.env.handoff` is missing, stop and ask for the real secrets instead of guessing.

## Response expectations for future agents

When using this skill:

- be explicit about which identifiers, files, and workflow steps changed
- mention whether lint, build, push, and workflow verification were completed
- if deployment failed, report the failing step and the concrete reason
