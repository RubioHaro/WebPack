import './styles.css';
import {messages} from './message.js';
import RubioHaro from './RubioHaro.png'

document.write('<br>');
messages.errorMessage();

const imgRubioHaro = document.createElement('img');
imgRubioHaro.setAttribute('src', RubioHaro);
document.body.append(imgRubioHaro);

console.log('hola mundo');