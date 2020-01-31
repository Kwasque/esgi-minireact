import MiniReactClass from './MiniReact.js';
const MiniReact = new MiniReactClass();

import BodyClass from './body.js';
const body = new BodyClass();

export default class GoogleSearch extends MiniReactClass {
	render() {
		return (
			MiniReact.createElement('div', {class: "page__all"}, 
				MiniReact.createElement(body, {}, )
			)
		);
	}
}