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

## 📝 Folder and file structure

```
├── 📁gulp/                                     # All Gulp build settings, divided into separate files
├── 📁src/                                      # Sources
│   ├──📁js                                     # Scripts
│   │   └──📁 components                        # js components
│   │   ├──📁 functions.js                      # File with ready-to-use js functions
│   │   ├──📃 _components.js                    # component connection file
│   │   └──📃 main.js                           # Main script
│   ├── 📁styles                                # Main styles folder
│   │   └──📁components                         # scss components
│   │   ├──📁mixins                             # folder for saving finished mixins components
│   │   ├──📁vendor                             # folder for storing local css styles of libraries
│   │   ├──📃 _base-variables.scss              # File with global variables
│   │   ├──📃 _colors-variables.scss            # File with color variables
│   │   ├──📃 _fonts.scss                       # File for connecting fonts (you can use myxin)
│   │   ├──📃 _mixins.scss                      # File for connecting mixins from the mixins folder
│   │   ├──📃 _offset-system-variables.scss     # File with offset system variables
│   │   ├──📃 _reset.scss                       # File with global tag reset
│   │   ├──📃 _settings.scss                    # File for writing global styles
│   │   ├──📃 _unitary-classes.scss             # File with unitary classes that are reused throughout the project
│   │   ├──📃 main.scss                         # Main style file
│   │   └──📃 vendor.scss                       # File for connecting library styles from the vendor folder
│   ├──📁 components                            # folder for storing html partials of the page
│   │   └──📃components-name.html               # particle html component
│   ├── 📁pages                                 # folder for storing html pages of the project
│   │   └──📃page-name.html                     # html pages
│   ├── 📁img                                   # folder for storing img
│   │   └──📁svg                                # special folder for converting svg to sprite
│   ├── 📁assets                                # folder for storing other assets - php, video files, favicon, etc.
│   │   └──📁 fonts                             # folder for storing fonts in woff2 format
│   │   ├──📃 fonts.woff2                       # fonts only woff2
│   │   ├──📃 favicon.ico                       # favicon
└── 📃 gulpfile.js                              # Gulp configuration file
└── 📃 package.json                             # file with build settings and installed packages
└── 📃 .editorconfig                            # file with code formatting settings
└── 📃 .ecrc                                    # editorconfig-checker package settings file (excludes unnecessary folders)
└── 📃 .prettierrc                              # Prettier settings file
└── 📃 README.md                                # README build
```

## 📁 Working with html

Using **gulp-file-include**, you can divide an HTML file into various templates, which should be stored in the **components** folder.

---

> [!NOTE] > **To insert HTML parts into the main file, use `@include('../components/filename.html')**

---

When you run the `gulp build` command, all HTML files will be minified into a single line of code.

## 📁 Working with CSS

The **SASS** preprocessor using **SCSS** syntax is employed during the build process.

Styles written within **components** should be included in the **main.scss** file.

To incorporate third-party CSS files (libraries), place them in the **vendor** folder and reference them in the **\_vendor.scss** file.

In the final folder **app/css**, two files are generated:

- **main.css** - for page styles,
- **vendor.css** - for the styles of all libraries used in the project.

## 📁 Working with JavaScript

Webpack is used to build the JS code.

JS code is better divided into components - small js-files that contain their own, isolated from each other implementation. Place such files in the **components** folder, and then import them into the **\_components.js** file

The **main.js** file is the main file where all the others are connected.

## 📁 Working with fonts

The build implements support for **woff2** format only

Load the **woff2** files into the **assets/fonts** folder, and then call the `@font-face` mixin in the **\_fonts.scss** file.

Also, don't forget to put the same fonts in `<link preload>` in the html.

## 📁 Working with images

Put any images other than **favicon** in the **img** folder.

If you need to make an svg sprite, put the svg files needed for the sprite in the **img/svg** folder. At the same time, attributes like fill, stroke, style will be automatically removed. Other svg files just leave them in the **img** folder.

If you use the `gulp build` command, you will get minified images in the final **img** folder.

## 📁 Working with other assets

Any project assets that do not have a corresponding folder should be stored in the **resources** folder. These can be video files, php files (such as form submission file), favicon and others.

## 📁 Typographer

For the correct display of text on the page was connected plugin typographer, which will automatically add unbroken spaces and other characters, so that the text everywhere displayed according to all the rules of the language.

## 📁 Seo optimization

The main index.html lists a brief excerpt and descriptions of each meta tag
