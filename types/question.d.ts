import type { UserType } from "./user.js"
import type { PostType } from "./post.js"

export type QuestionType = {
  /** 質問の回答日時 (ISO) */
  answeredAt: string | null

  /** 質問に回答した投稿のIDなどを含む */
  answeredPost: { author: {username: UserType["username"]}, id: PostType["id"] } | null
  
  /** 質問の本文 */
  content: string

  /** 質問の作成日時 (ISO) */
  createdAt: string

  /** 質問のID */
  id: number

  /** 質問が読まれたかどうか */
  isRead: boolean

  /** 質問をしたユーザーの情報 */
  sender: Pick<UserType, "id" | "username" | "displayName" | "avatarFrameId" | "avatarUrl" | "officialMark">
}
