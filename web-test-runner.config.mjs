import { esbuildPlugin } from '@web/dev-server-esbuild'
import { puppeteerLauncher } from '@web/test-runner-puppeteer'

export default {
  browsers: [
    puppeteerLauncher({
      launchOptions: {
        args: ['--no-sandbox'],
      },
    }),
  ],
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      tsx: true,
      jsxFactory: 'h',
      jsxFragment: 'hf',
      // banner: `import { h, hf } from '@reatom/jsx'`,
    }),
  ],
}