'use strict';
const Generator = require('yeoman-generator');
const dasherized = require('add-dashes');

class GeneratorGithubAction extends Generator {
	initializing() {
		this.defaults = {
			title: dasherized(this.appname),
			username: this.user.git.name,
			usermail: this.user.git.email
		};
	}

	prompting() {
		const prompts = [
			{
				type: 'input',
				name: 'title',
				message: 'Add a project title ?',
				default: this.defaults.title
			},
			{
				type: 'input',
				name: 'description',
				message: 'Add a project description ?',
				default: 'My awesome github action'
			},
			{
				type: 'input',
				name: 'author',
				message: 'Add the authors name?',
				default: this.defaults.username
			},
			{
				type: 'input',
				name: 'email',
				message: 'Add the authors email ?',
				default: this.defaults.usermail
			},
			{
				type: 'input',
				name: 'website',
				message: 'Add the authors website url?',
				default: 'https://yourwebsite.com'
			},
			{
				type: 'input',
				name: 'username',
				message: 'Add your Github username?',
				default: this.defaults.username
			}
		];

		return this.prompt(prompts).then((answers) => {
			this.appTitle = answers.title;
			this.appDescription = answers.description;
			this.author = answers.author;
			this.email = answers.email;
			this.website = answers.website;
			this.username = answers.username;
		});
	}

	writingFiles() {
		this.fs.copy(
			this.templatePath('_eslintignore'),
			this.destinationPath('.eslintignore')
		);
		this.fs.copy(
			this.templatePath('_eslintrc.json'),
			this.destinationPath('.eslintrc.json')
		);
		this.fs.copy(
			this.templatePath('_gitignore'),
			this.destinationPath('.gitignore')
		);
		this.fs.copyTpl(
			this.templatePath('_action.yml'),
			this.destinationPath('action.yml'),
			{
				appTitle: this.appTitle,
				appDescription: this.appDescription
			}
		);
		this.fs.copy(
			this.templatePath('_index.js'),
			this.destinationPath('index.js')
		);
		this.fs.copy(
			this.templatePath('_index.test.js'),
			this.destinationPath('index.test.js')
		);
		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			{
				appTitle: this.appTitle,
				appDescription: this.appDescription,
				author: {
					name: this.author,
					email: this.email,
					website: this.website,
					username: this.username
				}
			}
		);
		this.fs.copyTpl(
			this.templatePath('_LICENSE'),
			this.destinationPath('LICENSE'),
			{
				author: {
					name: this.author,
					email: this.email,
					website: this.website
				}
			}
		);
		this.fs.copyTpl(
			this.templatePath('_README.md'),
			this.destinationPath('README.md'),
			{
				appTitle: this.appTitle,
				appDescription: this.appDescription
			}
		);
		this.fs.copy(
			this.templatePath('_wait.js'),
			this.destinationPath('wait.js')
		);
	}

	writingFolder() {
		this.fs.copyTpl(
			this.templatePath('_github/_dependabot.yml'),
			this.destinationPath(`.github/dependabot.yml`)
		);
		this.fs.copyTpl(
			this.templatePath('_github/workflows/_test.yml'),
			this.destinationPath('.github/workflows/test.yml')
		);
		this.fs.copyTpl(
			this.templatePath('dist/index.js'),
			this.destinationPath('dist/index.js')
		);
		this.fs.copyTpl(
			this.templatePath('dist/index.js.map'),
			this.destinationPath('dist/index.js.map')
		);
		this.fs.copyTpl(
			this.templatePath('dist/sourcemap-register.js'),
			this.destinationPath('dist/sourcemap-register.js')
		);
	}

	install() {
		this.installDependencies({
			yarn: true,
			npm: true,
			bower: false
		});
	}
}

module.exports = GeneratorGithubAction;
