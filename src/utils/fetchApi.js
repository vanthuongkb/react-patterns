import fetchMock from 'fetch-mock';

const heros = [
  {
    id: 1,
    name: 'Captain America',
    publisher: 'Marvel Comics'
  },
  {
    id: 2,
    name: 'Spider Man',
    publisher: 'Marvel Comics'
  },
];

const fetchApi = (url) => {
  const heroId = url.split('/').pop();

  switch (heroId) {
    case '1': {
      fetchMock.get(url, heros[0]);
      break;
    }
    case '2': {
      fetchMock.get(url, heros[1]);
      break;
    }
    case 'all': {
      fetchMock.get(url, heros);
      break;
    }
    default: {
      fetchMock.get('*', {
        throws: new Error('The hero is not exited')
      });
      break;
    }
  }

  return fetch(url);
};

const restore = () => {
  fetchMock.restore();
};

export {
  fetchApi as fetch,
  restore,
};
