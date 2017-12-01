# Webpack Practice
This is where I practice using webpack. I will try to explain what npm package I use and what it use for?

### Transpiling code to ES5
| Package | Detail |
| - | - |
| babel-loader | webpack loader |
| babel-core | use for parsing, transforming, and generation code |
| babel-preset-env | set of plugins to use in transforming process |

### CSS management
| Package | Detail |
| - | - |
| css-loader | webpack loader use for reading css code that import to .js file |
| style-loader | use for injecting css into html |
| extract-text-webpack-plugin | use for bundle css file into single file |

### Image management
| Package | Detail |
| - | - |
| image-webpack-loader | webpack loader use for reading image files that import to .js file  |
| url-loader | use for adding _public path url prefix_ to image file |
| file-loader | use for url-loader |
