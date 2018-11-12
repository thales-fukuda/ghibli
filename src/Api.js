import axios from 'axios';

class Api {
  load = async () => axios(
    {
      url: 'https://ghibliapi.herokuapp.com/films',
      headers: {
        Accept: 'application/json',
      },
    },
  );
}

export default new Api();
