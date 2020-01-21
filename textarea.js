import MiniReact from './MiniReact.js';
const MiniReactObj = new MiniReact();

export default class TextAreaClass extends MiniReact {
    render() {
        return (
            MiniReactObj.createElement('textarea', {}, 'Checkbox Text: {{ Text }}')
        );
    }
}