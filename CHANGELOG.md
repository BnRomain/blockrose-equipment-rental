# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.1.0] - 2026-09-16

### Changed

- Repository renamed `blockrose-equipment-rental`: the demo now lives at <https://bnromain.github.io/blockrose-equipment-rental/>
- Pages, stylesheets and scripts renamed in ASCII kebab-case (`pages/materiel.html` instead of `pages/Matériel.html`...): accented file names broke the URLs on GitHub Pages
- `index.html` at the root redirects to the home page; the Jekyll theme configuration is removed and the site is served as is (`.nojekyll`)
- HTML fixes reported by html-validate: quoted attribute values, `lang="fr"` on every page, no self-closing void elements, unique ids, page titles
- CSS aligned on stylelint-config-standard without changing the rendering
- README rewritten in English; the original French presentation moves to `docs/presentation-fr.md` with its images

### Added

- Linters pinned in `package.json`: html-validate, stylelint and ESLint (`npm run lint`)
- `scripts/check-site.mjs` (`npm run check`): every referenced file exists, ASCII file names, image weight budget
- CI: lint, site check, markdownlint and lychee, dependency review and CodeQL
- Dependabot for the npm development tools and the GitHub Actions, with auto-merge of patch and minor updates once the required checks pass
- MIT License for the code (the brand assets stay the property of Block Rose), contributing guide, code of conduct, security policy, issue forms and pull request template

## [1.0.0] - 2026-03-29

The site as it was when the client interrupted the project (built in 2024, uploaded to GitHub in 2026).

### Added

- Nine pages: home, equipment catalogue, about, contact, terms of sale, terms of use, legal notice, privacy policy, cookie policy
- The design system of the client's brand book: typefaces Tusker and Aeonik, palette, illustrations, header and footer shared by every page
- Simple interactions: footer reveal on scroll, copy of the contact details, catalogue detail view
- Responsive layout for phone and desktop

[Unreleased]: https://github.com/BnRomain/blockrose-equipment-rental/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/BnRomain/blockrose-equipment-rental/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/BnRomain/blockrose-equipment-rental/releases/tag/v1.0.0
