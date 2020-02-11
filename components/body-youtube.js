import MiniReactClass from '/minireact/MiniReact.js';
 const MiniReact = new MiniReactClass();

export default class bodyYoutubeClass extends MiniReactClass {
	render() {
 		return (
			MiniReact.createElement("div", {class: "google__block"}, 
				MiniReact.createElement("div", {class: "back--button", Click: "Router.back();"},
					MiniReact.createElement("img", {src: "assets/icons/left-arrow.svg"}),
					MiniReact.createElement("span", null, "Retour")
				),
				MiniReact.createElement("img", { 
					src: "assets/img/youtube-logo-grand.png", 
					class: "logo--google" 
				}), 
				MiniReact.createElement("div", {class: "search--block"},
					MiniReact.createElement("input", {
						type: "text",
						placeholder: "Effectuez une recherche sur Youtube",
						class: "input--google"
					}),
					MiniReact.createElement("img", {
						class: "img--loupe", src: "assets/icons/search-icon.svg"
					})
				),
				MiniReact.createElement("div", 
					{class: "other__block"},
					MiniReact.createElement("div", {class: "logo--block google", Click: "Router.push('Google');"}, 
						MiniReact.createElement("img", {src: "assets/icons/google-icon.svg"}),
						MiniReact.createElement("span", null, "Google")
					),
					MiniReact.createElement("div", {class: "logo--block pexels", Click: "Router.push('Pexels');"}, 
						MiniReact.createElement("img", {src: "assets/icons/pexels-icon.svg"}),
						MiniReact.createElement("span", null, "Pexels")
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

if (localStorage.getItem('router').split(',')[localStorage.getItem('router').split(',').length - 1] == "Youtube") {
	console.log('Youtube !');
	function keypressed(event) {
		let router = localStorage.getItem('router').split(',');
		if (router[router.length - 1] == 'Youtube' && event.keyCode == "13") {
			window.open('https://www.youtube.com/results?search_query=' + document.getElementsByClassName('input--google')[0].value, '_blank');
			document.getElementsByClassName('input--google')[0].value = null;
		}
	}

	document.body.addEventListener('keypress', keypressed);
}