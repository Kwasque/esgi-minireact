import MiniReactClass from '../minireact/MiniReact.js';
const MiniReact = new MiniReactClass();

import bodyMapsClass from './body-maps.js';
const bodyMaps = new bodyMapsClass();

export default class Maps extends MiniReactClass {
	render() {
		return (
			MiniReact.createElement('div', {class: "page__all"}, 
				MiniReact.createElement(bodyMaps, {}, )
			)
		);
	}
}