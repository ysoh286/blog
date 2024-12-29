---
title: 'Weekly learning review - A go at tailwind CSS / shadcn'
date: 2024-12-29 22:10:00
---

This week's learning review:

- Currently learning Tailwind and building a project using Tailwind and shadcn, which seems to be the latest fad going round for building component libraries and design systems.
- Completed Steve Kinney's Tailwind CSS course on Front End Masters - which has made me warm up a little to Tailwind's methodology and approach to CSS.

_Initial thoughts on Tailwind:_
_Previously when I tried TailwindCSS for the first time about a year ago, I hated it because it reminded me so much of the hey days of when we had Bootstrap and other libraries which based their styling on chaining or composing different class names together. It did bloat up the HTML together with styling, which became a bit of a maintenance nightmare. On top of that, sometimes it took hours to find the 'right' combination of classes to achieve what was required, which sometimes could have been solved in 5 minutes with a few lines of pure CSS. It is said to not achieve automatic critical CSS but has improved significantly over the years to reduce the amount of CSS that's shipped to production. Now, I've slightly warmed up to the idea, see the value in some of the utilities it has and even shown some examples where I usually write a mixture of JS, CSS and HTML to achieve which can now be only just achieved using CSS and HTML instead._

## The utility classes methodology

The idea is that rather than writing a bunch of custom CSS, we have shorter CSS snippets that make up a utility class name (such as padding, or margin, or background colour) and then compose what we need out of these smaller class names to create the styles we need. These are then directly added to our HTML markup, rather than writing separate CSS styles.

```
// Rather than something like this
.custom-div {
    padding: 10px;
    margin: 10px;
    background-color: red;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
}


<div className='custom-div' />

// We might do this:
<div className='bg-red container margin-[10px] height-[10px] rounded-sm' />

```

## Some gotchas with tailwind

Things that caught me off or just quirks in how things work in Tailwind:

- Do not compose dynamic classnames (it won't work)

Tailwind can only do compose fully written classnames together. The reason for this is that classnames must exist as 'complete unbroken strings' in order for the styles to be applied correctly.

```
// e.g. This won't work
const color = 'blue'
const shade = '500'
<div className={`bg-${color}-${shade}`}>

// But this does work...
<div className='bg-blue-500'>

// or this:
const colourClassNames = {
    'blue': {
        '500': 'bg-blue-500',
    },
};
<div className={colourClassNames['blue']['500']}>
```

See [this](https://tailwindcss.com/docs/content-configuration) for more details.

- Defining colours do not require commas, or `rgb` / `hsl` appended to it when defining colours in CSS variables

Only define the colour channels.

```
// e.g. This won't work...
:root {
    --primary: rgb(0, 0, 0);
    --secondary: rgb(255, 255, 255);
}

// tailwind.config.ts
...
theme: {
    colors: {
        primary: var(--primary);
        secondary: var(--secondary);
    }
}


// But this will work...
:root {
    --primary: 0 0 0;
    --secondary: 255 255 255;
}

theme: {
    colors: {
        primary: rgb(var(--primary));
        secondary: rgb(var(--secondary));
    }
}

```

This is defined this way to allow them to work with the opacity modifier (e.g. `bg-primary-800` / `bg-primary-400` type of declaration). If we do need to define custom colours, we are able to do so directly.

```
theme: {
    colors: {
        'magestic-purple: {
            // define your colours directly
            900: ...,
            800: ...
        }
    }
}

// Usage
<div className="bg-magestic-purple-800" />
```

See [this](https://tailwindcss.com/docs/customizing-colors#using-css-variables) for more details.

- Some common class name deviations
  - `background-color:red` = `bg-red`
  - `display: block` = `block`
  - `box-sizing: border` = `box-border`
  - `padding: 0` = `p-0`
  - `margin-0` = `m-0`
  - `color: green` = `text-green`
  - `width-0` = `w-0`
  - `height-0` = `h-0`
  - Flex / grid
    - `align-content: center` = `content-center`
    - `justify-items: center` = `items-center`

**Pros:**

- Reusable, composable
- Some handy classes that handle things for you (such as `divide`, `space`, `peer`, `group`)
- Configurable and customizable
- We're still writing CSS underneath
- Works with rem out of the box, but also allows for more specific values such as `px`, `fit-content`, `auto` where needed
- Allows for base / components / utilities layers

**Cons:**

- It'll look messy (mixing styles with HTML, writing lots of classes and chaining them together - which feels like a blast in the past back to good old Bootstrap days) - especially with all the different classes required for hovers, different states, pseudo-classes and pseudo-attributes
- When you start from scratch, it does remove lot of the original CSS you may be used to with headings (such as margin, padding, font-sizes)
- Loss of automatic critical CSS
- Although we can use `@apply` for customisation, it generally comes at a performance cost and should be avoided
- Small learning curve (to wrap your head around)
- Could take a while to debug due to the sheer number of classes

It does take a while to get used to, along with a bunch of deviations as seen above with the gotchas section. I do enjoy some of the classes that do really make life easier such as `divide`, `peer`, `group`, and `space`, however I do sometimes rather reach for ordinary CSS for flex /grid layouts as the effort seems more or less the same.

_Do I see the value in tailwind? Yes. Would I use it over CSS or styled components / CSS-in-JS (which is a different methodology)? Not to my liking yet. It depends - like with any tool, each have its pros and cons. There's a few gotchas I'm still wrapping my head around and grasping the idea before making a proper verdict._

## First impressions with shadcn/ui

[shadcn/ui](https://ui.shadcn.com/) is a set of accessible React components that you can 'copy paste' and use directly in your application. It's meant to help build component libraries faster, and thus provide building blocks in your application without you needing to build your own from scratch all the time.

**Pros:**

- Accessible, easy to use, beautiful
- Pretty much components built out of the box for you
- A good starter for the basic components as building blocks
- Has a wide amount of support and love from the community, good documentation (despite it only being active for 2+ years)
- No need to install a package, you have full control (though debatable) over the component and how it is composed
- Easy to add in another component, just run another command

**Cons:**

- Still have to style them with tailwind, or move things around if design deviates a lot from the original building blocks (which, in some cases maybe we're better off building custom components after all for these if it takes the same amount of time)
- Although you have 'full control' and shadcn does not take responsibility for these components, it's a bit of a catch-22 - if you find a bug, you'll need to resolve it yourself, but you'll need to learn what lies underneath shadcn (which is react, tailwindCSS, and radixui - so if there's a component where you find a bug or want to customise further, you'll need to know those in more detail) - some of us may find this great, others may not.
- Tied to tailwindCSS (which could be a pro as well, if you like tailwindCSS)
- Tied to React only (not framework agnostic, but when React still dominates as the top front-end library today, it's not so much of a con)

_I did find myself having to write custom components or compose them over the top of some of these built in ones which was expected. The question was whether I would save time - in the more basic cases yes (such as a button or a badge), but for more complex components sometimes not (such as select menu, toggle group)._

## References

- [TailwindCSS](https://tailwindcss.com/)
- [CSS Utility classes and 'separation of concerns'](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) - Adam Wathan (creator of TailwindCSS)
- Steve Kinney's [Tailwind CSS](https://frontendmasters.com/courses/tailwind-css/) course on FrontEnd Masters
- [Tailwind: A workshop](https://tailwind-workshop.vercel.app/introduction) course website - Steve Kinney
- [shadcn/ui](https://ui.shadcn.com/) - by shadcn
- [Radix UI](https://www.radix-ui.com/)
