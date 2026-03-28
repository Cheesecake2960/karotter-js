import type { PostType } from "./types/post.js"
import type { UserInfoType } from "./types/user.js"
import { Axios } from "axios"

export class Client extends Axios {
  constructor(apiKey?: string) {
    super({ baseURL: "https://karotter.com", headers: { "X-API-Key": apiKey } })
  }

  async getUser(userName: string) {
    const data = await this.get<UserInfoType>(`/api/users/${userName}`).then(
      (res) => res.data,
    )
    return data
  }

  async getPost(id: number) {
    const data = await this.get<PostType>(`/api/posts/${id}`).then(
      (res) => res.data,
    )
    return data
  }
}
