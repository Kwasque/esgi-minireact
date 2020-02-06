import MiniReactClass from '../minireact/MiniReact.js';
 const MiniReact = new MiniReactClass();
 import SearchIconClass from './search-icon.js';
 const searchicon = new SearchIconClass();

export default class bodyGoogleClass extends MiniReactClass {
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
						placeholder: "Effectuez une recherche sur Google",
						class: "input--google"
					}),
					MiniReact.createElement("img", {
						class: "img--loupe", src: "assets/icons/search-icon.svg"
					})
				),
				MiniReact.createElement("div", 
					{class: "other__block"},
					MiniReact.createElement("div", {class: "logo--block pexels", Click: "Router.push('Pexels');"}, 
						MiniReact.createElement("img", {src: "assets/icons/pexels-icon.svg"}),
						MiniReact.createElement("span", null, "Pexels")
					),
					MiniReact.createElement("div", { class: "logo--block youtube", Click: "Router.push('Youtube');"},
						MiniReact.createElement("img", {src: "assets/img/youtube-logo.png"}),
						MiniReact.createElement("span", null, "Youtube")
					),
					MiniReact.createElement("div", {class: "logo--block maps", Click: "Router.push('Maps');"}, 
						MiniReact.createElement("img", {src: "assets/img/google-maps-logo.png"}),
						MiniReact.createElement("span", null, "Maps")
					),
				)
			)
 		);
 	}
}

function keypressed(event) {
	let router = localStorage.getItem('router').split(',');
	if (router[router.length - 1] == 'Google' && event.keyCode == "13") {
		window.open('https://www.google.com/search?q=' + document.getElementsByClassName('input--google')[0].value, '_blank');
		document.getElementsByClassName('input--google')[0].value = null;
	}
}

document.body.addEventListener('keypress', keypressed);