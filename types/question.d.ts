import type { UserType } from "./user.js"
import type { PostType } from "./post.js"

export type QuestionType = {
  answeredAt: string | null
  answeredPost: { author: {username: UserType["username"]}, id: PostType["id"] } | null
  content: string
  createdAt: string
  id: number
  isRead: boolean
  sender: Pick<UserType, "id" | "username" | "displayName" | "avatarFrameId" | "avatarUrl" | "officialMark">
}
