const sh = require('shelljs');
const Generator = require('yeoman-generator');
const _ = require('lodash');

module.exports = class extends Generator {};

const projectName = sh.pwd().stdout;

module.exports = class extends Generator {
    createReadme() {
        this.fs.copyTpl(
            this.templatePath('readme.md'),
            this.destinationPath('readme.md'),
            {
                name: projectName,
                tagline: 'TODO: write tagline',
                author: 'Eric Crosson',
                git_repository: 'https://github.com/ericcrosson/something'
            }
        );
    }
    createDockerfile() {
        this.fs.copyTpl(
            this.templatePath('Dockerfile'),
            this.destinationPath('Dockerfile'),
            {
                name: projectName,
                email: 'esc@ericcrosson.com',
                date: 'dateme'
            }
        );
    };
    createSiteYml() {
        this.fs.copyTpl(
            this.templatePath('site.yml'),
            this.destinationPath('site.yml'),
            {
                name: projectName,
                author: 'Eric Crosson',
                date: 'dateme'
            }
        );
    };
    createTag() {
        this.fs.copyTpl(
            this.templatePath('tag'),
            this.destinationPath('tag'),
            {
                dockername: 'hamroctopus',
                name: projectName,
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
                author: 'Eric Crosson',
                date: 'dateme'
            }
        );
    };
    createMakefile() {
        this.fs.copyTpl(
            this.templatePath('bin/build-docker'),
            this.destinationPath('bin/build-docker'),
            {
                author: 'Eric Crosson',
                date: 'dateme'
            }
        );
    };
    createMainYml() {
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
