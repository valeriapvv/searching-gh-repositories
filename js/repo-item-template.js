const EMPTY_VALUE_STRING = '&mdash;';

const getRepoItemTemplate = (repoItem = {}) => {
  const {
    name,
    html_url: repoUrl,
    id,
    language,
    description,
    owner,
  } = repoItem;

  const {
    login,
    avatar_url: avatarUrl,
    html_url: ownerUrl,
  } = owner;

  return (`
    <li class="main__item repo">
      <h3 class="repo__name">
        <a class="repo__link" href="${repoUrl}" target="_blank">${name}</a>
      </h3>

      <dl class="repo__info">
        <div class="repo__content">
          <dt class="repo__caption">ID</dt>
          <dd class="repo__text">${id}</dd>
        </div>

        <div class="repo__content">
          <dt class="repo__caption">Language</dt>
          <dd class="repo__text">${language || EMPTY_VALUE_STRING}</dd>
        </div>

        <div class="repo__content">
          <dt class="repo__caption repo__caption--align-center">Owner</dt>
          <dd class="repo__text">
            <a class="owner" href="${ownerUrl}" target="_blank">
              <img class="owner__avatar" src="${avatarUrl}" width="42" height="42"
                alt="Owner's avatar.">
              ${login}
            </a>
          </dd>
        </div>

        <div class="repo__content repo__content--row">
          <dt class="repo__caption">Description</dt>
          <dd class="repo__text">${description || EMPTY_VALUE_STRING}</dd>
        </div>
      </dl>
    </li>
  `);
};

export {
  getRepoItemTemplate,
};
