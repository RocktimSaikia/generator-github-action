'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const prompts = {
	title: 'Github Action',
	description: 'A javascript Github action',
	author: 'UnicornDev',
	email: 'unicorndev@gmail.com',
	website: 'https://unicorndev.com',
	username: 'unicorndev'
};

describe('Creates a Github action', () => {
	beforeAll(async () => {
		await helpers.run(path.join(__dirname, '../app')).withPrompts(prompts);
	});

	test('should create all template files', () => {
		assert.file([
			'.github/dependabot.yml',
			'.github/workflows/test.yml',
			'dist/index.js',
			'dist/index.js.map',
			'dist/sourcemap-register.js',
			'action.yml',
			'.eslintignore',
			'.eslintrc.json',
			'.gitignore',
			'index.js',
			'index.test.js',
			'LICENSE',
			'package.json',
			'README.md',
			'wait.js'
		]);
	});

	describe('Should contains user prompts', () => {
		Object.keys(prompts).forEach(prompt => {
			const value = prompts[prompt];
			test('package.json should contain ' + value, () => {
				assert.fileContent('package.json', value);
			});
		});

		test('LICENSE should contain author', () => {
			assert.fileContent('LICENSE', prompts.author);
		});

		test('LICENSE should contain email' + prompts.email, () => {
			assert.fileContent('LICENSE', prompts.email);
		});

		test('LICENSE should contain website url' + prompts.website, () => {
			assert.fileContent('LICENSE', prompts.website);
		});

		test('README.md should contain a title' + prompts.title, () => {
			assert.fileContent('README.md', prompts.title);
		});

		test('README.md should contain a description' + prompts.description, () => {
			assert.fileContent('README.md', prompts.description);
		});
	});
});
