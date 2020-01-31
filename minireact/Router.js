
import GoogleSearchClass from '../components/google-search.js';
const GoogleSearch = new GoogleSearchClass();

export default class RouterClass {
    routes = [];
    constructor() {
        this.routes = [GoogleSearch];
    }
    
    Push(route) {
        this.routes.push(route);
        console.log(route);
    }

    View() {
        return this.routes[this.routes.length - 1];
    }
}