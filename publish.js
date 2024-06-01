var ghpages = require('gh-pages');


ghpages.publish('site', {
  branch: 'gh-pages',
  add: true,
  // dest: 'static/project',
  // cname: 'shortthirdman.surge.sh',
  user: {
    name: 'Swetank Mohanty',
    email: 'swetank.mohanty@outlook.com'
  },
  silent: false,
  repo: 'https://github.com/shortthirdman/shortthirdman.git'
}, (err) => {
	console.error("Error while publishing to GitHub Pages", err);
});