import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
}
