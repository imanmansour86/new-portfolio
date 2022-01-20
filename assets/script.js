new Glide(".glide").mount();
new Glide(".glide", {
  type: "carousel",
  startAt: 1,
  gap: 0,
  perView: 3,
});

let first = $(".first");
let singleObject;

// read all repos from git
const allRepos = () => {
  var apiUrl = " https://api.github.com/users/imanmansour86/starred"; //get starred repos

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getReadMe(data);
    });
};
let newElement;
function getReadMe(result) {
  console.log("results is", result);
  for (i in result) {
    newElement = `<div><p>${result[3].description}<p><div>`;
  }
  first.append(newElement);
}

allRepos();
