import { config } from "../config";
import * as request from "request-promise-native";

export const getRates = async (req: any, res: any) => {
  const { url, key } = config.loanscan;
  if (!url || !key) {
    return res.send({ status: 500, message: 'Something went wrong' });
  }
  console.log(key)
  var options = {
    uri: url + '/interest-rates',
    headers: {
      'x-api-key': key
    },
    json: true
  };
  try {
    const result = await request.get(options);
    return res.send({ status: 200, message: 'Success', data: result });
  } catch (e) {
    return res.send({ status: 500, message: 'Something went wrong' });
  }

};
