const repoName = 'myrepo';

const query = `q=${encodeURIComponent(`${repoName} in:name`)}`;

fetch(`https://api.github.com/search/repositories?${query}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.items.slice(0, 10).forEach((element) => {
      console.log(element);
    });
  });
