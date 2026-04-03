import type { BoardType, ReplyType, ThreadType } from "../types/board.js"
import type { FollowersInfoType } from "../types/follow.js"
import type { LoginResponseType } from "../types/login.js"
import type {
  NotificationKindType,
  NotificationType,
} from "../types/notification.js"
import type { PostType } from "../types/post.js"
import type { UserInfoType, UserType } from "../types/user.js"
import axios, { type Axios } from "axios"

export class Client {
  private apiKey: string | undefined
  private client: Axios
  private accessToken: string | undefined

  constructor(apiKey?: string) {
    this.apiKey = apiKey
    this.client = axios.create({
      baseURL: "https://karotter.com",
      headers: {
        "X-API-Key": this.apiKey,
      },
      withCredentials: true,
    })

    this.client.interceptors.request.use((config) => {
      if (this.accessToken) {
        config.headers["Authorization"] = `Bearer ${this.accessToken}`
      }
      return config
    })
  }

  async getUser(userName: UserType["username"]) {
    const data = await this.client
      .get<UserInfoType>(`/api/users/${userName}`)
      .then((res) => res.data)
    return data
  }

  async getPost(id: PostType["id"]) {
    const data = await this.client
      .get<PostType>(`/api/posts/${id}`)
      .then((res) => res.data)
    return data
  }

  async login(
    credentials: { identifier: string; password: string },
    deviceInfo:
      | {
          clientType?: string
          deviceId?: string
          deviceName?: string
        }
      | undefined,
  ) {
    const {
      clientType = "web",
      deviceId = "00000000-0000-0000-0000-000000000000",
      deviceName = "Web on API",
    } = deviceInfo ?? {}
    const data = await this.client
      .post<LoginResponseType>("/api/auth/login", {
        ...credentials,
        ...{ clientType, deviceId, deviceName },
      })
      .then((res) => res.data)

    this.accessToken = data.accessToken

    return data
  }

  async getFollowers(
    id: UserType["id"],
    options: { limit?: number; cursor?: number },
  ) {
    const data = await this.client
      .get<FollowersInfoType>(
        `/api/users/${id}/followers?limit=${options.limit ?? 20}${options.cursor ? `&cursor=${options.cursor}` : ""}`,
      )
      .then((res) => res.data)
    return data
  }

  async getFollowing(
    id: UserType["id"],
    options: { limit?: number; cursor?: number },
  ) {
    const data = await this.client
      .get<FollowersInfoType>(
        `/api/users/${id}/following?limit=${options.limit ?? 20}${options.cursor ? `&cursor=${options.cursor}` : ""}`,
      )
      .then((res) => res.data)
    return data
  }

  async followUser(id: UserType["id"]) {
    const data = await this.client
      .post<{ message: string }>(`/api/follow/${id}`)
      .then((res) => res.data)
    return data
  }

  async unFollowUser(id: UserType["id"]) {
    const data = await this.client
      .delete<{ message: string }>(`/api/follow/${id}`)
      .then((res) => res.data)
    return data
  }

  async getRecommended(
    mode?: "latest" | "algorithm",
    options?: { limit?: number; cursor?: number },
  ): Promise<{
    pagination: {
      limit: 12
      mode: "latest"
      page: 1
    }
    posts: (PostType & { type: "POST" | "REKAROT" })[]
  }>

  async getRecommended(
    mode: "beta",
    options?: { limit?: number; cursor?: number },
  ): Promise<{
    betaVariant: "A" | "B" | "C" | "D" | "E"
    pagination: {
      limit: 12
      mode: "latest"
      page: 1
    }
    posts: (PostType & { type: "POST" | "REKAROT" })[]
  }>

  async getRecommended(
    mode?: "latest" | "algorithm" | "beta",
    options?: { limit?: number; cursor?: number },
  ) {
    const data = await this.client
      .get(
        `/api/posts/recommended?limit=${options?.limit ?? 12}&mode=${mode ?? "latest"}${options?.cursor ? `&cursor=${options.cursor}` : ""}`,
      )
      .then((res) => res.data)
    return data
  }

  async getBoards() {
    const data = await this.client
      .get<{ boards: BoardType[] }>("/api/boards")
      .then((res) => res.data)
    return data
  }

  async getBoardInfo(slug: BoardType["slug"]) {
    const data = await this.client
      .get<{ board: BoardType; threads: ThreadType[] }>(`/api/boards/${slug}`)
      .then((res) => res.data)
    return data
  }

  async getThread(slug: BoardType["slug"], id: ThreadType["id"]) {
    const data = await this.client
      .get<{
        board: BoardType
        replies: ReplyType[]
        thread: ThreadType
      }>(`/api/boards/${slug}/threads/${id}`)
      .then((res) => res.data)
    return data
  }

  async getNotifications(options?: {
    page?: number
    limit?: number
    types?: NotificationKindType
  }) {
    const data = await this.client
      .get<{
        notifications: NotificationType[]
        pagination: {
          hasMore: boolean
          limit: number
          nextPage: number
          page: number
        }
      }>(
        `/api/notifications?page=${options?.page ?? 1}&limit=${options?.limit ?? 15}${options?.types ? `&types=${options.types}` : ""}`,
      )
      .then((res) => res.data)
    return data
  }
}
