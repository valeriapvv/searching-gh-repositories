import {initForm} from './form.js';

const urlEndPoint = 'https://api.github.com/search/repositories';

const RESULTS_COUNT = 10;

const resultRenderPlace = document.querySelector('.main__results');
const resultTitle = resultRenderPlace.querySelector('.main__results-heading');

initForm({
  urlEndPoint,
  resultsCount: RESULTS_COUNT,
  resultRenderPlace,
  resultTitle,
});
