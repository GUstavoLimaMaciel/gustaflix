import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriarRepository from '../../repositories/categorias';

function Home() {
  const [categorias, setCategoria] = useState([]);
  useEffect(() => {
    categoriarRepository.getAllWithVideos()
      .then(async (resposta) => {
        setCategoria(resposta);
      });
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      {categorias.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categorias[0].videos[0].titulo}
                url={categorias[0].videos[0].url}
                videoDescription={categorias[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={categorias[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default Home;
