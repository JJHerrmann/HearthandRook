import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { classNames } from "../util/lang"
import { Card } from "../components/Card"

export const MarketingHeroLayout: QuartzComponentConstructor = (props: QuartzComponentProps) => {
  const { cfg, fileData, allFiles } = props
  const featured = allFiles.filter(f => f.frontmatter?.featured)

  return () => (
    <div class="marketing-hero-layout">
      <section class="hero-section">
        <h1 class="hero-title">Smoke, Sigils, and Software</h1>
        <p class="hero-subtitle">A maximalist vault of ritual tech and rogue code.</p>
        <a href="/pantheon/" class="hero-cta">🔥 Enter the Vault</a>
        <a href="/agents/" class="hero-cta secondary">🧠 Meet the AI Agents</a>
      </section>

      <section class="featured-posts">
        {featured.slice(0, 6).map(file => (
          <Card key={file.slug} file={file} />
        ))}
      </section>
    </div>
  )
}