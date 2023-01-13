---
title: 'Rebuilding this blog with SvelteKit and GitHub Actions'
date: 2023-01-13 21:45:08 +1300
---

One of the goals I have for 2023 is to write more on this blog.
After being alerted by GitHub on the number of security issues on the blog (originally built in Jekyll / Ruby), I decided to have a look into how we could rebuild this. As much as dependabot was helpful, it couldn't solve all the problems.

Tools selected:

### SvelteKit

This was primarily picked to learn about Svelte, how it blends HTML / CSS / JS together and see how it compares to React and Vue. To build this, I found [Josh Collingsworth's blog post](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) on how to set up a blog using SvelteKit (it's very detailed and well explained, pretty much followed it to a tee to get this up and running).

Takeaways:

- You can create components with styles in Svelte (mostly html and css)
- Routing is required for building any kind of blog (to link between blog posts and dynamically route posts around)
- You can define layouts and pages, along with an `api` piece that can help fetch all the posts available to be shown on the home page

### GitHub Actions

In order to host anything on GitHub pages, all the files are on a separate branch (known as the `gh-pages` branch). Previously, we would have to manually deploy this (via another commit) from master to the branch.
I wanted to see if this could be automated straight whenever we merged into the `master` branch.
I stumbled over this [blog post by Matias Meno](https://blog.dropzone.dev/testing-a-static-sveltekit-site-with-cypress-on-github-actions-5ba86f6a0897) and it used GitHub Actions to deploy a SvelteKit static application which was hosted on GitHub Pages. I read through the yaml configuration, and took the parts I needed to compose the workflow below:

```
name: cicd
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run build

      - name: Upload build artifacts for deployment
        uses: actions/upload-artifact@v3
        with:
          name: build
          if-no-files-found: error
          path: build

  deploy:
    if: github.ref == 'refs/heads/master'
    needs: [build]

    runs-on: ubuntu-latest

    steps:
      - uses: actions/download-artifact@v3
        with:
          name: build
          path: build

      # deploy build folder to gh-pages
      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./build
```

Note that it only deploys when it has been merged to master, but will run the build for any pull requests open to make sure the build works before it gets merged. It took a couple of tries to get this working.

### Design

I wanted to keep it simple so it mirrors the theme we originally had ([The Plain](https://heiswayi.github.io/the-plain/)). There are all the links to each post on the home page and a button to get back to this list for each post. I decided to use FontPair to select 2 Google Fonts [DM Serif Display and DM Sans](https://www.fontpair.co/pairings/dm-serif-display-dm-sans) for the design.

And now it's finally up!

### References / Resources

- [Josh Collingsworth's post on how to build a static blog using SvelteKit](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)
- [Matias Meno's post on testing a static SvelteKit site with Cypress on GitHub actions](https://blog.dropzone.dev/testing-a-static-sveltekit-site-with-cypress-on-github-actions-5ba86f6a0897)
- [FontPair](https://www.fontpair.co/)
- [Heiswayi Nrird's The Plain jekyll theme](https://heiswayi.github.io/the-plain/)
