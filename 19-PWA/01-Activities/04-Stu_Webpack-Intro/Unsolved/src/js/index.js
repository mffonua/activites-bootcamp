// TODO: Add a comment explaining role of the index.js file and import statements

//imports box/header click function as a dependency into entry point
import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
