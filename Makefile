compile:
	# pandoc CV.md -s -o assets/BCV.html
	# pandoc assets/BusinessCV.html -s --template=CV_files/CVlatexTemplate.tex -o assets/BusinessCVBeta.pdf
	# pandoc CV.md -s --wrap=preserve --template=CV_files/CVlatexTemplate.tex -V linkcolor:blue -V geometry:a4paper -V geometry:margin=2cm -o assets/PDFs/CV.pdf
	# pandoc CV.md -s --wrap=preserve --template=CV_files/CVlatexTemplate.tex -o CV.tex

production:
		JEKYLL_ENV=production bundle exec jekyll build

ghpage:
		git push -f origin `git subtree split --prefix _site/ master`:gh-pages

development:
	bundle exec jekyll clean
	bundle exec jekyll serve --unpublished --livereload --host 0.0.0.0

demo:
	bundle exec jekyll clean
	bundle exec jekyll serve --livereload --host 0.0.0.0
clean:
		bundle exec jekyll clean
