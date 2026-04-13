# Personal site

This repo is the ground truth for my personal site.

## Pages

- Home: `index.md`
- Who I am: `about.md`
- Projects: `projects/index.md`
- Contact: `contact.md`
- Legacy pages (older hosted artifacts): `legacy/index.md`

## China-friendly mirror (optional)

See `MIRRORING.md` for options and GitHub Actions secrets to automatically publish a mirror that’s more reachable from mainland China.

## Local preview

- Ruby/Bundler: use a non-system Ruby (recommended: Homebrew Ruby), then run `bin/dev` and open `http://127.0.0.1:4000`
- Docker (recommended for live reload): `bin/dev-docker` then open `http://127.0.0.1:4000`
