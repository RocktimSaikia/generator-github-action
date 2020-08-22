"use strict";
const test = require("ava");
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

const prompts = {
	title: "Github Action",
	description: "A javascript Github action",
	author: "UnicornDev",
	email: "unicorndev@gmail.com",
	website: "https://unicorndev.com",
	username: "unicorndev",
};

test.before(async (t) => {
	await helpers.run(path.join(__dirname, "../app")).withPrompts(prompts);
	t.pass();
});

test("should create all template files", (t) => {
	assert.file([
		".github/dependabot.yml",
		".github/workflows/test.yml",
		"dist/index.js",
		"dist/index.js.map",
		"dist/sourcemap-register.js",
		"action.yml",
		".eslintignore",
		".eslintrc.json",
		".gitignore",
		"index.js",
		"index.test.js",
		"LICENSE",
		"package.json",
		"README.md",
		"wait.js",
	]);
	t.pass();
});

Object.keys(prompts).forEach((prompt) => {
	const value = prompts[prompt];
	test(`package.json should contain ${value}`, (t) => {
		assert.fileContent("package.json", value);
		t.pass();
	});
});

test("LICENSE should contain author", (t) => {
	assert.fileContent("LICENSE", prompts.author);
	t.pass();
});

test("LICENSE should contain email", (t) => {
	assert.fileContent("LICENSE", prompts.email);
	t.pass();
});

test("LICENSE should contain website url", (t) => {
	assert.fileContent("LICENSE", prompts.website);
	t.pass();
});

test("README.md should contain a title", (t) => {
	assert.fileContent("README.md", prompts.title);
	t.pass();
});

test("README.md should contain a description", (t) => {
	assert.fileContent("README.md", prompts.description);
	t.pass();
});
