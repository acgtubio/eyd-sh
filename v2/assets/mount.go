package assets

import (
	"net/http"
)

func MountAssets(mux *http.ServeMux) {
	mux.HandleFunc("/favicon.ico", faviconHandler)
	mux.Handle("/assets/css/", http.StripPrefix("/assets/css/", http.FileServer(http.Dir("assets/css"))))
	mux.Handle("/assets/js/", http.StripPrefix("/assets/js/", http.FileServer(http.Dir("assets/js"))))
	mux.Handle("/assets/images/", http.StripPrefix("/assets/images/", http.FileServer(http.Dir("assets/images"))))
	mux.Handle("/assets/webfonts/", http.StripPrefix("/assets/webfonts/", http.FileServer(http.Dir("assets/webfonts"))))
}

func faviconHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "assets/images/favicon.ico")
}
