import axios from 'axios';
import { getRatesUrl } from './endpoints';

const getRates = async () => {
  const url = getRatesUrl();
  const rates: any = await axios.get(url);
  return rates;
};

export {
  getRates
};
