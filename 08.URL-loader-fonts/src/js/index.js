import '../css/styles.css';
import {messages} from './message.js';
import RubioHaro from '../img/RubioHaro.png'

document.write('Rubio Haro Rodrigo <br>');
messages.errorMessage();

const imgRubioHaro = document.createElement('img');
imgRubioHaro.setAttribute('src', RubioHaro);
document.body.append(imgRubioHaro);

console.log('hola mundo');