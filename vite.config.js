import { defineConfig } from 'vite';

function getPagesBase() {
  if (!process.env.GITHUB_ACTIONS) {
    return '/';
  }

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
  if (!repo || repo.endsWith('.github.io')) {
    return '/';
  }

  return `/${repo}/`;
}

export default defineConfig({
  root: 'src',
  base: getPagesBase(),
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
