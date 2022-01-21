//mount the glide
new Glide(".glide", {
  type: "carousel",
  perView: 1,
  focusAt: "center",
  breakpoints: {
    800: {
      perView: 1,
    },
    480: {
      perView: 1,
    },
  },
}).mount();

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
    firstElement = `<div class="details">${result[3].description}<div>`;
    secondElement = `<div class="details">${result[2].description}<div>`;
    thirdElement = `<div class="details" >${result[0].description}<div>`;
    fourthElement = `<div class="details">${result[1].description}<div>`;
  }

  //append description to each lit
  firstRepo.append(firstElement);
  secondRepo.append(secondElement);
  thirdRepo.append(thirdElement);
  fourthRepo.append(fourthElement);
};

allRepos();
