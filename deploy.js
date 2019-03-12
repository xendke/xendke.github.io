var ghpages = require('gh-pages');

const finished = () => {
  console.log('done publishing to xendke.github.com');
};

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/xendke/xendke.github.io'
}, finished);
