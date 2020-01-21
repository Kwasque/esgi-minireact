import MiniReact from './MiniReact.js';
const MiniReactObj = new MiniReact();

export default class ButtonClass extends MiniReact {
    render() {
        return (
            MiniReactObj.createElement('button', {}, '{{ Text }} <Text Text2> {{ Text2 }} ')
        );
    }
}