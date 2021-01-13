# Paul Druce's Academic Website

This is created using Jekyll. This repo contains the code for the website [pauldruce.github.io](pauldruce.github.io).

This site is built using Jekyll and pandoc/markdown. This a bit of an experiment of mine to find a good way to write maths on the internet, this setup seems to have promise but I am still learning, so if you have any issues please let me know.

This site is built locally and then hosted on Github pages. Github pages has the ability to build Jekyll websites, but only using their Kramdown markdown. I want to use the power of **Pandoc** which allows me to use a combination of markdowns simplicity for typing text, and LaTeX syntax for including maths. This way I only need to learn one mathematical syntax for work and play. Easily allowing me to convert my work into a more public friendly format for dissemination.

I use macOS to build this, but I'm sure for Linux systems it is no more difficult. I'm not sure how to do this for Windows as there isn't a unix terminal.

## Instructions to myself




To build locally I navigate my terminal to the directory and enter the following commands:

- "bundle exec jekyll serve --livereload --host 0.0.0.0" - this runs a local version of my website, any changes I make in the directory are automatically (if slowly, currently ~30s) on the local site. This allows me to test any edits before committing them to the main website directory. This version doesnt include the google analytics and other web only features to include those we need to use:

- "JEKYLL_ENV=production bundle exec jekyll build" - this just builds the website files and includes the google analytics and other web only features (to be implemented such as discuss comments etc). This is the version that is then copied into the Github pages directory.

To update my website: pauldruce.github.io, I need to run the above production "JEKYLL_ENV=production bundle exec jekyll build" command, and when it has finished, copy the contents of the _site folder directly into the repo for pauldruce.github.io. _site/* to pauldruce.github.io/ NOT into pauldruce.github.io/_site!
