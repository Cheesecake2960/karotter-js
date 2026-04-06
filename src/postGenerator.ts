import type { NewPostType } from "../types/post.js"

export class PostGenerator implements NewPostType {
  content: string
  isAiGenerated: boolean = false
  isR18: boolean = false
  isPromotional: boolean = false
  hideFromMinors: boolean = false
  visibility: "PUBLIC" | "CIRCLE" | "FOLLOWERS" = "PUBLIC"
  replyRestriction: "EVERYONE" | "FOLLOWING" | "MENTIONED" | "CIRCLE" = "EVERYONE"
  mediaAlts: string[] = []
  mediaSpoilerFlags: boolean[] = []
  mediaR18Flags: boolean[] = []

  constructor(content: string) {
    this.content = content
  }
  
  /**
  * @deprecated 未実装
  */
  addMedia({content, alt, spoilerFlag, R18Flag}: {content: unknown, alt?: string, spoilerFlag?: boolean, R18Flag?: boolean}) {
    this.mediaAlts.push(alt ?? "")
    this.mediaSpoilerFlags.push(spoilerFlag ?? false)
    this.mediaR18Flags.push(R18Flag ?? false)
  }
}
