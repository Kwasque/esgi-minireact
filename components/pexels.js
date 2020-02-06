import MiniReactClass from '../minireact/MiniReact.js';
const MiniReact = new MiniReactClass();

import bodyPexelsClass from './body-pexels.js';
const bodyPexels = new bodyPexelsClass();

export default class Pexels extends MiniReactClass {
	render() {
		return (
			MiniReact.createElement('div', {class: "page__all"}, 
				MiniReact.createElement(bodyPexels, {}, )
			)
		);
	}
}