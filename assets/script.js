console.log("test");
new Glide(".glide").mount();
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
});
