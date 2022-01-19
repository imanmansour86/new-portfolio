new Glide(".glide").mount();

var glide = new Glide(".glide", {
  type: "carousel",
  perView: 4,
  focusAt: "center",
  gap: 10,
  breakpoints: {
    1000: {
      perView: 4,
    },
    480: {
      perView: 1,
    },
  },
});
