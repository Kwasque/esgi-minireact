import MiniReact from './MiniReact.js';
const MiniReactObj = new MiniReact();

import ButtonClass from './button.js';
const Button = new ButtonClass();

export default class BodyClass extends MiniReact {
    state = {
        NumberDisplay: 2
    }

    render() {
        return (
            MiniReactObj.createElement('div', {class: "TestClass"}, 
                MiniReactObj.createElement(Button, {}),
                MiniReactObj.createElement(Button, {})
            )
            // MiniReactObj.createElement('h1', {}, this.state.NumberDisplay)
        );
    }
}