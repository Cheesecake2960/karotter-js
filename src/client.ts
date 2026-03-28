import type { PostType } from "../types/post.js"
import type { UserInfoType, UserType } from "../types/user.js"
import axios, { type Axios } from "axios"

export class Client {
  private apiKey: string | undefined
  private client: Axios

  constructor(apiKey?: string) {
    this.apiKey = apiKey
    this.client = axios.create({
      baseURL: "https://karotter.com",
      headers: { "X-API-Key": this.apiKey },
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
}
