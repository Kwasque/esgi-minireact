import MiniReactClass from '/minireact/MiniReact.js';
const MiniReact = new MiniReactClass();

import bodyYoutubeClass from '/components/body-youtube.js';
const bodyYoutube = new bodyYoutubeClass();

export default class GoogleYoutube extends MiniReactClass {
	render() {
		return (
			MiniReact.createElement('div', {class: "page__all"}, 
				MiniReact.createElement(bodyYoutube, {}, )
			)
		);
	}
}