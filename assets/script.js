new Glide(".glide"), {}.mount();

var glide = new Glide(".glide", {
  type: "carousel",
  perView: 4,
  focusAt: "center",
  gap: 40,
  breakpoints: {
    1000: {
      perView: 2,
    },
    480: {
      perView: 1,
    },
  },
});
