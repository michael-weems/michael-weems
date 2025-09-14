const THEME = "theme"
const themes = [
	"rose-pine",
	"catppuccin-mocha",
	"gruvbox",
]

function switch_theme(theme) {
	localStorage.setItem(THEME, theme)
	for (const t of themes) {
		const name = `theme-${t}`
		if (t == theme) document.body.classList.add(name)
		else document.body.classList.remove(name)
	}
}

function load_theme() {
	let theme = localStorage.getItem(THEME)
	if (!theme) theme = "rose-pine"
	
	switch_theme(theme)
}

function list_themes() {
	return themes
}

document.addEventListener('DOMContentLoaded', function() {
	load_theme()
});
