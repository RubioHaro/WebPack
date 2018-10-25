import '../css/styles.css';
import {messages} from './message.js';
import RubioHaro from '../img/RubioHaro.png';
import Video from '../video/Ale&Roy.mp4';

document.write('Rubio Haro Rodrigo <br>');
messages.errorMessage();

const imgRubioHaro = document.createElement('img');
imgRubioHaro.setAttribute('src', RubioHaro);
document.body.append(imgRubioHaro);

const video = document.createElement('video');
video.setAttribute('src', Video);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
document.body.append(video);

console.log('hola mundo');