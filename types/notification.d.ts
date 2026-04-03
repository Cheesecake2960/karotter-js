import type { PostType } from "./post.js"
import type { UserType } from "./user.js"

export type NotificationKindType =
  | "LIKE"
  | "REKAROT"
  | "REPLY"
  | "MENTION"
  | "FOLLOW"
  | "FOLLOW_REQUEST"

export type NotificationType = {
  actor: Pick<
    UserType,
    | "avatarFrameId"
    | "avatarUrl"
    | "displayName"
    | "id"
    | "isBotAccount"
    | "isParodyAccount"
    | "isPrivate"
    | "officialMark"
    | "username"
  > & { adminForceBot: boolean; adminForceParody: boolean }
  actorCount: number
  actorId: NotificationType["actor"]["id"]
  actors: NotificationType["actor"][]
  createdAt: string
  groupKey: string
  id: number
  isRead: boolean
  likeContext: "OTHER" | unknown
  message: null | unknown
  notificationIds: NotificationType["id"][]
  post: Pick<
    PostType,
    "author" | "content" | "createdAt" | "id" | "mediaTypes" | "mediaUrls"
  >
  postCount: number
  posts: NotificationType["post"][]
  reactionEmojis: [] | unknown
  rekarotContext: "OTHER" | unknown
  type: NotificationKindType
  userId: UserType["id"]
}
