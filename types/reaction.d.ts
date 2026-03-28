import type { UserType } from "./user.js"

/** 投稿に対する絵文字のリアクション */
export type ReactionType = {
  /** リアクションの絵文字 */
  emoji: string

  /** リアクションしたユーザーのID */
  userId: UserType["id"]
}

/** 投稿に対する絵文字のリアクション別のカウント */
export type ReactionSummaryType = {
  /** リアクションの絵文字 */
  emoji: ReactionType["emoji"]

  /** リアクションをしたユーザーの合計人数 */
  count: number

  /** 自分がそのリアクションをしたかどうか */
  reacted: boolean
}
