# Screenfix - Official Website
<p align="center">
  <a href="https://screenfix.fr">
    <img width="300" height="300" src="public/screenfix-banner.png" alt="Screenfix Logo" />
  </a>
</p>


The official source code of the Screenfix's Website. this is a dynamic website using React+Vite.

## 🌲 Branches
The source of the website is separated in many different branches:
- The **[master branch](https://github.com/Entertainment-Visual-Art-Studio/Screenfix/tree/master)**: It is the actual hub of the Development team with no major bugs and a github page workflow. It is also the one that will be used to deploy the website.

- The **[dev branch](https://github.com/Entertainment-Visual-Art-Studio/Screenfix/tree/dev)**: It is the main dev branch where people actually work on the website. Every other dev branches will point to that one. It is the most active branch on the repository and it is constantly tested by QA team. It may have some major bugs in it, or even not compile at all. But other branches can be created to handle those problems (if they're getting too big)

- The features branches: Branches whose name start with ``features`` are branches created for a specific feature that may not be without issues

- The bugs branches: Branches whose name start with ``bugs`` are branches created for a specific issue in the dev branch to fix.

  They are generally created when the bug is quite annoying but can still allow the website to compile successfully (that implies     that major bugs are needed to be fix in the actual ``dev`` branch or the one where the feature comes from).

- release branches: Branches named before an older version of the website to keep track of the old archives.

## 🛠️ Technologies Used

- **React** for UI 
- **Tailwind CSS** for style
- **Vite** for the SSR

## ▶️ Getting started

1. Clone this repository: ``git clone https://github.com/Entertainment-Visual-Art-Studio/Screenfix.git``
2. Install Dependencies by going into the repository folder and typing in command prompt ``npm install``
3. Run a local server: ``npm run dev``

If you followed perfectly these steps, everything should run perfectly fine !

## 💻 Contributing
Contributions to Screenfix official website development through pull requests on GitHub.
To contribute correctly, please go read the [contributing file](CONTRIBUTING.md) on the root of this repository.

All contributions are under the license of this repository.

## License
This repository is under the [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).

the code source of this website belongs to EVA STUDIO.
