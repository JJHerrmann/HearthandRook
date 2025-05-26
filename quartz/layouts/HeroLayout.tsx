import { QuartzComponentConstructor, QuartzComponentProps } from "../components/types"

const HeroLayout: QuartzComponentConstructor = () => {
  return ({ fileData, cfg, children }: QuartzComponentProps) => {
    const frontmatter = fileData.frontmatter ?? {}
    const title = frontmatter.title ?? "Welcome"
    const subtitle = frontmatter.description ?? ""

    return (
      <div class="hero-layout">
        {/* Optional: banner image */}
        <img src="/img/banner.png" alt="Hearth and Rook banner" class="hero-banner" />

        {/* Title & Subtitle */}
        <h1>{title}</h1>
        {subtitle && <p class="hero-subtitle">{subtitle}</p>}

        {/* Page content (from Markdown body) */}
        <article>{children}</article>
      </div>
    )
  }
}

export default HeroLayout
