# 🌸 Block Rose, Equipment Rental Website

[![CI](https://github.com/BnRomain/blockrose-equipment-rental/actions/workflows/ci.yml/badge.svg)](https://github.com/BnRomain/blockrose-equipment-rental/actions/workflows/ci.yml)
[![CodeQL](https://github.com/BnRomain/blockrose-equipment-rental/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/BnRomain/blockrose-equipment-rental/actions/workflows/github-code-scanning/codeql)
[![Release](https://img.shields.io/github/v/release/BnRomain/blockrose-equipment-rental?sort=semver)](https://github.com/BnRomain/blockrose-equipment-rental/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Live demo](https://img.shields.io/badge/GitHub_Pages-demo-2ea44f?logo=github&logoColor=white)](https://bnromain.github.io/blockrose-equipment-rental/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)

The front-end of **Block Rose**, a production equipment rental company (audio, video and streaming gear), built in 2024 from the client's **brand book** and specifications in **vanilla HTML, CSS and JavaScript**. My first web project: the goal was to turn an existing visual identity (imposed typefaces, palette, illustrations) into a coherent, readable multi-page website without any framework.

The project was **interrupted by the client**, who no longer needed the site. The code stays as delivered at that point: nine pages, the design system of the brand book applied, simple interactions, and the contact details, social links and equipment catalogue still filled with placeholders.

| Context | Client | Design system | Development |
| --- | --- | --- | --- |
| Freelance front-end project, 2024, interrupted | Block Rose, production equipment rental | The client's brand book (typefaces Tusker and Aeonik, palette, illustrations) | Romain Ben |

🌐 **Demo:** [bnromain.github.io/blockrose-equipment-rental](https://bnromain.github.io/blockrose-equipment-rental/) · 🎥 **Video tour** (40 s): [youtu.be/TUHIGXEr61s](https://youtu.be/TUHIGXEr61s)

## 📸 Preview

| Home page | Equipment catalogue |
| --- | --- |
| ![Home page of Block Rose: illustrations of the brand around the logo, then the rental pitch](docs/img/accueil.png) | ![Catalogue page with the equipment cards](docs/img/materiel.png) |

| Contact page | Brand book: typography |
| --- | --- |
| ![Contact page with the phone, e-mail and social blocks and the contact form](docs/img/contact.png) | ![Typographic rules of the brand book](docs/img/typo.png) |

## 🎯 The Brief

The client provided a detailed brand book and a specification. The constraints shaped every choice:

- strict respect of the **brand book**: the imposed typefaces by heading level, the palette, the illustration style;
- a clear interface oriented towards the user experience, responsive on phone and desktop;
- **no framework**: plain HTML, CSS and JavaScript;
- the pages a rental company needs: home, catalogue, about, contact, and the legal pages (terms of sale, terms of use, legal notice, privacy and cookie policies).

The original French presentation of the project, with more extracts of the brand book, is kept in [`docs/presentation-fr.md`](docs/presentation-fr.md).

## 🛠️ How It Works

| Path | Role |
| --- | --- |
| `index.html` | Redirects to the home page (GitHub Pages serves the repository root) |
| `pages/accueil.html` | Home: the illustrations of the brand around the logo, the rental pitch, the steps of a rental |
| `pages/materiel.html` | Catalogue of the equipment with cards and a detail view (script `js/materiel.js`) |
| `pages/a-propos.html`, `pages/contact.html` | About page and contact page with a form (front-end only, no backend was planned yet) |
| `pages/cgv.html`, `conditions-utilisation.html`, `mentions-legales.html`, `politique-confidentialite.html`, `politique-cookies.html` | Legal pages |
| `css/base.css`, `css/menu.css`, `css/footer.css` | Shared styles: typefaces of the brand book (`fonts/`), palette, header and footer |
| `css/<page>.css` | One stylesheet per page |
| `js/` | Small interactions: reveal of the footer on scroll, copy of the contact details, catalogue |
| `images/` | Logo, illustrations and product pictures of the brand |
| `scripts/check-site.mjs` | The consistency check run by the CI (see [Tests and Quality](#-tests-and-quality)) |

### What the interruption left unfinished

- The contact details (`06 00 00 00 00`, `exemple@gmail.com`, `wa.me/tonnumero`) and the social links are placeholders.
- The contact form has no backend.
- The catalogue shows a sample of products.

## 🚀 Getting Started

The site is static: open `pages/accueil.html` in a browser, or serve the folder. Node.js 22 is only needed for the linters and the site check.

```bash
git clone https://github.com/BnRomain/blockrose-equipment-rental.git
cd blockrose-equipment-rental
python -m http.server 8000      # then open http://localhost:8000/

npm ci
npm run lint                    # html-validate, stylelint and ESLint
npm run check                   # referenced files, file names, image budget
```

Merging to `main` deploys the demo on GitHub Pages.

## 🗂️ Repository Structure

```text
blockrose-equipment-rental/
├── index.html                    redirect to pages/accueil.html
├── pages/                        the nine pages of the site
├── css/                          shared styles and one stylesheet per page
├── js/                           interactions
├── images/                       logo, illustrations, product pictures
├── fonts/                        typefaces of the brand book
├── scripts/check-site.mjs        consistency check of the site (npm run check)
├── docs/
│   ├── presentation-fr.md        the original presentation of the project (French)
│   └── img/                      screenshots and extracts of the brand book
├── Brandbook.pdf                 the client's brand book
├── .github/                      workflows, issue and pull request templates, Dependabot
├── package.json                  linters (pinned versions), no runtime dependency
├── CODE_OF_CONDUCT.md            code of conduct
├── CONTRIBUTING.md               contributing guide
├── LICENSE                       MIT License (code only)
└── SECURITY.md                   security policy
```

## ✅ Tests and Quality

On every pull request and every push to `main`, GitHub Actions runs:

- **lint**: html-validate on the pages, stylelint on the stylesheets and ESLint on the scripts;
- **site**: `scripts/check-site.mjs` checks that every stylesheet, script, image and page referenced by the pages exists, that file names stay in ASCII (accented names broke the URLs of the 2024 version), and that every image stays under 700 kB;
- **docs**: markdownlint, then lychee checks the links, heading anchors and images of the Markdown and HTML files;
- **Dependency review**: blocks a pull request that adds a vulnerable dependency;
- **CodeQL**: security analysis of the JavaScript and the workflows.

The `main` branch is protected: every change goes through a pull request and can only be merged once these checks pass. Secret scanning with push protection blocks any committed credential.

Versions follow [Semantic Versioning](https://semver.org/) and are published as [GitHub releases](https://github.com/BnRomain/blockrose-equipment-rental/releases): see the [contributing guide](CONTRIBUTING.md#versioning-and-releases).

**Dependabot** monitors the development tools and the GitHub Actions. Patch and minor updates are merged automatically once the required checks of `main` have passed. See also the [security policy](SECURITY.md) and the [wiki](https://github.com/BnRomain/blockrose-equipment-rental/wiki).

## 🙏 Acknowledgments

- Block Rose, for the brief and the brand book.
- [html-validate](https://html-validate.org/), [stylelint](https://stylelint.io/) and [ESLint](https://eslint.org/), the only dependencies of the project, used in development only.

## 🤝 Contributing

Contributions are welcome. Please read the [contributing guide](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md) before opening an issue or a pull request. Security vulnerabilities must be reported privately, as described in the [security policy](SECURITY.md).

## 📜 License

The source code is released under the [MIT License](LICENSE). The brand book, the logo, the illustrations, the product pictures and the typefaces of `fonts/` belong to Block Rose or to their respective owners: they are not covered by this license.
