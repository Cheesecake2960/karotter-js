/** 投票に含まれる選択肢 */
export type PollOption = {
  /** 選択肢に割り当てられたユニークなID */
  id: number

  /** 選択肢を選んだ人の割合 (整数) */
  percentage: number

  /** 選択肢の位置 */
  position: number

  /** 選択肢の文章 */
  text: string

  /** 自分によって選択されているかどうか */
  votedByMe: boolean

  /** 選択肢を選んだ人の人数 */
  votesCount: number

  /** 選択肢に割り当てられた画像のURL */
  imageUrl: string | null
}

/** 投稿に作成することができる投票 */
export type PollType = {
  /** 締切日のISO表記 */
  expiresAt: string

  /** 投票のユニークなID */
  id: number

  /** 締め切られているかどうか */
  isExpired: boolean

  options: PollOption[]

  /** 選択している投票の選択肢のID */
  ownVoteOptionId: number

  /** 合計の投票数 */
  totalVotes: number
}
