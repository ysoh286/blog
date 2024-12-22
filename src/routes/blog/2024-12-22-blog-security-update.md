---
title: 'Weekly learning review - Security audit on blog'
date: 2024-12-22 13:45:00
---

This week's learning review:

- Have picked up tailwind CSS (to be reviewed in a separate blog post next week)
- Figured out how to deal with security audit and updating all the packages on this blog

## The security audit

Ever ran `npm i` on a repo, only to find you already have a bunch of security warnings?
Or even that handy dependabot on GitHub spams you with a bunch of MRs to try keep you up to date?

### Steps taken to update this blog:

- Run `npm audit`

  - identify the packages that need to be updated. If they are all non-breaking changes, good news! We can usually run `npm audit fix` which would then update your `package-lock.json` file with the non-breaking changes.
  - If there are breaking changes required, work through each package which has to go through an update, while regenerating the `package-lock.json`. In the case of this blog,
    it was stilll using svelte v3, when svelte had already reached v5. I was a bit too behind, but on top of that with the upgrade, meant all other sveltekit related packages would also need the upgrade. This included: - svelte from v3 to v5 - svelte-check from v2.9.23 to v4.1.1 - @sveltejs/adapter-auto from v1 to v3 - @sveltejs/adapter-static from v1 to v3 - @sveltejs/kit from v1 to v2.11.1 - mdsvex from 0.10.6 to 0.12.3 - prettier from v2 to v3 - typescript from v4 to v5 - vite from v4 to v6

        Additions:
        - @sveltejs/vite-plugin-svelte v5
            - this was required as svelte had split this out from its core library, and so ``
        - prettier-plugin-svelte v3

  - I did end up removing vitest as there were actually no tests written anyway (maybe in the future I might add it, but it seemed pretty stable for the time being.)
  - With the package bumps, now we need to try run the app and see where all the breaking changes are. This meant some packages that originally had some imports now had those imports coming from elsewhere, or removing unneeded configurations, as adding in extra configurations. Couple of changes included:
    - removing `pluginSearchDirs: ["."]` from `.prettierrc`, which is the breaking change from later versions of prettier as it is no longer required
    - Fixing up TS errors where `undefined` values may be returned
    - importing `vitePreprocess` in `svelte.config.js` from `@sveltejs/vite-plugin-svelte` rather than `@svelte/kit/vite`
  - Next, we had to also update eslint related packages too: - @typescript-eslint/eslint-plugin from v5.45.0 to v8.18.0 - @typescript-eslint/parser from v5.45.0 to v8.18.0

        Additions:
        - eslint-plugin-svelte

    With these changes, had to edit the `eslintrc.cjs` file, adding in the additional svelte eslint plugin.

  ```
  extends: [
  	'eslint:recommended',
  	'plugin:@typescript-eslint/recommended',
  	'plugin:svelte/recommended',
  	'prettier'
  ],
  plugins: ['@typescript-eslint'],
  overrides: [
  	{
  		files: ['*.svelte'],
  		parser: 'svelte-eslint-parser',
  		parserOptions: {
  			parser: '@typescript-eslint/parser'
  		}
  	}
  ],
  	parserOptions: {
  	sourceType: 'module',
  	ecmaVersion: 2020,
  	extraFileExtensions: ['.svelte']
  },
  ...
  ```

- At this point, the dev environment was working fine, and rerouting correctly. Building a fresh build, on top of making sure lint commands and prettier were working correctly was a win!
  Next was tackling the deployment, which also required a bit of an upgrade and painful testing as it would now reroute to 404 with the upgrade from svelte.
  Additional updates: - `actions/upload-artifact@v4` step from v3 - `actions/download-artifact@v4` step from v3 - `peaceiris/actions-gh-pages@v4` step from v3
- In order to resolve the routing issues, I had to use make sure the links were pointing to absolute paths or point to the correct relative paths.
  To do this, we had to use `import { base } from '$app/paths'; ` and define the base application path in `svelte.config.js`.

```
// svelte.config.js
paths: { base: process.env.NODE_ENV === 'production' ? '/blog' : '' },
...


// in places where a link is (such as a page, or the footer)
import { base } from '$app/paths';

<a href={base ?? '/'}>Home</a>

```

To fix images and pointing to the right assets folder we used relative paths instead, which somehow worked in both production and dev environments.
The change to path did mean that it would now have an extra path in production (which I have yet to figure out) which is now all posts are now accessible via `{repo}/blog/blog-title` - which meant it would read as `ysoh286.github.io/blog/blog/{blog-title}` - which is annoying, but at least it's now not rendering a 404 page!

Routing's still a bit off and still an issue to fix, but at least now all the security audit's no longer complaining and the deployment still works as usual. It felt satisfying to finally close of all those dependabot MRs, and no longer see any more critical / high warnings whenever an install or audit was run.

### Lessons learned:

- Updating and upgrading packages can be a pain (which is why we should review them often, or consider what is most important) but we need to make sure it's maintainable and should be reviewed once in a while to ensure we are secure and up to date.
- `npm audit` has been discussed as a rough guideline, but generally a good rule of thumb when tackling upgrades:
  - try fixing non breaking changes first, before proceeding to breaking changes
  - feel free to divide breaking changes based upon different packages and their utilities (for example rather than doing all packages at once, do a single 1, before figuring out its dependencies, and then upgrade where necessary)
  - Ensure deployment and environments still work as expected (this is where maybe testing might come in handy after all)

### References / resources

- [Migrating to SvelteKit 2](https://svelte.dev/docs/kit/migrating-to-sveltekit-2) - svelte.dev
- [Static site generation - GitHub Pages](https://svelte.dev/docs/kit/adapter-static#GitHub-Pages) - svelte.dev -[sveltejs/prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte)
- [sveltejs/eslint-plugin-svelte](https://github.com/sveltejs/eslint-plugin-svelte)
- [sveltejs/eslint-plugin-svelte docs page](https://sveltejs.github.io/eslint-plugin-svelte/)
- [Old eslint-plugin-svelte3 (deprecated)](https://github.com/sveltejs/eslint-plugin-svelte3)
- [Migration from V5 for Vite](https://vite.dev/guide/migration) - Vite
- [mdsvex - svelte in markdown](https://mdsvex.pngwn.io/) - mdsvex
