import type { Circle } from "./circle.js"
import type { PollType } from "./poll.js"
import type { ReactionSummaryType, ReactionType } from "./reaction.js"
import type { UserType } from "./user.js"

export type AuthorType = Pick<
  UserType,
  | "id"
  | "username"
  | "displayName"
  | "avatarUrl"
  | "avatarFrameId"
  | "officialMark"
  | "isBotAccount"
  | "isParodyAccount"
  | "hideProfileFromMinors"
  | "isPrivate"
> & {
  adminForceBot: boolean
  adminForceParody: boolean
  adminForceHidden: boolean
}

/** ユーザーによる投稿。カロートと呼ばれる。 */
export type PostType = {
  /** 投稿のユニークなID */
  id: number

  /** 投稿の本文 */
  content: string

  /** 投稿の作者のユーザーID */
  authorId: number

  /** 投稿の親となる投稿のID */
  parentId: number | null

  /** 引用した投稿のID */
  quotedPostId: number | null

  /** メディアのURL */
  mediaUrls: string[]

  /** メディアの形式 */
  mediaTypes: ("image" | "video")[]

  /** メディアの代替テキスト */
  mediaAlts: string[]

  /** メディアのスポイラー属性 */
  mediaSpoilerFlags: boolean[]

  /** メディアの18歳以上向け属性 */
  mediaR18Flags: boolean[]

  /** 投稿が18歳以上を対象にしたものかどうか */
  isR18: boolean

  /** 未成年ユーザーに投稿を表示しないかどうか */
  hideFromMinors: boolean

  /** 管理者によって強制的に非表示にされたかどうか */
  adminForceHidden: boolean

  /** 管理者によって強制的に18歳以上を対象にされたかどうか */
  adminForceR18: boolean

  /** 不明 */
  embedUrl: string | null

  /** 不明 */
  embedTitle: string | null

  /** 不明 */
  embedDescription: string | null

  /** 不明 */
  embedImage: any | null

  /** いいね数 */
  likesCount: number

  /** リカロット数 */
  rekarotsCount: number

  /** 返信数 */
  repliesCount: number

  /** 閲覧数 */
  viewsCount: number

  /** 返信可能なユーザーの制限
   * - `EVERYONE`: 全員
   * - `FOLLOWING`: フォローしている人
   * - `MENTIONED`: メンションした人
   * - `CIRCLE`: `replyCircleId`のサークル
   */
  replyRestriction: "EVERYONE" | "FOLLOWING" | "MENTIONED" | "CIRCLE"

  /** `replyRestriction`が`CIRCLE`の時に、返信できるサークルのID */
  replyCircleId: number | null

  /** 不明 */
  excludedMentions: any[]

  /** 投稿がAI生成されたものかどうか */
  isAiGenerated: boolean

  /** 投稿がプロモーションを目的としたものかどうか */
  isPromotional: boolean

  /** 投稿の編集日時のISO表記 */
  editedAt: string | null

  /** 投稿の作成日時のISO表記 */
  createdAt: string

  /** 投稿の更新日時のISO表記 */
  updatedAt: string

  /**
   * `visibility`が`CIRCLE`の際に閲覧することができるサークルのID
   */
  viewerCircleId: number | null

  /** 投稿の閲覧が可能なユーザー
   * - `PUBLIC`: 全員
   * - `CIRCLE`: `viewerCircle`に属するユーザー
   * - `FOLLOWERS`: フォロワーのみ
   */
  visibility: "PUBLIC" | "CIRCLE" | "FOLLOWERS"

  /** 投稿の作者 */
  author: AuthorType

  /** 引用した投稿 */
  quotedPost: PostType | null

  /**
   * `visibility`が`CIRCLE`の際に閲覧することができるサークル
   */
  viewerCircle: Circle | null

  /** 投稿に関連づけられた投票 */
  poll: PollType | null

  /** 投稿の返信先 */
  replyTargets: {
    id: number
    postId: PostType["id"]
    userId: UserType["id"]
    source: "PARENT_AUTHOR" | "THREAD_PARTICIPANT"
    createdAt: string
    user: Omit<AuthorType, "hideProfileFromMinors" | "adminForceHidden">
  }[]

  replyToUsers: Omit<AuthorType, "hideProfileFromMinors" | "adminForceHidden">[]

  /** 投稿に対するリアクションの合計 */
  reactions: ReactionType[]

  /** 誰が投稿にいいねしたか
   * @note 自分の投稿でない場合はこのフィールドは空になります
   */
  likes: []

  /** 不明
   * @note 誰が投稿をリカロートしたかと推測できるが、未使用のフィールド
   */
  rekarots: { id: UserType["id"] }[]

  /** 誰が投稿にブックマークしたか
   * @note 自分の投稿でない場合はこのフィールドは空になります
   */
  bookmarks: { id: UserType["id"] }[]

  /**
   * いいね数、リカロート数、リプライ数、ブックマーク数
   * @note `likes`は`likesCount`と対応しており、各項目で違いはない模様
   */
  _count: {
    likes: PostType["likesCount"]
    rekarots: PostType["rekarotsCount"]
    replies: PostType["repliesCount"]
    bookmarks: PostType["bookmarksCount"]
  }

  /** 自分がいいねしたかどうか */
  liked: boolean

  /** 自分がリカロートしたかどうか */
  rekaroted: boolean

  /** 自分がブックマークしたかどうか */
  bookmarked: boolean

  /** リアクション別のカウント */
  reactionSummary: ReactionSummaryType[]

  /** ブックマークされた回数 */
  bookmarksCount: number

  /** 投稿を引用したユーザーの数 */
  quoteUsersCount: number

  /** 投稿を引用した投稿の数 */
  quotePostsCount: number

  /** 不明
   * @note `replyRestriction`が`CIRCLE`の時に、返信できるサークルだと思われるが、未使用のフィールド
   */
  replyCircle: null

  /** 投稿が自分にミュートされたかどうか */
  isMutedByViewer: boolean

  /** 投稿の作者にブロックされているかどうか
   * @note `true`になっている投稿を見たことがないのであくまでも推測
   */
  hasBlockedAuthor: boolean

  /** 投稿の作者にブロックされているかどうか
   * @note `true`になっている投稿を見たことがないのであくまでも推測
   */
  isBlockedByAuthor: boolean

  /** 不明 */
  canInteract: boolean

  /** 引用可能かどうか
   * @note `false`になっている投稿を見たことがないのであくまでも推測
   */
  canQuote: boolean
}

export type NewPostType = Pick<
  PostType,
  | "content"
  | "isAiGenerated"
  | "isPromotional"
  | "isR18"
  | "hideFromMinors"
  | "visibility"
  | "replyRestriction"
  | "mediaAlts"
  | "mediaSpoilerFlags"
  | "mediaR18Flags"
>
