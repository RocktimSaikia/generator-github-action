const path = require('path');
const test = require('ava');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

test.before(async () => {
	await helpers.run(path.join(__dirname, 'app')).withPrompts({
		actionName: 'test',
		actionDescription: 'testDescription',
		githubUserName: 'johndoe'
	});
});

test('generates expected files', t => {
	assert.file([
		'.github/',
		'dist/index.js',
		'dist/index.js.map',
		'dist/licenses.txt',
		'dist/sourcemap-register.js',
		'action.yml',
		'package.json',
		'.eslintignore',
		'.eslintrc.json',
		'.gitattributes',
		'.gitignore',
		'index.js',
		'index.test.js',
		'license',
		'README.md'
	]);
	t.pass();
});

test('app:package.json should contains user inputs', t => {
	assert.fileContent('package.json', 'test');
	assert.fileContent('package.json', 'testDescription');
	assert.fileContent('package.json', 'johndoe');
	t.pass();
});

test('app:license should contains user inputs', t => {
	assert.fileContent('license', 'johndoe');
	t.pass();
});

test('app:README should contains user inputs', t => {
	assert.fileContent('README.md', 'test');
	assert.fileContent('README.md', 'testDescription');
	t.pass();
});
