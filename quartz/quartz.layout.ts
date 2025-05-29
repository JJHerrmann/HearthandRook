import { QuartzComponents } from "./components/types"
import ContentMeta from "./components/ContentMeta"
import Body from "./components/Body"
import Spacer from "./components/Spacer"
import Backlinks from "./components/Backlinks"
import TagList from "./components/TagList"

export const components: QuartzComponents = [
  ContentMeta(),
  Body(),
  Spacer(),
  Backlinks(),
  TagList(),
]
