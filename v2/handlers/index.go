package handlers

import (
	"github.com/acgtubio/eyd-sh/templates"
	"net/http"
)

type IndexHandler struct{}

func (h IndexHandler) HandleIndexShow(w http.ResponseWriter, r *http.Request) {
	render(w, r, templates.Index())
}
