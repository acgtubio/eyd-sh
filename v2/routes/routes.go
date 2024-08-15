package routes

import (
	"github.com/acgtubio/eyd-sh/handlers"
	"net/http"
)

func HandleRoutes() http.Handler {
	mux := http.NewServeMux()

	indexHandler := handlers.IndexHandler{}
	mux.HandleFunc("/", indexHandler.HandleIndexShow)

	return mux
}
