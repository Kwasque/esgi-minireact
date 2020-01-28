import MiniReactClass from './MiniReact.js';
 const MiniReact = new MiniReactClass();

import SearchIconClass from './search-icon.js';
const searchicon = new SearchIconClass();

export default class BodyClass extends MiniReactClass {
	render() {
 		return (
			MiniReact.createElement("div", {class: "google__block"}, 
				MiniReact.createElement("img", { 
					src: "https://www.reputationvip.com/wp-content/uploads/2018/07/L-histoire-du-logo-Google.png", 
					class: "logo--google" 
				}), 
				MiniReact.createElement("div", {class: "search--block"},
					MiniReact.createElement("input", {
						type: "text",
						placeholder: "Effectuez une recherche sur Google ou saisissez une URL",
						class: "input--google"
					}),
					MiniReact.createElement(searchicon, {
						class: "img--loupe"
					})
				),
				MiniReact.createElement("div", 
					{class: "other__block"},
					MiniReact.createElement("div", {class: "imgages--block"}, "REMPLACER PAR LOGO"),
					MiniReact.createElement("div", {class: "maps--block"}, "REMPLACER PAR LOGO"),
					MiniReact.createElement("div", {class: "videos--block"}, "REMPLACER PAR LOGO")
				)
			)
 		);
 	}
}

function keypressed(event) {
	if (event.keyCode == "13") {
		window.open('https://www.google.com/search?q=' + document.getElementsByClassName('input--google')[0].value, '_blank');
		document.getElementsByClassName('input--google')[0].value = null;
	}
}

document.body.addEventListener('keypress', keypressed);