import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategoria] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [novaCategoria, setnovaCategoria] = useState(valoresIniciais);

  function changeCategory(event) {
    setnovaCategoria({
      ...novaCategoria,
      [event.target.getAttribute('name')]: event.target.value,
    });
  }

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
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:3000/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategoria(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {novaCategoria.nome}
      </h1>

      <form onSubmit={saveCategory}>

        <FormField value={novaCategoria.nome} onChange={changeCategory} name="nome" type="text" label="Nome da Categoria" />
        <FormField value={novaCategoria.descricao} onChange={changeCategory} name="descricao" type="textarea" label="Descrição da Categoria" />
        <FormField value={novaCategoria.cor} onChange={changeCategory} name="cor" type="color" label="Cor da Categoria" />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            {categoria.nome}
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
