# Webpack Practice
This is where I practice using webpack. I will try to explain what npm package I use and what it use for?

### Webpack
| Package | Detail |
| - | - |
| [webpack](https://github.com/webpack/webpack) | webpack program |


### Transpiling code to ES5
| Package | Detail |
| - | - |
| [babel-loader](https://github.com/babel/babel-loader) | webpack loader |
| [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) | use for parsing, transforming, and generation code |
| [babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) | set of plugins to use in transforming process |


### CSS management
| Package | Detail |
| - | - |
| [css-loader](https://github.com/webpack-contrib/css-loader) | webpack loader use for reading css code that import to .js file |
| [style-loader](https://github.com/webpack-contrib/style-loader) | use for injecting css into html |
| [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) | use for bundle css file into single file |


### Image management
| Package | Detail |
| - | - |
| [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) | webpack loader use for reading image files that import to .js file  |
| [url-loader](https://github.com/webpack-contrib/url-loader) | use for adding _public path url prefix_ to image file |
| [file-loader](https://github.com/webpack-contrib/file-loader) | use for url-loader |
