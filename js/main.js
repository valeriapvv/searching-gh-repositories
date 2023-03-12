import {initForm} from './form.js';
import {send} from './api.js';


const urlEndPoint = 'https://api.github.com/search/repositories';

const RESULTS_COUNT = 10;

initForm({
  urlEndPoint,
  resultsCount: RESULTS_COUNT,
  send,
});
