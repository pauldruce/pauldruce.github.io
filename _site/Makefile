compile:
	# pandoc CV.md -s -o assets/BCV.html
	# pandoc assets/BusinessCV.html -s --template=CV_files/CVlatexTemplate.tex -o assets/BusinessCVBeta.pdf
	# pandoc CV.md -s --wrap=preserve --template=CV_files/CVlatexTemplate.tex -V linkcolor:blue -V geometry:a4paper -V geometry:margin=2cm -o assets/PDFs/CV.pdf
	# pandoc CV.md -s --wrap=preserve --template=CV_files/CVlatexTemplate.tex -o CV.tex

production:
		JEKYLL_ENV=production bundle exec jekyll build

development:
		bundle exec jekyll serve --livereload --host 0.0.0.0
