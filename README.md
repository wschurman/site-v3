# site-v3

## Deploy To GitHub Pages

This repo includes an Actions workflow at .github/workflows/deploy-pages.yml.

One-time setup in GitHub:

1. Open repository Settings > Pages.
2. Under Build and deployment, set Source to GitHub Actions.
3. Push to main to trigger deployment.

The Vite config automatically sets the correct base path during GitHub Actions builds.
