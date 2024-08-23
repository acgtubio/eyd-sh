package handlers

import (
	"github.com/acgtubio/eyd-sh/view/templates/pages"
	"net/http"
)

type IndexHandler struct{}

func (h IndexHandler) HandleIndexShow(w http.ResponseWriter, r *http.Request) {
	render(w, r, pages.Home(pages.Skills()))
}
