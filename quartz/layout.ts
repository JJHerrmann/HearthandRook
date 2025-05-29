import HeroLayout from "./components/HeroLayout"
import { renderPage } from "./components/renderPage"
import { QuartzComponentProps } from "./components/types"
import { components } from "./quartz.layout" // if you're in the quartz root


export const Layout = (props: QuartzComponentProps) => {
  const layout = props.fileData.frontmatter?.layout

  if (layout === "Hero") {
    return <HeroLayout {...props} /> // ✅ must be within a return
  }

} else {
    const { cfg, fileData, allFiles } = props
    const slug = fileData.slug!
    return renderPage(cfg, fileData, allFiles, slug, components)
  }
}
