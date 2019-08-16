
import { config } from "../config";
import * as request from "request-promise-native";

export const joinWaitlisted = async (req: any, res: any) => {
  const { url, key } = config.waitlisted;
  const { email = null } = req.body;
  if (!email) {
    return res.send({ status: 500, message: 'Please enter email.' });
  }
  if (!url || !key) {
    return res.send({ status: 500, message: 'Something went wrong!' });
  }
  var options = {
    uri: url + '/reservations',
    method: 'POST',
    headers: {
      'X-API-Key': key,
      'Content-Type': 'application/json'
    },
    json: true,
    body: {
      email
    }
  };
  try {
    const result = await request.post(options);
    return res.send({ status: 200, message: 'Thanks for the request! We will get in touch soon. ', data: result });
  } catch (e) {
    return res.send({ status: 500, message: 'Something went wrong!', data: e });
  }

};
