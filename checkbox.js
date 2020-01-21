import MiniReact from './MiniReact.js';
const MiniReactObj = new MiniReact();

export default class CheckBoxClass extends MiniReact {
    render() {
        return (
            MiniReactObj.createElement('div', {}, 
                MiniReactObj.createElement('input', {type: "checkbox"}),
                MiniReactObj.createElement('label', {}, '{{ Text }}')
            )
        );
    }
}