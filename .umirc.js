export default {
  plugins: [
    ['umi-plugin-library', {
      input: 'components/index.js',
      esm: true,
      cjs: true,
      namedExports: {
        [require.resolve('react-is')]: ['ForwardRef', 'isElement', 'isValidElementType']
      }
    }]
  ]
}
