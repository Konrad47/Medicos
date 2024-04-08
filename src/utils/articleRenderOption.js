import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"

export const articleTextRenderOptions = {
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
      return <h1 className="h1-style">{heading.content[0]?.value}</h1>
    },
    [BLOCKS.HEADING_2]: heading => {
      return <h2 className="h2-style">{heading.content[0]?.value}</h2>
    },
    [BLOCKS.HEADING_3]: heading => {
      return <h3 className="h3-style">{heading.content[0]?.value}</h3>
    },
    [BLOCKS.HEADING_4]: heading => {
      return <h4 className="h4-style">{heading.content[0]?.value}</h4>
    },
    [BLOCKS.HEADING_5]: heading => {
      return <h5 className="h5-style">{heading.content[0]?.value}</h5>
    },
    [BLOCKS.HEADING_6]: heading => {
      return <h6 className="h6-style">{heading.content[0]?.value}</h6>
    },
  },
}
