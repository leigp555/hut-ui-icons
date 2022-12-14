import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const overrides = {
  compilerOptions: { declaration: true }, // 生成.d.ts的文件
}

export default {
  input: 'src/icons-vue/index.ts',
  output: [
    {
      file: './dist/hut_icon_umd.js',
      format: 'umd',
      name: 'hut',
    },
    {
      file: './dist/hut_icon_es.js',
      format: 'es',
    },
    {
      file: './dist/hut_icon_cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    vue(),
    babel({
      exclude: 'node_modules/**',
    }),
    nodeResolve(),
    typescript({ tsconfigOverride: overrides, check: false }),
    postcss({
      plugins: [autoprefixer(), cssnano()],
    }),
    commonjs(),
    terser(),
  ],
  external: ['vue'],
}
