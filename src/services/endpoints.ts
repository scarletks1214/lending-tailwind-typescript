
import urlJoin from 'url-join';

import config from '../config';

const ratesPrefix = 'api/rates';
const waitlistPrefix = '/api/wailtlist/join';

const getRatesUrl = () => (urlJoin(config.proxyUrl, ratesPrefix));
const getWaitlistUrl = () => (urlJoin(config.proxyUrl, waitlistPrefix));

export {
	getRatesUrl,
	getWaitlistUrl
};
