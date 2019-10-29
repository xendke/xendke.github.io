var ghpages = require('gh-pages');

const finished = () => {
  console.log('Done publishing to xendke.github.com!');
};

ghpages.publish('dist', {
  branch: 'master',
  message: 'Deployment'
}, finished);
