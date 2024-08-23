package routes

import (
	"github.com/acgtubio/eyd-sh/assets"
	"github.com/acgtubio/eyd-sh/handlers"
	"net/http"
)

func HandleRoutes() http.Handler {
	mux := http.NewServeMux()

	// Serves JS and CSS Files
	assets.MountAssets(mux)

	indexHandler := handlers.IndexHandler{}
	mux.HandleFunc("/", indexHandler.HandleIndexShow)
	loginHandler := handlers.LoginHandler{}
	mux.HandleFunc("/login", loginHandler.HandleLoginShow)

	return mux
}
