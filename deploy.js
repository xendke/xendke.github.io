const ghpages = require('gh-pages');
const fs = require('fs');

const getLatestCommitMessage = () => {
  const rev = fs.readFileSync('.git/HEAD').toString();
  if (rev.indexOf(':') === -1) {
      return rev;
  } else {
      return fs.readFileSync('.git/' + rev.substring(5)).toString();
  }
}

const finished = () => {
  console.log('Done publishing to xendke.github.com!');
};

ghpages.publish('dist', {
  branch: 'master',
  message: getLatestCommitMessage()
}, finished);
