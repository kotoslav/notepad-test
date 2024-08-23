import type { Tab } from '@/BaseApp'

const baseURL: string = API_URL

export async function sendApi(data: Tab[]) {
  const response = fetch(baseURL, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })

  return response
}

export async function getApi() {
  try {
    const response = await fetch(baseURL)
    const result = await response.json()
    return result
  } catch (e) {
    console.log(e)
    return e
  }
}
