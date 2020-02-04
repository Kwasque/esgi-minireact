import MiniReactClass from './MiniReact.js';
const MiniReact = new MiniReactClass();

export default class RouteClass extends MiniReactClass {
    render() {
        return (
			MiniReact.createElement('div', {id: "test", Click: "Router.push('test');"}, 'Oé')
        );
    }
}