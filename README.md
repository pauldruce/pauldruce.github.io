# Paul Druce's Website

This repository hosts my website [pauldruce.co.uk](https://www.pauldruce.co.uk).

It is created using [Jekyll](https://jekyllrb.com).

It is a bit of an experiment to find a good way to write maths on the internet.
I think this setup seems to have promise, but I am still learning, so if you
have any issues please let me know.

This site is built and then hosted on GitHub pages. Whilst GitHub pages do have
the ability to build Jekyll websites, but only using their Kramdown markdown. I
want to use the power of **Pandoc** which allows me to use a combination of
markdowns simplicity for typing text, and LaTeX syntax for including maths. This
way I only need to learn one mathematical syntax for work and play. Easily
allowing me to convert my work into a more public friendly format for
dissemination.

I use macOS to build this, but I'm sure for Linux systems it is no more
difficult. I'm not sure how to do this for Windows as there isn't a Unix
terminal.

## Requirements

To build you will need a few things.

### Ruby
Jekyll requires Ruby. I recommend following the installation instructions from
Jekyll's website:
https://jekyllrb.com/docs/

For macOS - I would recommend using a Ruby virtual environment such as
[rbenv](https://github.com/rbenv/rbenv) or [rvm](https://github.com/rvm/rvm). I
find rbenv to easier to install and use on modern macOS operating systems.

### Pandoc
You will also need to have [Pandoc](https://pandoc.org/index.html) version 3 or higher installed.
Pandoc is a utility to convert one document type to another. It has excellent
handling of mathematics - by allowing the use of latex style mathematics in
MarkDown documents.
We need the --citeproc command to be available for Pandoc, which was introduced
~v3.

The easiest way to get both of these is to install them using `cabal` which is a
Haskell package manager. You don't need to know any Haskell to use these tools!

This can take a while to install but it only needs to be done once. 

Instructions to install below are taken from: https://www.haskell.org/ghcup/
* Install Haskell using:
  ```sh
  curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh
  ```
* Install pandoc and pandoc-sidenote:
  ```sh
  cabal install pandoc pandoc-sidenote
  ```

## Instructions to myself

First you need to install the Ruby Gems needed. These are defined in the Gemfile
and you can install them using the Ruby bundler using the following command:
```sh
bundle install
```

To build locally I navigate my terminal to the directory and enter the following
commands:

- "bundle exec jekyll serve --livereload --host 0.0.0.0" - this runs a local
  version of my website, any changes I make in the directory are automatically
  (if slowly, currently ~30s) on the local site. This allows me to test any
  edits before committing them to the main website directory. This version
  doesnt include the google analytics and other web only features to include
  those we need to use:

- "JEKYLL_ENV=production bundle exec jekyll build" - this just builds the
  website files and includes the google analytics and other web only features
  (to be implemented such as discuss comments etc). This is the version that is
  then copied into the Github pages directory.

To update my website: pauldruce.github.io, I need to run the above production
"JEKYLL_ENV=production bundle exec jekyll build" command, and when it has
finished, copy the contents of the _site folder directly into the repo for
pauldruce.github.io. _site/* to pauldruce.github.io/ NOT into
pauldruce.github.io/_site!
