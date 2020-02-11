Object.prototype.prop_access = function(str) {
    if(typeof str !== "string" || !str) return '';

    var newObj = this;
    var strSplit = str.split(".");
    strSplit.forEach(element => {
        newObj = newObj[element];
        if (!newObj) {
            console.error(str.substring(0, str.indexOf(element) + element.length) + " not exist");
        }
    });

    return newObj;
}

String.prototype.interpolate = function(obj) {
    var str = this;
    while(str.indexOf("{{") >= 0 && str.indexOf("}}") >= 0) {
        str = str.split("{{")[0] + obj.prop_access(str.split("{{")[1].split("}}")[0].trim()) + str.substr(str.indexOf("}}") + 2, str.length);
    } 
    return str
}

import MiniReactDOMClass from '/minireact/MiniReactDOM.js';
const MiniReactDOM = new MiniReactDOMClass();

var i = 0;
var eventClickToElem = [];

export default class MiniReact {
    constructor() {
        return this.render();
    }
    
    createElement(name, attributes) {
        let events = [];
        if (attributes !== null) {
            for (let [key, value] of Object.entries(attributes)) {
                if (key == "Click") {
                    eventClickToElem.push(value);
                    events.push(value);
                    delete attributes[key];
                }
            }
        }
        if (typeof name == 'string') {
            var elem = document.createElement(name);
            for (let i = 2; i<arguments.length; i++){
                if (typeof arguments[i] == "string") {
                    elem.appendChild(document.createTextNode(arguments[i]));
                } else {
                    elem.appendChild(arguments[i]);
                }
            }
            if (attributes !== null) {
                for (let [key, value] of Object.entries(attributes)) {
                    if (typeof value == "string") {
                        elem.setAttribute(key, value.interpolate(attributes));
                    }
                }
            }
        } else if (typeof name == 'object') {
            if (name.innerHTML) {
                name.innerHTML = name.innerHTML.interpolate(attributes);
            }
            var elem = name;
            for (let i = 2; i<arguments.length; i++){
                if (typeof arguments[i] == "string") {
                    elem.appendChild(document.createTextNode(arguments[i]));
                } else {
                    elem.appendChild(arguments[i]);
                }
            }
            if (attributes !== null) {
                for (let [key, value] of Object.entries(attributes)) {
                    if (typeof value == "string") {
                        elem.setAttribute(key, value.interpolate(attributes));
                    }
                }
            }
        }
        events.forEach(function () {
            elem.setAttribute('id', 'event-id-' + i);
            i++;
        });
        return elem;
    }

    addEvent() {
        eventClickToElem.forEach(function(element, index) {
            if (document.getElementById("event-id-" + index)) {
                document.getElementById("event-id-" + index).addEventListener("click", function () {
                    if (element.search("Router.push") >= 0) {
                        let str = element.split("('")[1].split("')")[0].trim();
                        let router = localStorage.getItem('router').split(',');
                        if (router[router.length - 1] != str) router.push(str);
                        localStorage.setItem('router', router);
                        document.location.reload(true);
                    } else if (element.search("Router.back") >= 0) {
                        let router = localStorage.getItem('router').split(',');
                        router.length -= 1;
                        localStorage.setItem('router', router);
                        document.location.reload(true);
                    } else {
                        eval(element);
                    }
                });
            }
        });
    }

    render() {}
}

