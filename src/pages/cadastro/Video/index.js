import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriarRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };
  const { novaCategoria, changeCategory, setnovaCategoria } = useForm(valoresIniciais);
  const [videos, setVideos] = useState([]);
  
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  function saveVideos(event) {
    event.preventDefault();
    const categoriaId = categorias.find((categoria) => categoria.titulo === novaCategoria.categoria);

    novaCategoria = {
      ...novaCategoria,
      categoriaId,
    };

    if (novaCategoria) {
      videosRepository.create(novaCategoria)
        .then(() => {
          history.pushState('/');
        });
      setnovaCategoria(valoresIniciais);
    }
  }

  useEffect(() => {
    categoriarRepository.getAll()
      .then((resposta) => {
        setCategorias(resposta);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={saveVideos}>

        <FormField value={novaCategoria.titulo} onChange={changeCategory} name="titulo" type="text" label="Nome do Vídeo" />
        <FormField value={novaCategoria.url} onChange={changeCategory} name="url" type="text" label="URL do Vídeo" />
        <FormField value={novaCategoria.categoria} onChange={changeCategory} name="categoria" type="datalist" label="Categoria do Vídeo" options={categoryTitles} />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            {video.titulo}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
