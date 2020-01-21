import MiniReact from './MiniReact.js';
const MiniReactObj = new MiniReact();

import MiniReactDOM from './MiniReactDOM.js';
const MiniReactDOMObj = new MiniReactDOM();

import ButtonClass from './button.js';
const Button = new ButtonClass();

import CheckBoxClass from './checkbox.js';
const CheckBox = new CheckBoxClass();

import TextAreaClass from './textarea.js';
const TextArea = new TextAreaClass();

class MainClass extends MiniReact {
    render() {
        return (
            MiniReactObj.createElement('div', {class: "class-test"}, 
                MiniReactObj.createElement('h1', {}, "Contacts"),
                MiniReactObj.createElement('ul', {},
                    MiniReactObj.createElement('li', {},
                        MiniReactObj.createElement('h2', {onClick: 'console.log("test");'}, "James Nelson"),
                        MiniReactObj.createElement('a', {href: 'mailto:james@jamesknelson.com'})
                    ),
                    MiniReactObj.createElement('li', {},
                        MiniReactObj.createElement(CheckBox, {Text: "Checkbox Text", Test2: "qsdq"})
                    ),
                    MiniReactObj.createElement('li', {},
                        MiniReactObj.createElement(Button, {Text: 'Text du button', Text2: 'Text2 du button', onClick: 'console.log("test");'})
                    ),
                    MiniReactObj.createElement('li', {},
                        MiniReactObj.createElement(TextArea, {Text: 'Text area text personnalisé'})
                    ),
                    MiniReactObj.createElement('li', {},
                        MiniReactObj.createElement('h2', {}, "Joe Citizen"),
                        MiniReactObj.createElement('a', {href: 'mailto:joe@example.com'}, 'joe@example.com')
                    )
                )
            )
        );
    }
}
const Main = new MainClass();

MiniReactDOMObj.render(Main, document.getElementById('root'));