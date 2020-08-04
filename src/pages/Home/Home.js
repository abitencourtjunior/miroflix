import React, { useEffect, useState } from 'react'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Menu from '../../components/Menu'
import categoryRepository from '../../repository/categoryRepository'
import PageDefault from '../Default'

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([])
  useEffect(() => {
    categoryRepository.showCategorysWithVideos()
      .then((categorysWithVideos) => {
        setDadosIniciais(categorysWithVideos)
      })
  }, [])
  return (
    <PageDefault paddingAll={0}>
      <Menu button />

      {dadosIniciais.length === 0 && (<div>Loading ....</div>)}

      {dadosIniciais.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              {' '}
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].title}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel key={category.id} ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          )
        }

        return <Carousel key={category.id} category={category} />
      })}

    </PageDefault>
  )
}

export default Home
