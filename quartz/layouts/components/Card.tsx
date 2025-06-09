import { QuartzComponentProps } from "../../types"
import { FullSlug, resolveRelative } from "../../util/path"

export const Card = ({ file }: QuartzComponentProps) => {
  const title = file.frontmatter?.title || file.slug
  const description = file.frontmatter?.description || ""
  const link = resolveRelative("index" as FullSlug, file.slug as FullSlug)
  return (
    <a class="card" href={link}>
      <div class="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  )
}
