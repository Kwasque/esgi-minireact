import MiniReactClass from './minireact/MiniReact.js';
const MiniReact = new MiniReactClass;

import MiniReactDOMClass from './minireact/MiniReactDOM.js';
const MiniReactDOM = new MiniReactDOMClass();

import GoogleClass from '../components/google.js'
const Google = new GoogleClass();

import YoutubeClass from '../components/youtube.js'
const Youtube = new YoutubeClass();

import PexelsClass from '../components/pexels.js'
const Pexels = new PexelsClass();

import MapsClass from '../components/maps.js'
const Maps = new MapsClass();

let router = localStorage.getItem('router');
if (!router) { 
    router = ["Google"];
    localStorage.setItem('router', router);
} else {
    router = router.split(',');
}

class MainClass extends MiniReactClass {
    render() {
        return (
            eval(router[router.length - 1])
        );
    }
}
const Main = new MainClass();

MiniReactDOM.render(Main, document.getElementById('root'));
MiniReact.addEvent();