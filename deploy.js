const gh_pages = require('gh-pages');
const child_process = require('child_process');

child_process.exec('git show-branch --no-name HEAD', function(err, stdout) {
  if(err) throw 'Error getting latest commit message.';

  gh_pages.publish('dist', {
    branch: 'master',
    message: stdout
  }, () => {
    console.log('Done publishing to xendke.github.io!');
  });
});
