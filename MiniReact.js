Object.prototype.prop_access = function(str) {
    if(typeof str !== "string" || !str) return '';

    let newObj = this, returnValue = '';
    let strSplit = str.split(".");
    strSplit.forEach(element => {
        if (!returnValue) {
            newObj = newObj[element];
            if (!newObj) {
                console.error(str.substring(0, str.indexOf(element) + element.length) + " not exist");
            }
        }
    });

    if (returnValue) {
        return returnValue;
    } else {
        return newObj;
    }
}


//CHANGER PAR UN REPLACE AVEC REGEX
String.prototype.interpolate = function(obj) {
    let str = this;
    let newObj = [];
    while(str.indexOf("{{") >= 0 && str.indexOf("}}") >= 0) {
        newObj.push(str.split("{{")[1].split("}}")[0].trim());
        str = str.split("{{")[0] + obj.prop_access(str.split("{{")[1].split("}}")[0].trim()) + str.substr(str.indexOf("}}") + 2, str.length);
    } 
    let response = {
        newObj: newObj,
        str: str
    }
    return response
}

export default class MiniReact {
    constructor() {
        return this.render();
    }
    
    createElement(name, attributes) {
        if (typeof name == 'string') {
            let elem = document.createElement(name);
            for (let i = 2; i<arguments.length; i++){
                if (typeof arguments[i] == "string") {
                    elem.appendChild(document.createTextNode(arguments[i]));
                } else {
                    elem.appendChild(arguments[i]);
                }
            } 
            for (let [key, value] of Object.entries(attributes)) {
                elem.setAttribute(key, value);
            }
            return elem;
        } else if (typeof name == 'object') {
            let newName = name.innerHTML.interpolate(attributes);
            name.innerHTML = newName.str;
            let elem = name;
            for (let i = 2; i<arguments.length; i++){
                if (typeof arguments[i] == "string") {
                    elem.appendChild(document.createTextNode(arguments[i]));
                } else {
                    elem.appendChild(arguments[i]);
                }
            } 
            for (let [key, value] of Object.entries(attributes)) {
                if (newName.newObj.indexOf(key) < 0) {
                    elem.setAttribute(key, value);
                }
            }
            return elem;
        }
    }

    render() {}
}