import axios from 'axios';

class Api {
  load = async () => {
    const response = await axios({
      url: 'https://ghibliapi.herokuapp.com/films',
      headers: {
        Accept: 'application/json',
      },
    });
    return response
  }
}

export default new Api();