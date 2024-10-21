run:
	templ generate
	go run cmd/main.go
build: 
	go build -o ./main ./cmd
tw:
	bun run tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
templ:
	templ generate
