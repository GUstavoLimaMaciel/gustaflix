import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategoria] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  };

  const [novaCategoria, setnovaCategoria] = useState(valoresIniciais);

  function changeCategory(event){
    setnovaCategoria({
      ...novaCategoria,
      [event.target.getAttribute('name')]: event.target.value
    });
  }

  function saveCategory(event){
    event.preventDefault();
    if(novaCategoria){
      setCategoria([
        ...categorias, 
        novaCategoria
      ]);
      setnovaCategoria(valoresIniciais);
    }
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {novaCategoria.nome}</h1>

      <form onSubmit={saveCategory}>

        <FormField value={novaCategoria.nome} onChange={changeCategory} name="nome" type="text" label="Nome da Categoria"/>
        <FormField value={novaCategoria.descricao} onChange={changeCategory} name="descricao" type="textarea" label="Descrição da Categoria"/>
        <FormField value={novaCategoria.cor} onChange={changeCategory} name="cor" type="color" label="Cor da Categoria"/>

        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={index}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;