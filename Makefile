cv:
	pandoc _pages/cv.md --filter assets/cv-filter.py --template assets/cv-template.tex -o assets/PDFs/PaulDruceCV.pdf

production:
	JEKYLL_ENV=production bundle exec jekyll build

ghpage:
	git push -f origin `git subtree split --prefix _site/ master`:gh-pages

dev:
	bundle exec jekyll clean
	bundle exec jekyll serve --unpublished --livereload --host 0.0.0.0

demo:
	bundle exec jekyll clean
	bundle exec jekyll serve --livereload --host 0.0.0.0
clean:
	bundle exec jekyll clean
