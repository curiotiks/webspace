# Personal site

This repo is the source of truth for `curtfulwider.com`.

It now uses **Astro** as a small static-site framework instead of Jekyll. That is a better fit here: fast builds, simple content structure, clean static output, and straightforward deployment to Render while keeping GitHub as the canonical repo.

## Stack

- Astro static site
- GitHub for source control
- Render static site for production deploys
- Optional GitHub Actions build check on push and pull request

## Local development

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:4321`

## Deploying to Render

You do **not** need to wire up a separate manual webhook if the site is connected directly to the GitHub repo in Render.

Use these settings:

- Build command: `npm install && npm run build`
- Publish directory: `dist`

Once the repo is connected, Render will auto-deploy on pushes to `main`. The included [render.yaml](/Users/curtfulwider/github.nosync/webspace/render.yaml) can be used as the baseline config.

## Previous setup

The old Jekyll and GitHub Pages files were removed to keep the repo focused on the current deployment path.
