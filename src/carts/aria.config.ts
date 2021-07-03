import { defineConfig } from 'aria-build'
import tsPathsResolve from "rollup-plugin-ts-paths-resolve"

const replace = require('@rollup/plugin-replace')

export default defineConfig({
  plugins: {
    after: [ 
      tsPathsResolve(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  }
})