new Glide(".glide").mount(); //mount the glide
new Glide(".glide", {
  type: "carousel",
  startAt: 1,
  gap: 0,
  perView: 3,
});

//store reference for each li in glide
let firstRepo = $(".first");
let secondRepo = $(".second");
let thirdRepo = $(".third");
let fourthRepo = $(".fourth");

// read all starred repos from git
const allRepos = () => {
  var apiUrl = " https://api.github.com/users/imanmansour86/starred";

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getReadMe(data);
    });
};

const getReadMe = (result) => {
  console.log("results is", result);
  // for each starred repo get the repo description
  for (i in result) {
    firstElement = `<div class="details"><p>${result[3].description}<p><div>`;
    secondElement = `<div class="details"><p>${result[2].description}<p><div>`;
    thirdElement = `<div class="details" ><p>${result[0].description}<p><div>`;
    fourthElement = `<div class="details"><p>${result[1].description}<p><div>`;
  }

  //append description to each lit
  firstRepo.append(firstElement);
  secondRepo.append(secondElement);
  thirdRepo.append(thirdElement);
  fourthRepo.append(fourthElement);
};

allRepos();
