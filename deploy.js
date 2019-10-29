var ghpages = require('gh-pages');

const finished = () => {
  console.log('Done publishing to xendke.github.com!');
};

ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/xendke/xendke.github.io'
}, finished);
