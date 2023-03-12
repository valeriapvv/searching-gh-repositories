import {send} from './api.js';

const urlEndPoint = 'https://api.github.com/search/repositories';
const searchString = 'myrepo';

const RESULTS_COUNT = 10;

const onSuccess = (data) => {
  data.items.slice(0 , RESULTS_COUNT)
    .forEach((repo) => {
      console.log(repo);
    });
};

const onFail = (error) => {
  alert(error);
};

send({
  urlEndPoint,
  searchString,
  onSuccess,
  onFail,
});

