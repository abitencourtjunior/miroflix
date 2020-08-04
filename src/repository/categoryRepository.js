import configs from '../config'

const URL_CATEGORY = `${configs.API}/categorys`

const showCategorysWithVideos = () => fetch(`${URL_CATEGORY}?_embed=videos`)
  .then(async (response) => {
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error('No data')
  })

const showCategorys = () => fetch(URL_CATEGORY)
  .then(async (response) => {
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error('No data')
  })

export default {
  showCategorys,
  showCategorysWithVideos,
}
