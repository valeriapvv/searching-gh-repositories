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

const logData = (items) => {
  for (const item of items) {
    console.log(item);
  }
};

const initForm = ({
  urlEndPoint,
  resultsCount,
  send,
}) => {
  const onSuccess = (data) => {
    const repoItems = data.items.slice(0 , resultsCount);

    if (!repoItems || !repoItems.length) {
      alert('No results found');
      return;
    }

    logData(repoItems);

    form.reset();
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const searchString = searchField.value;

    send({
      urlEndPoint,
      searchString,
      onSuccess,
      onFail: alert,
      onFinal: enableForm,
    });

    disableForm();
  };

  form.addEventListener('submit', onSubmit);
};

export {
  initForm,
};
