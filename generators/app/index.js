const sh = require('shelljs');
const Generator = require('yeoman-generator');
const _ = require('lodash');
const os = require('os');
const moment = require('moment');
const path = require('path');

module.exports = class extends Generator {};

const date = new Date();
const formattedDate = moment(date).format('YYYY-MM-DD');

var input;

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: path.basename(this.appname)  // defaults to current folder name
        }, {
            type: 'input',
            name: 'tagline',
            message: 'Your project tagline',
            default: 'Clean and fresh sentence fragment'
        }, {
            type: 'input',
            name: 'git_repository',
            message: 'Your hosted git repository',
            default: `https://github.com/${os.userInfo().username}/${this.appname}`
        }, {
            type: 'input',
            name: 'author',
            message: 'Your name',
            default: os.userInfo().username
        }, {
            type: 'input',
            name: 'dockername',
            message: 'Your dockerhub username',
            default: os.userInfo().username
        }, {
            type: 'input',
            name: 'email',
            message: 'Your email address',
            default: `${os.userInfo().username}@gmail.com`
        }]).then((answers) => {
            input = answers;
        })
    }

    createReadme() {
        this.fs.copyTpl(
            this.templatePath('readme.md'),
            this.destinationPath('readme.md'),
            {
                name: input.name,
                tagline: input.tagline,
                author: input.author,
                git_repository: input.git_repository
            }
        );
    }
    createDockerfile() {
        this.fs.copyTpl(
            this.templatePath('Dockerfile'),
            this.destinationPath('Dockerfile'),
            {
                author: input.author,
                email: input.email,
                date: formattedDate
            }
        );
    };
    createSiteYml() {
        this.fs.copyTpl(
            this.templatePath('site.yml'),
            this.destinationPath('site.yml'),
            {
                name: input.name,
                author: input.author,
                date: formattedDate
            }
        );
    };
    createTag() {
        this.fs.copyTpl(
            this.templatePath('tag'),
            this.destinationPath('tag'),
            {
                dockername: input.dockername,
                name: input.name,
            }
        );
    };
    createVersion() {
        this.fs.copyTpl(
            this.templatePath('version'),
            this.destinationPath('version')
        );
    };
    createApply() {
        this.fs.copyTpl(
            this.templatePath('bin/apply'),
            this.destinationPath('bin/apply'),
            {
                author: input.author,
                date: formattedDate
            }
        );
    };
    createMakefile() {
        this.fs.copyTpl(
            this.templatePath('bin/build-docker'),
            this.destinationPath('bin/build-docker'),
            {
                author: input.author,
                date: formattedDate
            }
        );
    };
    createMainYml() {
        this.fs.copyTpl(
            this.templatePath('tasks/main.yml'),
            this.destinationPath('tasks/main.yml'),
            {
                author: input.author,
                date: formattedDate
            }
        );
    };


};
