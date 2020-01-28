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

//CHANGER PAR UN REPLACE AVEC REGEX
String.prototype.interpolate = function(obj) {
    var str = this;
    while(str.indexOf("{{") >= 0 && str.indexOf("}}") >= 0) {
        str = str.split("{{")[0] + obj.prop_access(str.split("{{")[1].split("}}")[0].trim()) + str.substr(str.indexOf("}}") + 2, str.length);
    } 
    return str
}

export default class MiniReact {
    constructor() {
        return this.render();
    }
    
    createElement(name, attributes) {
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
            return elem;
        } else if (typeof name == 'object') {
            name.innerHTML = name.innerHTML.interpolate(attributes);
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
            return elem;
        }
    }

    render() {}
}