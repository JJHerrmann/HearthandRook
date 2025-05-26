import { QuartzComponentConstructor } from "./types"

const Head: QuartzComponentConstructor = () => {
  return () => (
    <>
      <link rel="stylesheet" href="/styles/global.css" />
    </>
  )
}

export default Head
