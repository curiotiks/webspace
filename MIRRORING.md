# Hosting note

This repo is now oriented around **Render as the primary host** with **GitHub as the source of truth**.

## Render and GitHub

If you connect the GitHub repository directly in Render, Render already watches the repo and rebuilds automatically on new pushes. In that setup, you do not need to create a custom webhook yourself.

## When a webhook matters

A manual deploy hook is only useful if:

- you want to trigger rebuilds from another system
- you are not using Render's native GitHub integration
- you want a secondary deployment workflow outside normal git pushes

## Current recommendation

- Keep editing and version history in GitHub
- Let Render pull from GitHub and auto-deploy on push to `main`
- Use the included `render.yaml` for baseline configuration
