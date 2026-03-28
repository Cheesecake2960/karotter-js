import type { UserType } from "./user.js"

/** フォロワーのリスト。 */
export type FollowersInfoType = {
  users: (Pick<
    UserType,
    | "id"
    | "username"
    | "displayName"
    | "avatarUrl"
    | "avatarFrameId"
    | "bio"
    | "followersCount"
    | "isPrivate"
    | "officialMark"
  > & { is_following: boolean; follow_request_sent: boolean })[]
  pagination: { hasNext: boolean; nextCursor: number }
}

/** フォローしている人のリスト。 */
export type FollowingInfoType = FollowersInfoType
