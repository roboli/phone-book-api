import config from 'config';

export default (req: any, res: any, next: any) => {
  let key: string;

  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'ApiKey') {
    key = req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.api_key) {
    key = req.query.api_key;
  }

  if (key && key === config.apiKey) {
    next();
  } else {
    res.sendStatus(401);
  }
};
