export default class MiniReactDOM {
    render(elem, DOMelem) {
        DOMelem.appendChild(elem);
    }

    newPage() {
        document.getElementById('root').innerHTML = '';
    }
}  