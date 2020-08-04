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

function create(objectVideo) {
  return fetch(URL_CATEGORY, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objectVideo),
  })
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json()
        return resposta
      }

      throw new Error('Não foi possível cadastrar os dados :(')
    })
}

export default {
  showCategorys,
  showCategorysWithVideos,
  create,
}
