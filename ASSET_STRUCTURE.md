# Asset Structure

Use this layout to keep the site organized and predictable.

## `src/assets/`

Use for images that are part of the site itself and should be imported into Astro pages/components.

- `src/assets/portrait/`
  - Profile and headshot images
- `src/assets/research/`
  - Diagrams, figures, and research visuals used directly in pages
- `src/assets/site/`
  - Reusable site graphics, icons, and decorative images

Put files here when you want Astro to process or optimize them with imports such as:

```astro
import portrait from '../assets/portrait/headshot.jpg';
```

## `public/images/`

Use for static image files referenced directly by URL.

- `public/images/projects/`
  - Project screenshots, demos, and supporting visuals
- `public/images/blog/`
  - Blog post images if a blog is added later
- `public/images/site/`
  - Static site images that do not need Astro imports

Use these when you want paths like:

- `/images/projects/example.png`
- `/images/site/banner.jpg`

## `public/files/`

Use for downloadable documents and non-image assets.

- `public/files/cv/`
  - CV PDFs and source files
- `public/files/dissertation/`
  - Dissertation PDFs and related written materials
- `public/files/slides/`
  - Slide decks and presentation exports
- `public/files/posters/`
  - Conference posters
- `public/files/papers/`
  - Papers, preprints, or manuscript PDFs
- `public/files/datasets/`
  - Public datasets or supplementary files

## `public/media/`

Use for static audio and video files referenced directly by URL.

- `public/media/dissertation/`
  - Dissertation defense or presentation recordings

Use these when you want paths like:

- `/media/dissertation/defense-recording.mp4`

Use these when you want links like:

- `/files/cv/cv.pdf`
- `/files/dissertation/dissertation.pdf`
- `/files/slides/talk-name.pdf`

## Rule of thumb

- If you want to `import` it in Astro, put it in `src/assets/`.
- If you want to link to it directly by URL, put it in `public/`.
