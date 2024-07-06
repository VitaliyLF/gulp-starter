const srcFolder = './src'
const buildFolder = './app'

export const paths = {
  base: {
    src: srcFolder,
    build: buildFolder
  },
  srcSvg: `${srcFolder}/img/svg/**.svg`,
  srcImgFolder: `${srcFolder}/img`,
  buildImgFolder: `${buildFolder}/img`,
  srcScss: `${srcFolder}/styles/**/*.scss`,
  buildCssFolder: `${buildFolder}/css`,
  srcFullJs: `${srcFolder}/js/**/*.js`,
  srcMainJs: `${srcFolder}/js/main.js`,
  buildJsFolder: `${buildFolder}/js`,
  srcComponentsFolder: `${srcFolder}/components`,
  assetsFolder: `${srcFolder}/assets`
}
