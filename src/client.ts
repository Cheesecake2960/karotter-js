import type { FollowersInfoType } from "../types/follow.js"
import type { LoginResponseType } from "../types/login.js"
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
      console.log("Access token not set", config.url)
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
    console.log("access token ok")

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
}
