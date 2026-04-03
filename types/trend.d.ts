export type TrendType = {
  /** トレンドの投稿の作者数 */
  authorCount: number

  /** トレンドのラベル */
  label: string

  /** トレンドの該当する文言 */
  token: string

  /** トレンドのスコア */
  trendScore: number

  /** トレンドが、単語によるものかハッシュタグによるものか */
  type: "WORD" | "HASHTAG"
}
