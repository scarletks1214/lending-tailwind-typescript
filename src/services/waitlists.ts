import axios from 'axios';
import { getWaitlistUrl } from './endpoints';

const setWaitlist = async (email: string) => {
  const url = getWaitlistUrl();
  const result = await axios.post(url, {email});
  return result;
};

export {
  setWaitlist
};
