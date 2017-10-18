=============================
Resource Registry Demystified
=============================

$ whoami
========

- Johannes Raggam from Graz/Austria
- Owner of programmatic
- BDA member
- Plone Framework Team Member
- https://github.com/thet
- https://twitter.com/thetetet


What is the resource registry?
==============================

- A mechanism to register and deploy JavaScript and CSS resources
- A mechanism to organize dependencies between resources
- A mechanism to optimize resource and requests (minifying download size and minimizing requests)

Same goals for Plone 4 and Plone 5


The resource registry in Plone 4
================================

Screenshot portal_javascripts and portal_css

Concatenation and minification in defined order

Pros
- Addons can register their resources
- After "cooking" the resources via an setuphandler step, resources are immediately usable.
- Automatic cache management (plone.app.caching)

Cons
- No dependencies are formally defined
- Hard to manage dependencies (only via order of registration)
- Hard to keep requests optimized (necessity of keeping specific order and not have conditional statements break up concatenation within the order)


The resource registry in Plone 5
--------------------------------

Screenshot @@resouce-controlpanel


Based on the technologies RequireJS and LESS css.


Pros
- JavaScript dependencies are formally defined (RequireJS ``require`` and ``define``)
- CSS dependencies also formally defined (``@import`` statements in LESS and even CSS - before: every import creates seperate request)
- Better CSS code organization and reuse via LESS
- Easier to manage dependencies
- Better request optimization (all dependend resources can land in one compiled file/bundle, compiled bundles can depend on one another)
- Same process from Plone 4 can be used in Plone 5 too (non-compiled bundles like ``plone-legacy`` are just concatenated and minified)
- Addons can still achieve a plug-and-play experience
- Automatic cache management (plone.app.caching) (You won't get this if you bypass the resource registry).

Cons
- The Plone 5 way (RequireJS and LESS) needs a precompiled bundle or an extra compilation step.
- Higher complexity of tools involved.
- Sometimes hard to debug.
- Some technologies are becoming obsolete (ES6 imports, babel and Webpack, SASS).


A praise for the resource registry
----------------------------------

- It works quite well
- A huge improvement in JS and CSS situation in Plone
  - Good test coverage vs. no test coverage
  - Forced to well-define dependencies eliminates a class of errors
  - Better code reuse, modularity
  - Mockup and patternslib (and anything else)
        About pros and cons and outdateness of Mockup and patternslib would be a seperate talk

- It works like magic (client side compilation!!!1!1)


Nomenclature
------------

- Resources
  - JS module definitions (``require``)
  - Non require-js JS
  - CSS, LESS

- Bundle resources
  - Defines all bundle dependencies (``require``)
  - CSS / LESS

- Bundles
  - Compiled bundles
  - Legacy bundles (non-compile bundles)




Architecture
------------

- require
- define
- LESS
- package dependencies (bower, npm)


- command line build tool based on grunt
- TTW build tool based on r.js and less.js (client side compilation!!!1!1)
- Both making use of the Plone registry, which is used for resource registration (OMG, you could have different registrations via local registries)

- Development mode: Don't use bundle caching mechanisms
- Develop JavaScript: Deploy all bundle JS dependnecies as individual files instead a precompiled file.
- Develop CSS: Deploy all bundle LESS dependnecies as individual files instead a precompiled file.

- Legacy resources
  - Isolated from the global require and define statements to avoid the ``mismatched anonymous define`` error (but can actually have their own RequireJS thing going on).
  - TTW definition


Use Cases
=========

Immediate Plug and Play experience
----------------------------------
Option 1:
- Register legacy (precompiled) resource via ``plone-legacy`` or another non-compile bundle.
- set or clear ``last_compilation``
- Done.

Option 2:
- Register as non-compile bundle directly (not recommended, but works).


Custom ``plone`` and ``plone-logged-in`` bundles
------------------------------------------------


Deploy resources only for specific pages
----------------------------------------


Add ``defer`` or ``async`` parameters to bundles
------------------------------------------------



Outlook: Webpack
================


Outlook: PLIPS
==============
































































































