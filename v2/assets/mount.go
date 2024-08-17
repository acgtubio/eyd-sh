package assets

import (
	"net/http"
)

func MountAssets(mux *http.ServeMux) {
	mux.Handle("/assets/css/", http.StripPrefix("/assets/css/", http.FileServer(http.Dir("assets/css"))))
	mux.Handle("/assets/js/", http.StripPrefix("/assets/js/", http.FileServer(http.Dir("assets/js"))))
}
