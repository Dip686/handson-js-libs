import babelMinify from 'rollup-plugin-babel-minify';
export default {
  input: {a: 'src/index.js'},
  output: {
    entryFileNames: 'entry-[name].js',
    format: 'iife'
  },
  plugins: [babelMinify()],
  external:['fusioncharts']
};

// export default {
//   input: {
//     a: 'src/main-a.js',
//     'b/index': 'src/main-b.js'
//   },
//   output: {
//     entryFileNames: 'entry-[name].js',
//     format: 'es',
//     dir: 'dist'
//   }
// };