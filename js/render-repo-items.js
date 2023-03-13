import {getRepoItemTemplate} from './repo-item-template.js';
import {Insert} from './constants.js';
import {removeElement} from './utils.js';

const REPO_LIST_CLASS_NAME = 'main__list';
const NO_RESULT_CLASS_NAME = 'main__no-result';

const renderList = ({
  repoItems,
  resultRenderPlace,
}) => {
  const repoListTemplate = (`
    <ul class="${REPO_LIST_CLASS_NAME}">
      ${repoItems.map(getRepoItemTemplate).join('')}
    </ul>
  `);

  resultRenderPlace.insertAdjacentHTML(Insert.Append, repoListTemplate);
};

const renderNoResult = ({
  resultRenderPlace,
}) => {
  const noResultElement = `<p class="${NO_RESULT_CLASS_NAME}">Nothing found :(</p>`;

  resultRenderPlace.insertAdjacentHTML(Insert.Append, noResultElement);
};

const renderResult = ({
  repoItems,
  resultRenderPlace,
  resultTitle,
}) => {
  removeElement({
    className: REPO_LIST_CLASS_NAME,
    container: resultRenderPlace,
  });
  removeElement({
    className: NO_RESULT_CLASS_NAME,
    container: resultRenderPlace,
  });

  if (!repoItems.length) {
    renderNoResult({
      resultRenderPlace,
    });

    resultTitle.classList.add('hidden');
    return;
  }

  renderList({
    repoItems,
    resultRenderPlace,
  });

  resultTitle.classList.remove('hidden');
};

export {
  renderResult,
};
