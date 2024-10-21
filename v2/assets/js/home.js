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

const syncPointer = ({ x: pointerX, y: pointerY }) => {
	const x = pointerX.toFixed(2)
	const y = pointerY.toFixed(2)
	const xp = (pointerX / window.innerWidth).toFixed(2)
	const yp = (pointerY / window.innerHeight).toFixed(2)
	document.documentElement.style.setProperty('--x', x)
	document.documentElement.style.setProperty('--xp', xp)
	document.documentElement.style.setProperty('--y', y)
	document.documentElement.style.setProperty('--yp', yp)
}
document.body.addEventListener('pointermove', syncPointer)
