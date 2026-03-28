import type { PostType } from "./post.d.ts"

/** 公式マーク
 * BLUE:    本人マーク
 * YELLOW:  認証済み団体マーク
 * ORANGE:  認証済みマーク
 * PURPLE:  運営マーク
 * GRAY:    政府関係者マーク
 * BLACK:   認証済みマーク
 * RED:     認証済みマーク
 * GREEN:   認証済みマーク
 */
export type OfficialMarkType =
  | "BLUE"
  | "YELLOW"
  | "ORANGE"
  | "PURPLE"
  | "GRAY"
  | "BLACK"
  | "RED"
  | "GREEN"

export type UserType = {
  /** ユーザーのユニークなID */
  id: number

  /** ユーザーのユニークなハンドルネーム */
  username: string

  /** ユーザーの表示名 */
  displayName: string

  /** ユーザーのアバター画像のURL */
  avatarUrl: string | null

  avatarFrameId: string | null // TODO

  /** プロフィールでピン留めされた投稿のID */
  pinnedPostId: PostType["id"]

  /** プロフィールのヘッダー画像のID */
  headerUrl: string | null

  /** プロフィールの自己紹介の文章 */
  bio: string | null

  /** ユーザーの誕生日 */
  birthday: string | null

  /** 誕生日の表示設定
   * - `PRIVATE`: 表示しない
   * - `FULL_DATE`: 年月を表示
   * - `MONTH_DAY`: 日付のみ
   */
  birthdayVisibility: "PRIVATE" | "FULL_DATE" | "MONTH_DAY"

  /** 誕生日の風船演出が有効かどうか */
  birthdayBalloonsEnabled: boolean

  /** 公式マーク */
  officialMark: OfficialMarkType[]

  /** ボット属性がついているかどうか */
  isBotAccount: boolean

  /** パロディ属性がついているかどうか */
  isParodyAccount: boolean

  /** 未成年のユーザーにプロフィールを非表示にするかどうか */
  hideProfileFromMinors: boolean

  /** プロフィールに表示するWebサイトのURL */
  websiteUrl: string

  /** プロフィールに表示する所在地 */
  location: string | null

  /** 不明
   * @note 現在は使用されていないが、プレミアム機能が追加される可能性あり
   */
  isPremium: boolean

  /** 非公開アカウントかどうか */
  isPrivate: boolean

  /** オンラインステータス */
  onlineStatus: "OFFLINE" | "ONLINE" | "DND" | "IDLE"

  /** プロフィールに表示されるステータスメッセージ */
  statusMessage: string | null

  /** オンラインステータスの公開範囲
   * - `PUBLIC`: 全員
   * - `FOLLOWERS`: フォロワーのみ
   * - `PRIVATE`: 非公開
   */
  onlineStatusVisibility: "PUBLIC" | "FOLLOWERS" | "PRIVATE"

  /** フォロワー数 */
  followersCount: number

  /** フォロー数 */
  followingCount: number

  /**　投稿数 */
  postsCount: number

  /**　作成日時 */
  createdAt: string

  /** 不明
   * @note バッジに関係するものとみられるが、現時点で使用されていないフィールド。
   */
  userBadges: unknown[]

  /** 不明
   * @note 年齢に関係するものとみられるが、現時点で使用されていないフィールド。
   */
  age: null

  /** 不明
   * @note バッジに関係するものとみられるが、現時点で使用されていないフィールド。
   */
  badges: unknown[]
}

export type UserInfoType = {
  /** 情報の対象となるユーザー */
  user: UserType

  /** 対象のユーザーをフォローしているかどうか */
  isFollowing: boolean

  /** 対象のユーザーからフォローされているかかどうか */
  isFollowedBy: boolean

  /** 対象のユーザーをブロックしているかどうか
   * @note `hasBlockedとの違いは不明`
   */
  isBlocked: boolean

  /** 対象のユーザーをブロックしているかどうか
   * @note `isBlockedとの違いは不明`
   */
  hasBlocked: boolean

  /** 対象のユーザーからブロックされているかどうか */
  isBlockedBy: boolean

  /** 対象のユーザーをミュートしているかどうか */
  isMuted: boolean

  /** 不明 */
  hasPendingRequest: boolean

  /** 共通のフォロワー数人 */
  mutualFollowersPreview: Pick<
    UserType,
    "id" | "username" | "displayName" | "avatarUrl"
  >[]

  /** 共通のフォロワーの人数 */
  mutualFollowersCount: number

  /** プロフィールでピン留めされた投稿 */
  pinnedPost: Post
}
