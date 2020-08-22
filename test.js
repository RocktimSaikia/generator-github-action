const path = require('path');
const test = require('ava');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

test.before(async () => {
	await helpers.run(path.join(__dirname, 'app')).withPrompts({
		actionName: 'test',
		actionDescription: 'testDescription',
		githubUserName: 'johndoe',
		website: 'http://johndoe.com'
	});
});

test('generates expected files', t => {
	assert.file([
		'.github/',
		'.github/',
		'dist/index.js',
		'dist/index.js.map',
		'dist/sourcemap-register.js',
		'action.yml',
		'.eslintignore',
		'.eslintrc.json',
		'.gitignore',
		'index.js',
		'index.test.js',
		'license',
		'package.json',
		'README.md',
		'wait.js'
	]);
	t.pass();
});

test('app:package.json should contains user propmts', t => {
	assert.fileContent('package.json', 'test');
	assert.fileContent('package.json', 'testDescription');
	assert.fileContent('package.json', 'johndoe');
	assert.fileContent('package.json', 'http://johndoe.com');
	t.pass();
});

test('app:license should contains user propmts', t => {
	assert.fileContent('license', 'johndoe');
	assert.fileContent('license', 'http://johndoe.com');
	t.pass();
});

test('app:README should contains user propmts', t => {
	assert.fileContent('README.md', 'test');
	assert.fileContent('README.md', 'testDescription');
	t.pass();
});

test('app:action.yml should contains user propmts', t => {
	assert.fileContent('action.yml', 'test');
	assert.fileContent('action.yml', 'testDescription');
	t.pass();
});
