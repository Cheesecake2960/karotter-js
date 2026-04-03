import type { PostType } from "./post.js"
import type { UserType } from "./user.js"

/** 通知の種類 */
export type NotificationKindType =
  | "LIKE"
  | "REKAROT"
  | "REPLY"
  | "MENTION"
  | "FOLLOW"
  | "FOLLOW_REQUEST"

export type NotificationType = {
  /** 通知の原因となったユーザー */
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

  /** 通知の原因となったユーザーのカウント */
  actorCount: number

  /** 通知の原因となったユーザーのID */
  actorId: NotificationType["actor"]["id"]

  /** 通知の原因となったユーザー(複数) */
  actors: NotificationType["actor"][]

  /** 通知の作成日時 */
  createdAt: string

  /** typeによって様々な文字列だが、通知のグループ化に使われるものと推測される */
  groupKey: string

  /** 通知のID */
  id: number

  /** 通知が読まれたか */
  isRead: boolean

  /** 不明、他にも存在するかもしれない */
  likeContext: "OTHER" | "OWN_POST" | string

  /** 返信などのメッセージ */
  message: string | null

  notificationIds: NotificationType["id"][]

  /** 返信された時の通知などの場合に、返信先の投稿 */
  post: Pick<
    PostType,
    "author" | "content" | "createdAt" | "id" | "mediaTypes" | "mediaUrls"
  > | null

  /** 返信された時の通知などの場合に、返信先の投稿のカウント */
  postCount: number

  /** 返信された時の通知などの場合に、返信先の投稿のID */
  postId: number | null

  /** 返信された時の通知などの場合に、返信先の投稿(複数) */
  posts: NotificationType["post"][]

  /** リアクションされた時に、リアクションの絵文字が入るリスト */
  reactionEmojis: string[]

  /** 不明 */
  rekarotContext: "OTHER" | unknown

  /** 通知のタイプ */
  type: NotificationKindType

  /** 通知の対象になるユーザーのID */
  userId: UserType["id"]
}
