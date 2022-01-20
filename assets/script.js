console.log("test");
new Glide(".glide").mount();
new Glide(".glide", {
  type: "carousel",
  startAt: 1,
  gap: 0,
  perView: 3,
});
