'use strict';
const Generator = require('yeoman-generator');
const normalizeUrl = require('normalize-url');
const _s = require('underscore.string');
const superb = require('superb');

module.exports = class extends Generator {
	initializing() {
		this.props = {};
	}

	prompting() {
		const prompts = [
			{
				type: 'input',
				name: 'actionName',
				message: 'Add the project title?',
				default: _s.slugify(this.appname)
			},
			{
				type: 'input',
				name: 'actionDescription',
				message: 'Add The project description ?',
				default: `My ${superb.random()} action`
			},
			{
				type: 'input',
				name: 'githubUserName',
				message: 'Add your Github username?',
				default: this.user.git.name()
			},
			{
				type: 'input',
				name: 'website',
				message: 'Add your website url?',
				filter: x => normalizeUrl(x)
			}
		];

		return this.prompt(prompts).then(answers => {
			this.props = answers;
		});
	}

	writing() {
		const mv = (from, to) => {
			this.fs.move(this.destinationPath(from), this.destinationPath(to));
		};

		const tpl = {
			actionName: this.props.actionName,
			actionDescription: this.props.actionDescription,
			camelActionName: _s.camelize(this.props.actionName),
			githubUserName: this.props.githubUserName,
			email: this.user.git.email(),
			website: this.props.website
		};

		this.fs.copyTpl([`${this.templatePath()}/**`], this.destinationPath(), tpl);

		mv('eslintignore', '.eslintignore');
		mv('eslintrc.json', '.eslintrc.json');
		mv('gitignore', '.gitignore');
		mv('_package.json', 'package.json');
		mv('_action.yml', 'action.yml');
		mv('github', '.github');
	}

	git() {
		this.spawnCommandSync('git', ['init']);
	}

	install() {
		this.installDependencies({bower: false});
	}
};
