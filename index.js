const { rollup } = require('rollup');
const commonjs = require('rollup-plugin-commonjs');

async function run() {
    try {
        const bundle = await rollup({
            input: './src/index.js',
            plugins: [
                commonjs(),
            ]
        });
        const code = await bundle.generate({
            format: 'cjs'
        });
        console.log(code);
    } catch(error) {
        console.log(error);
    }
}

run();
