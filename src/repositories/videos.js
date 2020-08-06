import URL from '../config/index';

const urlVideos = `${URL}/videos`;

function create(params) {
  return fetch(urlVideos, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  create,
};
