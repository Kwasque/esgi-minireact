import MiniReactClass from '../minireact/MiniReact.js';
 const MiniReact = new MiniReactClass();
import SearchIconClass from './search-icon.js';
const searchicon = new SearchIconClass();
import RouteClass from '../minireact/Route.js';
const Route = new RouteClass();

export default class BodyClass extends MiniReactClass {
	render() {
 		return (
			MiniReact.createElement("div", {class: "google__block"}, 
				MiniReact.createElement("img", { 
					src: "assets/img/google-logo.png", 
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
					MiniReact.createElement("div", {class: "logo--block"}, 
						MiniReact.createElement("img", {src: "assets/icons/images-icon.svg"}),
						MiniReact.createElement("span", null, "Images")
					),
					MiniReact.createElement("div", {class: "logo--block"}, 
						MiniReact.createElement("img", {src: "assets/icons/maps-icon.svg"}),
						MiniReact.createElement("span", null, "Maps")
					),
					MiniReact.createElement("div", {class: "logo--block"}, 
						MiniReact.createElement("img", {src: "assets/icons/video-icon.svg"}),
						MiniReact.createElement("span", null, "Vidéos")
					),
					MiniReact.createElement(Route, null
						
					)
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