# <%= actionName %> ![David](https://img.shields.io/david/<%= githubUserName %>/<%= actionName %>)

> <%= actionDescription %>





## Inputs
It takes a github-token as an input. See [how to create and store a token](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)

## Example Usage

```yml
- name: create a gif
  uses: <%= githubUserName %>/<%= actionName %>@master
  with:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## license

[MIT](/LICENSE) &copy; 2020 <%= githubUserName %>
