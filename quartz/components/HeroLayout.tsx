import { QuartzComponentProps } from "./types"

export default function HeroLayout({ fileData }: QuartzComponentProps) {
  const {
    heroImage = "/static/images/hero-default.jpg",
    heroHeading = "Welcome",
    heroSubheading = "Subheading goes here",
  } = fileData.frontmatter ?? {}

  return (
    <div className="hero-layout">
      <section
        className="hero-banner"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-text">
          <h1>{heroHeading}</h1>
          <p>{heroSubheading}</p>
        </div>
      </section>
      <article dangerouslySetInnerHTML={{ __html: fileData.html }} />
    </div>
  )
}
