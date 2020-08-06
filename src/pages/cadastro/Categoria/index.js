import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriarRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };
  const { novaCategoria, changeCategory, setnovaCategoria } = useForm(valoresIniciais);
  const [categorias, setCategoria] = useState([]);

  function saveCategory(event) {
    event.preventDefault();
    if (novaCategoria) {
      setCategoria([
        ...categorias,
        novaCategoria,
      ]);
      setnovaCategoria(valoresIniciais);
    }
  }

  useEffect(() => {
    categoriarRepository.getAll()
      .then(async (resposta) => {
        setCategoria(resposta);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {` ${novaCategoria.titulo}`}
      </h1>

      <form onSubmit={saveCategory}>

        <FormField value={novaCategoria.titulo} onChange={changeCategory} name="titulo" type="text" label="Nome da Categoria" />
        <FormField value={novaCategoria.descricao} onChange={changeCategory} name="descricao" type="textarea" label="Descrição da Categoria" />
        <FormField value={novaCategoria.cor} onChange={changeCategory} name="cor" type="color" label="Cor da Categoria" />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
