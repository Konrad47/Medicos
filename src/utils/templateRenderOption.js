import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"

export const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (node.data.target.file === undefined) return
      return (
        <img
          className="article-img"
          src={node.data.target.file.url}
          alt={node.data.target.title}
        />
      )
    },
    [BLOCKS.HEADING_1]: heading => {
      return <h1>{heading.content[0]?.value}</h1>
    },
    [BLOCKS.HEADING_2]: heading => {
      return <h2>{heading.content[0]?.value}</h2>
    },
    [BLOCKS.HEADING_3]: heading => {
      return <h3>{heading.content[0]?.value}</h3>
    },
  },
}
