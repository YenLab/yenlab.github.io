# Yen Lab Website

Bilingual Astro static site for the Yen Lab work website.

## Local Preview

Run commands from the project directory:

```bash
cd /Users/kuangyuyen/Research/Websites/yenlab.github.io
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
