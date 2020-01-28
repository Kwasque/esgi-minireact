import MiniReact from './MiniReact.js';
const MiniReactObj = new MiniReact();

import MiniReactDOM from './MiniReactDOM.js';
const MiniReactDOMObj = new MiniReactDOM();

import BodyClass from './body.js';
const body = new BodyClass();

class MainClass extends MiniReact {
    render() {
        return (
            MiniReactObj.createElement('div', {class: "page__all"}, 
                MiniReactObj.createElement(body, {},)
            )
        );
    }
}
const Main = new MainClass();

MiniReactDOMObj.render(Main, document.getElementById('root'));