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
		'dist/index.js',
		'dist/index.js.map',
		'dist/sourcemap-register.js',
		'action.yml',
		'.editorconfig',
		'.gitattributes',
		'.gitignore',
		'index.js',
		'license',
		'package.json',
		'readme.md'
	]);
	t.pass();
});

test('app:package.json should contains user inputs', t => {
	assert.fileContent('package.json', 'test');
	assert.fileContent('package.json', 'testDescription');
	assert.fileContent('package.json', 'johndoe');
	assert.fileContent('package.json', 'http://johndoe.com');
	t.pass();
});

test('app:license should contains user inputs', t => {
	assert.fileContent('license', 'johndoe');
	assert.fileContent('license', 'http://johndoe.com');
	t.pass();
});

test('app:README should contains user inputs', t => {
	assert.fileContent('readme.md', 'test');
	assert.fileContent('readme.md', 'testDescription');
	t.pass();
});
