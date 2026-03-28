import type { UserType } from "./user.js"

export type Circle = {
  /** サークルのユニークなID */
  id: number

  /** サークルの名前 */
  name: string

  /** サークルの所有者のID */
  ownerId: UserType["id"]
}
