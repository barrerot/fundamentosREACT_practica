import client from '../../api/client';

const advertsUrl = '/api/v1/adverts';

export const getLatestAdverts = () => {
  return client.get(advertsUrl);
};
export const createAdvert=(advert) => {
const url=advertsUrl
return client.post(url,advert);
};



