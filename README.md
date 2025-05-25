<div align="center">
<p><img src="https://tpverstak.ru/wp-content/uploads/2018/09/7fb34ea5d33344da61d80-2.jpg" alt="Gulp Logo"></p>
</div>

## 📦 Getting started <a href="https://github.com/VitaliyLF/gulp-starter/stargazers"><img src="https://img.shields.io/github/stars/VitaliyLF/gulp-starter" alt="Stars Badge"/></a>

To work with this build, clone the entire contents of the repository using:<br>

`git clone <this repo>`

After cloning, navigate to the main project folder and run the following command to install all necessary dependencies specified in the package.json file:<br>

```shell
npm i
```

Once the dependencies are installed, you can use any of the available build commands. The resulting files will be placed in the `app` folder in the root directory:

```shell
 gulp
```

The base command that starts the build process for development.

```shell
 gulp build
```

Builds the project, optimizing and compressing all files for hosting.

```shell
 gulp cache
```

Run this command after gulp build if you need to upload new files to the hosting without using caching.

```shell
 gulp backend
```

Builds the backend part of the project. This build contains only the necessary elements and is not compressed, making it convenient for backend development.

```shell
 gulp zip
```

Packs your finished code into a zip archive.

```shell
 npm run deploy
```

Creates a temporary clone of the current repository, generates a gh-pages branch if it doesn't already exist, copies all files from the base path (or those matching patterns from the optional src configuration), commits all changes, and pushes to the origin remote.

`By following these steps, you'll be set up to work with the project efficiently.`

## 📁 Folder and file structure

```
├── 📁.vscode/
    ├──📃extensions.json                        # Recommended extensions
├── 📁gulp/                                     # All Gulp build settings, divided into separate files
    ├── 📁config/                               # Configuration files
    └── 📁tasks/                                # Task files for gulp
├── 📁src/                                      # Sources
│   ├── 📁assets/                               # folder for storing other assets
│   │   └──📁 fonts/                            # folder for storing fonts in woff2 format
│   │   └──📁 video/                            # folder for video files
│   │   ├──📃 favicon.ico                       # favicon
│   ├── 📁components/                           # Components folder
│   │   ├── 📁head/                            # Head components
│   │   ├── 📁layout/                          # Layout components (header, footer)
│   │   ├── 📁section/                         # Section components
│   │   └── 📁ui/                              # UI components
│   ├──📁js/                                    # Scripts
│   │   └──📁 components/                       # js components
│   │   ├──📁 functions/                        # File with ready-to-use js functions
│   │   ├──📃 _components.js                    # component connection file
│   │   └──📃 main.js                          # Main script
│   ├── 📁styles/                              # Main styles folder
│   │   └──📁components/                        # Style components
│   │   │   ├── 📁layout/                      # Layout styles
│   │   │   ├── 📁section/                     # Section styles
│   │   │   └── 📁ui/                          # UI component styles
│   │   └──📁helpers/                          # Helper styles
│   │   ├──📃 _fonts.scss                      # File for connecting fonts
│   │   ├──📃 _globals.scss                    # Global styles
│   │   ├──📃 _normalize.scss                  # File with global tag reset
│   │   ├──📃 _utils.scss                      # Utility styles
│   │   ├──📃 _variables.scss                  # Global variables
│   │   ├──📃 main.scss                        # Main stylesheet
│   │   └──📃 vendor.scss                      # Vendor styles
│   ├── 📁img/                                 # Images folder
│   │   └──📁svg/                              # SVG files for sprite
│   └── 📁pages/                               # HTML pages
├── 📁app/                                      # Development build directory
├── 📁build/                                    # Production build directory
└── 📃 gulpfile.js                             # Gulp configuration file
└── 📃 package.json                            # Project dependencies and scripts
└── 📃 .editorconfig                           # Editor configuration
└── 📃 .ecrc                                   # Editorconfig-checker settings
└── 📃 .prettierrc                             # Prettier settings
└── 📃 SECURITY.md                             # Security guidelines
└── 📃 LICENSE                                 # License information
└── 📃 README.md                               # Project documentation
```

## 🔖 Working with HTML

Using **gulp-file-include**, you can divide an HTML file into various templates, which should be stored in the **components** folder.

---

> [!NOTE] > **To insert HTML parts into the main file, use `@include('../components/filename.html')`**

---

When you run the `gulp build` command, all HTML files will be minified into a single line of code.

## 💎 Working with CSS

The **SASS** preprocessor using **SCSS** syntax is employed during the build process.

Styles written within **components** should be included in the **main.scss** file.

To incorporate third-party CSS files (libraries), place them in the **vendor** folder and reference them in the **\_vendor.scss** file.

In the final folder **app/css**, two files are generated:

- **main.css** - for page styles,
- **vendor.css** - for the styles of all libraries used in the project.

## 📝 Working with JavaScript

Webpack is used to build the JS code.

JavaScript code is better organized when divided into components — small JS files that contain their own isolated implementations. Place these files in the **components** folder, and then import them into the **\_components.js** file.

The **main.js** file is the primary file where all the others are included.

## ✒️ Working with fonts

The build supports only the **woff2** format.

Place the **woff2** files in the **assets/fonts** folder, and then call the @font-face mixin in the **\_fonts.scss** file.

Also, don't forget to include the same fonts in `<link preload>` in the HTML.

## 🎨 Working with images

Place any images other than the **favicon** in the **img** folder.

If you need to create an SVG sprite, put the SVG files needed for the sprite in the **img/svg** folder. Attributes like fill, stroke, and style will be automatically removed. For other SVG files, just leave them in the **img** folder.

If you use the `gulp build` command, you will get minified images in the final \*_img_ folder.

## 📜 Working with other assets

Any project assets that do not have a corresponding folder should be stored in the **resources** folder. These can include video files, favicon, and others.

## ⌨️ Typographer

A typographer plugin has been connected to ensure the correct display of text on the page. This plugin will **automatically** add non-breaking spaces and other characters, ensuring the text is displayed according to all language rules.

## ✅ Seo optimization

The main **index.html** file contains a brief excerpt and descriptions of each meta tag.

## ⭐ Thank you

Thank you for using this build. If you find it helpful, please give it a **star** on GitHub and follow the repository for updates. Your support is greatly appreciated!
