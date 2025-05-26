import { QuartzComponentConstructor } from "./types"

const Head: QuartzComponentConstructor = () => {
  return () => (
    <>
      <link rel="stylesheet" href="/custom.css" />
    </>
  )
}

export default Head