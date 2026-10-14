# JiEnzi Africa

JiEnzi Africa's website, built with Next.js, React, and Tailwind CSS.

## Local development

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

## Publishing

The GitHub Actions workflow builds a static export and deploys it to GitHub Pages on every push to `main`.
The Pages build sets `NEXT_PUBLIC_BASE_PATH=/JiEnzi-Africa` so navigation, images, and scripts work at the repository URL.
For another deployment path, set the variable to the desired prefix or leave it empty for a domain root.

The contact form opens the visitor's email app with a prepared message.
Skates registration opens the linked Google Form.
