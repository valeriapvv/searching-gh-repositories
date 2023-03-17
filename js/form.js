import {send} from './api.js';
import {renderResult} from './render-repo-items.js';

const form = document.querySelector('#search-form');
const searchField = form['search'];
const submitButton = form.querySelector('[type="submit"]');

const SubmitText = {
  Default: 'Find',
  Send: 'Wait...',
};

const disableForm = () => {
  searchField.disabled = true;
  submitButton.disabled = true;
  submitButton.textContent = SubmitText.Send;
};

const enableForm = () => {
  searchField.disabled = false;
  submitButton.disabled = false;
  submitButton.textContent = SubmitText.Default;
};

const initForm = ({
  urlEndPoint,
  resultsCount,
  resultRenderPlace,
  resultTitle,
}) => {
  const onSuccess = (data) => {
    const repoItems = data.items?.slice(0, resultsCount) || [];

    renderResult({
      repoItems,
      resultRenderPlace,
      resultTitle,
    });

    form.reset();
  };

  const onFail = (error) => {
    // eslint-disable-next-line no-alert
    alert(error);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const searchString = searchField.value;

    send({
      urlEndPoint,
      searchString,
      onSuccess,
      onFail,
      onFinal: enableForm,
    });

    disableForm();
  };

  form.addEventListener('submit', onSubmit);
};

export {
  initForm,
};
