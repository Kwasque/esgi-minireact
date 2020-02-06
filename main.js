import MiniReactClass from './minireact/MiniReact.js';
const MiniReact = new MiniReactClass;

import MiniReactDOMClass from './minireact/MiniReactDOM.js';
const MiniReactDOM = new MiniReactDOMClass();

import RouterClass from './minireact/Router.js';
var Router = new RouterClass;

class MainClass extends MiniReactClass {
    render() {
        return (
            Router.View()
        );
    }
}
const Main = new MainClass();

MiniReactDOM.render(Main, document.getElementById('root'));

MiniReact.addEvent();