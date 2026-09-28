# Kaleesha Dilum — Portfolio

Static portfolio site (HTML, CSS, vanilla JS). No build step.

## Structure

```text
kaleesha-portfolio/
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── images/profile.jpg
│   └── Kaleesha_Dilum_CV.pdf
├── netlify.toml
└── README.md
```

## Run locally

Open `index.html` in a browser, or run `npx serve .`

## Deploy on Netlify

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub**, then pick the repo.
3. Build command: leave empty. Publish directory: `.` (already set in `netlify.toml`).

## Updating content

- Text and sections: edit `index.html`.
- Colors and layout: edit the variables at the top of `css/style.css`.
- CV: replace `assets/Kaleesha_Dilum_CV.pdf` and keep the same file name.
