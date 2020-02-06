import MiniReactClass from '../minireact/MiniReact.js';
const MiniReact = new MiniReactClass();

import bodyGoogleClass from './body-google.js';
const bodyGoogle = new bodyGoogleClass();

export default class Google extends MiniReactClass {
	render() {
		return (
			MiniReact.createElement('div', {class: "page__all"}, 
				MiniReact.createElement(bodyGoogle, {}, )
			)
		);
	}
}