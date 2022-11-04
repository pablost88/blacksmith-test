# Blacksmith Frontend Developer Test

## Getting Started

You need to have Node.js and NPM installed in your machine, these are the dependencies to run the test.

This test is using a `.env` file to create the [Browsersync](https://www.browsersync.io/) proxy, you can use this if you'd like or not depending on your preference. A `.env.example` file has been provided which can be used to set up your own `.env` file. Within this file you'll see the following:

```
DEVELOPMENT_DOMAIN=website.local
```

Place your local development url within this area, and include your port if necessary ie. `website.local:8888`.

After installing your NPM dependencies, within the project, you can run the following commands to work with the developer tools bootstrapped to the project.

```
# Start development environment and watch file changes using Browsersync
npm start

# Build all assets of the project for production.
npm run build
```

## Structure

We're using [Gulp](https://gulpjs.com/) to generate our static files into the `dist` folder.

Any assets that need to be added to the project will need to be added into the `src` folder within the project.

- Project is structured in PHP, as a result you'll need to set up a local web server to review the output of the files and make modifications using Browsersync
- CSS/SASS files are imported through `index.scss` within the `/src/scss` folder. All CSS is being compiled with auto-generated prefixes for all CSS elements using [CSSNext](https://cssnext.github.io/)
- JS files are imported through `index.js` within the `/src/js` folder. All JS is being compiled to a browser compatible format using [Babel](https://babeljs.io/). As a result, you can employ the use of ES6+ features if desired.
- Images are also being minified and can be placed within the `/src/images` folder to take advantage of this feature of the project.

## Test Objective

The objective of this test is to correct any issues present within the established codebase when comparing the structured code against the design mockups provided.

You are allowed to use any and all dependencies that you deem necessary for accomplishing the goal of completing the page. Dependencies can be added in any manner you wish to add them.

## Test Instructions

1.) Review the provided design mockups provided in the `design-mockups` folder within the root of this project. You will find three files (`mobile.jpg`, `mobile-nav.jpg` and `desktop.jpg`) which will indicate the expected finalized outcome of the page.

2.) Apply fixes to the implementation of the page based on the design provided. There will be AT LEAST one issue present per major template part element within the build, but there may be other issues as well beyond this. Issues/problems with the site will be specifically found in `/template-parts`, `/src/sass`, and `/src/js`

3.) The Company Culture section is a new addition to this page. The files have been created and included, but you will need to provide markup and styling in order to match the design.

4.) We need an anchor system on the main navigation. Make sure to link the "Company" item to the newly created Company Culture section. The page should scroll smoothly to that section on click. Make sure to implement this functionality using javascript, and not CSS.

5.) Fix the "To Top" button on the main footer. It should scroll to the top of the page, similarly to the anchor system on the main navigation. Make sure to implement this functionality using javascript, and not CSS.

## Submission

When completed, ensure that you run `npm run build`, keep the generated `dist` folder in your submission, remove the `node_modules` folder from the project and compress the project into a zip file. Submissions can be sent by email to the recruiter that you've been working with.


## Solution
After comparing the structured code against the design mockups provided, these are the issues I found:

#### Mobile and Desktop
- [x] Hero Section: the images are not placed correctly [commit](https://github.com/pablost88/blacksmith-test/commit/da66d22a2db705144c0dc7c6be1896bdc914c69d)
- [x] Hero Section: the text "JOIN OUR AMAZING TEAM"  doesn't have a line-break after the word 'OUR' [commit](https://github.com/pablost88/blacksmith-test/commit/374b437aa76724f6d8bccfc8ad67350503038b03)
- [x] Openings Section: the `<strong>` tag enclosing the text under the title 'OPEN ROLES' wasn't closed correctly [commit](https://github.com/pablost88/blacksmith-test/commit/1c0c0341d9fd99b7941cdaad2dd2e88e45580ad2)
- [x] The 'COMPANY CULTURE' section isn't visible [commit](https://github.com/pablost88/blacksmith-test/commit/a31f97fd3381784b3236268a600665b853edbaef), [commit](https://github.com/pablost88/blacksmith-test/commit/adb46789af44d0944a8813eed1ed7b4a14a57ce9)
- [x] Section "EMPLOYEE TESTIMONIAL":  the white background for each employee block is missing [commit](https://github.com/pablost88/blacksmith-test/commit/15786a0f7008cc71223ae4c47ee4b196bac49ab3)
- [x] Section "ABOUT US": there is one 'Safety' block missing [commit](https://github.com/pablost88/blacksmith-test/commit/4840598e2812e3a37f3aaf01c1bb63962a1b5e56)
- [x] We need an anchor system on the main navigation. Make sure to link the "Company" item to the newly created Company Culture section. The page should scroll smoothly to that section on click. Make sure to implement this functionality using javascript, and not CSS [commit](https://github.com/pablost88/blacksmith-test/commit/b48df8be2d36cc13c5746cc2af4f2583cde6853b) , [commit](https://github.com/pablost88/blacksmith-test/commit/11215e8392f7b055c5f94de662a921ed50d5ebda)
- [x] Fix the "To Top" button on the main footer. It should scroll to the top of the page, similarly to the anchor system on the main navigation. Make sure to implement this functionality using javascript, and not CSS [commit](https://github.com/pablost88/blacksmith-test/commit/e6bf5fff9e37d46fd652586779569bb6ed2a02fb)


#### Mobile Navigation:
- [x] The numbers next to each menu link don't have the correct color [commit](https://github.com/pablost88/blacksmith-test/commit/9150093a9272d104ce53811b27e29b5e273cb293)
- [x] The numbers next to each menu need more space [commit](https://github.com/pablost88/blacksmith-test/commit/9150093a9272d104ce53811b27e29b5e273cb293)
- [x] The close text next to the close menu button isn't visible when the menu is opened [commit](https://github.com/pablost88/blacksmith-test/commit/c7901c80906e44b80821413519c9557872822721)
- [x] The menu isn't closed after a link is clicked [commit](https://github.com/pablost88/blacksmith-test/commit/9744d3c02f6a0fe4a65a01d178cf7207c0422e5c)

#### Navigation Desktop
- [x] The numbers next to each menu link shouldn't be visible [commit](https://github.com/pablost88/blacksmith-test/commit/2eabc2d854bc3037bfbdbd683867f98732a900d0)

#### Desktop
- [x] Hero Section: the orange rectangle at the left of the main image isn't placed correctly [commit](https://github.com/pablost88/blacksmith-test/commit/73f0fbb0a1918ae4a981cc1833becb2bf1173046)
- [x] Open Roles Section: the left dark background isn't visible [commit](https://github.com/pablost88/blacksmith-test/commit/5ab60ad81754c61046f7870657aed6ed457cd104)
- [x] Footer: the services blocks are misaligned [commit](https://github.com/pablost88/blacksmith-test/commit/2f3c25fb034bed05bc23838b1825d64b5bdc63c1)
