import type { UserType } from "./user.js"

export type LoginResponseType = {
  message: string
  accessToken: string
  sessionId: string
  deviceId: string
  user: Pick<UserType, "id" | "username" | "displayName" | "avatarUrl"> & {
    email: string
    emailVerified: boolean
  }
}
