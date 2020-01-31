import MiniReactClass from './MiniReact.js';
const MiniReact = new MiniReactClass;

import MiniReactDOMClass from './MiniReactDOM.js';
const MiniReactDOM = new MiniReactDOMClass();

import RouterClass from './Router.js';
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