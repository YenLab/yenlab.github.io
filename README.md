# Yen Lab Website

Bilingual Astro static site for the Yen Lab work website.

## Local Preview

Run commands from the project directory:

```bash
cd /Users/kuangyuyen/Documents/Work_website
```

If your shell does not already have Node.js and pnpm available, use the bundled Codex runtime:

```bash
export PATH=/Users/kuangyuyen/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/kuangyuyen/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin:$PATH
```

Build and preview the static site:

```bash
CI=true pnpm run build
CI=true ASTRO_TELEMETRY_DISABLED=1 ./node_modules/.bin/astro preview --host 127.0.0.1 --port 4321
```

Then open:

```text
http://127.0.0.1:4321/
```

For active development with live reload, run:

```bash
ASTRO_TELEMETRY_DISABLED=1 pnpm run dev -- --host 127.0.0.1 --port 4321
```

## Content

Most bilingual site text is maintained in:

```text
src/content/site.ts
```

## GitHub Pages Deployment

Recommended repository:

```text
YenLab/yenlab.github.io
```

Create that repository on GitHub as an empty public repository, then push this project:

```bash
git remote add origin https://github.com/YenLab/yenlab.github.io.git
git branch -M main
git push -u origin main
```

In the repository settings, set Pages to deploy from GitHub Actions. The workflow in
`.github/workflows/deploy.yml` builds the Astro site and publishes `dist/`.

After the first successful workflow run, the site should be available at:

```text
https://yenlab.github.io/
```
