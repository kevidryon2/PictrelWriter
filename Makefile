all:
	make css
	make run

css:
	echo *
	bash -c "for filename in *; do echo \$filename; done"

run:
	firefox index.html &
