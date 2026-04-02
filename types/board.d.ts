import type { ReactionSummaryType } from "./reaction.js"
import type { UserType } from "./user.js"

export type BoardType = {
  /** 板が作成された日時(ISO)。 */
  createdAt: string

  /** 板の作者。 */
  creator: Pick<UserType, "id" | "username" | "displayName">

  /** 板の説明。 */
  description: string

  /** 板をフォローしているかどうか。 */
  followed: boolean

  /** 板に割り当てられるID。 */
  id: number

  /** 板で行われた最後の投稿の日時(ISO)。 */
  lastPostAt: string

  /** 板の年齢制限。 */
  minimumAge: number

  /** 返信(レス)の数。 */
  replyCount: number

  /** 板のURLに含まれるスラッグ。 */
  slug: string

  /** 板に含まれるスレッドの数。 */
  threadCount: number

  /** 板のタイトル。 */
  title: string
}

export type ThreadType = {
  /** スレッドの作者。 */
  author: Pick<UserType, "avatarUrl" | "displayName" | "id" | "username">

  /** スレッドの作者のID。 */
  authorId: UserType["id"]

  /** スレッドが属する板のID。 */
  boardId: BoardType["id"]

  /** スレッドの最初の本文。 */
  content: string

  /** スレッドが作成された日時(ISO)。 */
  createdAt: string

  /** スレッドをフォローしているかどうか。 */
  followed: boolean

  /** スレッドのID。 */
  id: number

  /** 画像のMIMEタイプ(image/pngなど)。 */
  imageTypes: string[]

  /** 画像URLの配列。 */
  imageUrls: string[]

  /** スレッドで行われた最後の返信。 */
  lastReplyAt: string

  /** 投稿に対して行われたリアクション。 */
  reactionSummary: ReactionSummaryType[]

  /** 返信の数。 */
  replyCount: number

  /** スレッドの題名。 */
  title: string

  /** スレッドの更新日時。 */
  updatedAt: string
}

export type ReplyType = Pick<
  ThreadType,
  | "author"
  | "authorId"
  | "boardId"
  | "content"
  | "createdAt"
  | "id"
  | "imageTypes"
  | "imageUrls"
  | "reactionSummary"
  | "updatedAt"
> & {
  /** 返信に割り当てられた番号。 */
  replyNumber: number

  /** 返信が属するスレッドのID。 */
  threadId: ThreadType["id"]
}
