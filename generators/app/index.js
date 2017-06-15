var sh = require('shelljs');
var Generator = require('yeoman-generator');

module.exports = class extends Generator {};

// module.exports = class extends Generator {
  // The name `constructor` is important here
  // constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    // super(args, opts);

    // Next, add your custom code
    // this.option('babel'); // This method adds support for a `--babel` flag
  // }
// };

module.exports = class extends Generator {
  createReadme() {
    this.fs.copyTpl(
		    this.templatePath('readme.md'),
		    this.destinationPath('readme.md'),
		    { 
			    name: sh.pwd().stdout, 
			    tagline: 'TODO: write tagline',
			    author: 'Eric Crosson' 
		    }
		   );
  }
  createTasks() {
    this.fs.copyTpl(
		    this.templatePath('tasks/main.yml'),
		    this.destinationPath('tasks/main.yml'),
		    { 
			    author: 'Eric Crosson',
			    date: 'dateme'
		    }
		   );
  };
};
