import fs from 'fs';
import path from 'path';

const contents = fs.readdirSync(path.join(__dirname));
contents.forEach((contentPath) => {
  if (contentPath === 'index.js') {
    return;
  }

  // eslint-disable-next-line global-require, import/no-dynamic-require
  require(`./${contentPath}`);
});
