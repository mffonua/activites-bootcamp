var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'https://api.github.com/users/EsotericZ/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var link = document.createElement('a');
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        link.href = data[i].html_url;
        repoList.appendChild(link);
        link.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);
