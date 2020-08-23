'use strict';

const github = require('@actions/github');

const run = async function () {
	try {
		const {repo: repoInfo} = github.context;

		console.log(repoInfo);
		/*
		  {
			  owner: "RocktimSaikia",
			  repo: "javascript-action-boilerplate"
		  }
		*/

		// Happy coding 🦄🦄🦄
	} catch (error) {
		console.log(error);
		return -1;
	}
};

run();
