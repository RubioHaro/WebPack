import '../css/styles.css';
import RubioHaro from '../img/RubioHaro.png';
import data from './persons.json';

import React from 'react';
import {render} from 'react-dom';
import Persons from './components/persons';



render(<Persons data={data}/>, document.getElementById('container'));


document.write('Rubio Haro Rodrigo <br>');
console.log(data);


const imgRubioHaro = document.createElement('img');
imgRubioHaro.setAttribute('src', RubioHaro);
document.body.append(imgRubioHaro);

console.log('hola mundo');