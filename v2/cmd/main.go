package main

import (
	"github.com/acgtubio/eyd-sh/routes"
	"net/http"
)

func main() {
	handler := routes.HandleRoutes()
	http.ListenAndServe(":8080", handler)
}
