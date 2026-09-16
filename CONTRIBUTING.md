# Contributing

Thank you for your interest in this project. It is the front-end of a client
website interrupted in 2024 and kept as a portfolio piece, so the brand
assets (brand book, logo, illustrations, typefaces) are not ours to change.
Improvements of the code, of the accessibility, of the responsive layout and
documentation fixes are welcome.

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

- **Report a bug** or **suggest an improvement** with the
  [issue forms](https://github.com/BnRomain/blockrose-equipment-rental/issues/new/choose).
- **Report a security vulnerability** privately, as described in the
  [security policy](SECURITY.md). Please do not open a public issue for it.
- **Open a pull request** for a fix, an interaction or documentation.

For a larger change, for example a new page or a redesign, please open an
issue first so that we can agree on the approach.

## Development setup

The site is plain HTML, CSS and JavaScript: open `pages/accueil.html` in a
browser, or serve the folder (`python -m http.server`). Node.js 22 is only
needed for the linters and the site check.

```bash
git clone https://github.com/BnRomain/blockrose-equipment-rental.git
cd blockrose-equipment-rental
npm ci

npm run lint       # html-validate, stylelint and ESLint
npm run check      # referenced files, file names and image budget
```

To check the Markdown files like the CI does:

```bash
npx markdownlint-cli2
lychee --offline --include-fragments .
```

## Coding guidelines

The repository provides an [`.editorconfig`](.editorconfig) file: most editors
apply its indentation and whitespace settings automatically.

- No framework, no bundler, no build step: the files are served as they are.
- Semantic HTML, `lang="fr"` on every page, a descriptive `alt` on every image,
  quoted attribute values, no self-closing void elements. The pages must pass
  html-validate ([`.htmlvalidate.json`](.htmlvalidate.json)).
- CSS: the shared styles live in `css/base.css`, `css/menu.css` and
  `css/footer.css`, and each page has its own stylesheet. The code must pass
  stylelint ([`.stylelintrc.json`](.stylelintrc.json)); the PascalCase ids of
  the 2024 markup are allowed.
- JavaScript: vanilla, no dependency. It must pass ESLint ([`eslint.config.js`](eslint.config.js)).
- File names in ASCII kebab-case only: accented names broke the URLs on
  GitHub Pages (`npm run check` enforces it). New images go to `images/`,
  under 700 kB.
- Respect the brand book: the typefaces of `fonts/`, the palette and the
  illustration style are the client's.
- Pin new development dependencies to an exact version in `package.json` so
  that Dependabot can track them.

## Pull request process

1. Create a branch from `main` with a descriptive name, for example
   `fix/contact-form-labels` or `docs/wiki-links`.
2. Keep commits focused, with a short summary in the imperative mood
   (for example "Add the missing alt texts of the catalogue").
3. Open a pull request against `main`, fill in the template and add a label
   (`bug`, `enhancement`, `documentation`...): labels sort the release notes.
4. The `main` branch is protected: a pull request can only be merged once the
   required checks (`lint`, `site`, `docs` and `dependency-review`) pass and
   the branch is up to date with `main`. CodeQL also analyzes every pull
   request. Merging to `main` deploys the demo on GitHub Pages.
5. Update the documentation (README, [wiki](https://github.com/BnRomain/blockrose-equipment-rental/wiki))
   when the structure or the tooling changes, and `CHANGELOG.md` under "Unreleased".

## Versioning and releases

The project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (`2.0.0`): redesign or change of the site URL;
- **MINOR** (`1.1.0`): new page, interaction or tooling;
- **PATCH** (`1.0.1`): bug fix or content correction.

Releases are published from `main` with a `vX.Y.Z` tag. GitHub generates their
notes from the merged pull requests, grouped by label as configured in
[`.github/release.yml`](.github/release.yml), and the `version` field of
[`package.json`](package.json) is updated at the same time.
