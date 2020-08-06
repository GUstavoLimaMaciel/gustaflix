import { useState } from 'react';

function useForm(valoresIniciais) {
  const [novaCategoria, setnovaCategoria] = useState(valoresIniciais);
  function changeCategory(event) {
    setnovaCategoria({
      ...novaCategoria,
      [event.target.getAttribute('name')]: event.target.value,
    });
  }

  return {
    novaCategoria,
    changeCategory,
    setnovaCategoria,
  };
}

export default useForm;