import{a,t as s}from"./disclose-version.hD3RjQbW.js";import"./legacy.C6sgJd9a.js";import{s as l,f as n,c as r,r as h,n as d}from"./runtime.Bs2-O94s.js";import{h as p}from"./html.DBamY79b.js";const w={title:"Rebuilding this blog with SvelteKit and GitHub Actions",date:"2023-01-13T21:45:08.000Z"};var u=s(`<p>One of the goals I have for 2023 is to write more on this blog.
After being alerted by GitHub on the number of security issues on the blog (originally built in Jekyll / Ruby), I decided to have a look into how we could rebuild this. As much as dependabot was helpful, it couldn’t solve all the problems.</p> <p>Tools selected:</p> <h3>SvelteKit</h3> <p>This was primarily picked to learn about Svelte, how it blends HTML / CSS / JS together and see how it compares to React and Vue. To build this, I found <a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog" rel="nofollow">Josh Collingsworth’s blog post</a> on how to set up a blog using SvelteKit (it’s very detailed and well explained, pretty much followed it to a tee to get this up and running).</p> <p>Takeaways:</p> <ul><li>You can create components with styles in Svelte (mostly html and css)</li> <li>Routing is required for building any kind of blog (to link between blog posts and dynamically route posts around)</li> <li>You can define layouts and pages, along with an <code>api</code> piece that can help fetch all the posts available to be shown on the home page</li></ul> <h3>GitHub Actions</h3> <p>In order to host anything on GitHub pages, all the files are on a separate branch (known as the <code>gh-pages</code> branch). Previously, we would have to manually deploy this (via another commit) from master to the branch.
I wanted to see if this could be automated straight whenever we merged into the <code>master</code> branch.
I stumbled over this <a href="https://blog.dropzone.dev/testing-a-static-sveltekit-site-with-cypress-on-github-actions-5ba86f6a0897" rel="nofollow">blog post by Matias Meno</a> and it used GitHub Actions to deploy a SvelteKit static application which was hosted on GitHub Pages. I read through the yaml configuration, and took the parts I needed to compose the workflow below:</p> <pre class="language-undefined"><!></pre> <p>Note that it only deploys when it has been merged to master, but will run the build for any pull requests open to make sure the build works before it gets merged. It took a couple of tries to get this working.</p> <h3>Design</h3> <p>I wanted to keep it simple so it mirrors the theme we originally had (<a href="https://heiswayi.github.io/the-plain/" rel="nofollow">The Plain</a>). There are all the links to each post on the home page and a button to get back to this list for each post. I decided to use FontPair to select 2 Google Fonts <a href="https://www.fontpair.co/pairings/dm-serif-display-dm-sans" rel="nofollow">DM Serif Display and DM Sans</a> for the design.</p> <p>And now it’s finally up!</p> <h3>References / Resources</h3> <ul><li><a href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog" rel="nofollow">Josh Collingsworth’s post on how to build a static blog using SvelteKit</a></li> <li><a href="https://blog.dropzone.dev/testing-a-static-sveltekit-site-with-cypress-on-github-actions-5ba86f6a0897" rel="nofollow">Matias Meno’s post on testing a static SvelteKit site with Cypress on GitHub actions</a></li> <li><a href="https://www.fontpair.co/" rel="nofollow">FontPair</a></li> <li><a href="https://heiswayi.github.io/the-plain/" rel="nofollow">Heiswayi Nrird’s The Plain jekyll theme</a></li></ul>`,1);function m(o){var e=u(),t=l(n(e),16),i=r(t);p(i,()=>`<code class="language-undefined">name: cicd
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
    if: github.ref == &#39;refs/heads/master&#39;
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
          github_token: $&#123;&#123; secrets.GITHUB_TOKEN &#125;&#125;
          publish_branch: gh-pages
          publish_dir: ./build</code>`),h(t),d(12),a(o,e)}export{m as default,w as metadata};
