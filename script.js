console.log('test')
import Block from './src/block.js';

const block = new Block('foo', 'bar', 'zoo', 'baz');
console.log(block.toString())

const textarea = document.getElementById('textarea')

textarea.innerText = block.toString()