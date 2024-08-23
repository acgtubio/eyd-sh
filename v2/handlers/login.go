package handlers

import (
	"net/http"

	"github.com/a-h/templ"
	"github.com/acgtubio/eyd-sh/view/templates/pages"
)

type LoginHandler struct{}

func (h LoginHandler) HandleLoginShow(w http.ResponseWriter, r *http.Request) {
	var isHtmx = r.Header.Get("HX-Request") == "true"
	var content templ.Component

	if isHtmx {
		content = pages.Login()
	} else {
		content = pages.Home(pages.Login())
	}

	render(w, r, content)
}
