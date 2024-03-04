## Getting started

To work with this build, clone the entire contents of the repository `git clone <this repo>`

After that, while in the main project folder, run the npm i command, which will automatically install all the necessary dependencies specified in the package.json file.
You can then use any of the available build commands (the resulting files will be placed in the app folder in the root directory):<br>

`gulp` - The base command that starts the build for development.

`gulp build` - command to build the project. All assemblies are optimized and compressed for hosting.

`gulp cache` - this command should be run after `gulp build` if you need to upload new files to the hosting without using caching.

`gulp backend` - command for building the backend part of the project. It contains only necessary elements and is not compressed, which makes it convenient for a backend developer.

`gulp zip` - this command packs your finished code into a zip archive.

## Folder and file structure

```
├── src/                                      # Sources
│   ├── js                                    # Scripts
│   │   └── main.js                           # Main script
│   │   ├── _vendor.js                        # library connection file
│   │   ├── _components.js                    # component connection file
│   │   ├── components                        # js components
│   │   ├── vendor                            # folder for downloading local versions of libraries
│   ├── scss                                  # Main styles folder
│   │   └── main.scss                         # Main style file
│   │   └── vendor.scss                       # File for connecting library styles from the vendor folder
│   │   └── _fonts.scss                       # File for connecting fonts (you can use myxin)
│   │   └── _mixins.scss                      # File for connecting mixins from the mixins folder
│   │   └── _vars.scss                        # File for writing css or scss variables
│   │   └── _base-variables.scss              # File with global variables
│   │   └── _colors-variables.scss            # File with color variables
│   │   └── _offset-system-variables.scss     # File with offset system variables
│   │   └── _reset.scss                       # File with global tag reset
│   │   └── _settings.scss                    # File for writing global styles
│   │   └── _unitary-classes.scss             # File with unitary classes that are reused throughout the project
│   │   ├── components                        # scss components
│   │   ├── mixins                            # folder for saving finished mixins components
│   │   ├── vendor                            # folder for storing local css styles of libraries
│   ├── partials                              # folder for storing html partials of the page
│   ├── pages                                 # folder for storing html pages of the project
│   ├── img                                   # folder for storing img
│   │   ├── svg                               # special folder for converting svg to sprite
│   ├── resources                             # folder for storing other assets - php, video files, favicon, etc.
│   │   ├── fonts                             # folder for storing fonts in woff2 format
│   └── index.html                            # Main html file
└── gulpfile.js                               # Gulp configuration file
└── package.json                              # file with build settings and installed packages
└── .editorconfig                             # file with code formatting settings
└── .ecrc                                     # editorconfig-checker package settings file (excludes unnecessary folders)
└── .stylelintrc                              # stylelint file
└── .prettierrc                               # Prettier settings file
└── README.md                                 # README build
```

## Working with html

With **gulp-file-include** you can split the html file into different templates, which should be stored in the **partials** folder.

> To insert html parts into the main file, use `@include('partials/filename.html')`

If you use the `gulp build` command, you will get one line minified html code for all html files.

## Working with CSS

In build, the **sass** preprocessor in **scss** syntax is used.

Styles written in **components** should be plugged into **main.scss**.

To connect third-party css files (libraries) - put them in the **vendor** folder and connect them in the **\_vendor.scss** file.

In the final folder **app/css** two files are created: <br> **main.css** - for page styles, <br> **vendor.css** - for styles of all libraries used in the project.

## Working with JavaScript

Webpack is used to build the JS code.

JS code is better divided into components - small js-files that contain their own, isolated from each other implementation. Place such files in the **components** folder, and then import them into the **\_components.js** file

The **main.js** file is the main file where all the others are connected.

You can connect third-party libraries via npm, there is a **\_vendor.js** file for this purpose. Import the connections there.

If some library is not in npm or you just need to connect something with a local file - put it in the **vendor** folder and import it in the same way, but with the path to the file.

## Working with fonts

The build implements support for **woff2** format only

Load the **woff2** files into the **resources/fonts** folder, and then call the `@font-face` mixin in the **\_fonts.scss** file.

Also, don't forget to put the same fonts in `<link preload>` in the html.

## Working with images

Put any images other than **favicon** in the **img** folder.

If you need to make an svg sprite, put the svg files needed for the sprite in the **img/svg** folder. At the same time, attributes like fill, stroke, style will be automatically removed. Other svg files just leave them in the **img** folder.

If you use the `gulp build` command, you will get minified images in the final **img** folder.

## Working with other resources

Any project resources (assets) that do not have a corresponding folder should be stored in the **resources** folder. These can be video files, php files (such as form submission file), favicon and others.

## Typographer

For the correct display of text on the page was connected plugin typographer, which will automatically add unbroken spaces and other characters, so that the text everywhere displayed according to all the rules of the language.

## Seo optimization

The main index.html lists a brief excerpt and descriptions of each meta tag

