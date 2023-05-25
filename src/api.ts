//const API_HOST = 'https://chatgpt4google.com'
// const API_HOST = 'http://localhost:3000'

export interface PromotionResponse {
  url: string
  title?: string
  text?: string
  image?: { url: string; size?: number }
  footer?: { text: string; url: string }
  label?: { text: string; url: string }
}

export async function fetchPromotion(): Promise<PromotionResponse | null> {
  return null
}
