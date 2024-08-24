const siteUrl = document.getElementsByClassName("login-link-main")[0];
const loginLink = document.getElementsByClassName("login-link")[0];

siteUrl.addEventListener("click", (e) => {
	loginLink.classList.add("is-visible");
});

loginLink.addEventListener("click", (e) => {
	if (loginLink.classList.contains("is-visible")) {
		loginLink.classList.remove("is-visible");
	}
})
