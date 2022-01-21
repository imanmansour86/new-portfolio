# Portfolio

## Introduction

This website is created to show My Portfolio. It has a header, hero text and image, projects preview container, and a footer. The website is built using Bootstrap and Glidejs. The description section under each project is retreived dynamically from GitHub API using fetch. The app features responsive layout on small devices using media queries.

## Projects Container

The projects container is built using Glidejs. It is a JavaScript ES6 slider and carousel. It’s designed to slide as a carousel or slider. In this portfolio carousel was used.

- Install latest npm

  `$ npm install @glidejs/glide`

- Link CDN

````<script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>
    <script src="assets/glide/glide.js"></script>```

- Add Style sheet
``
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css">
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css">
````

```new Glide(".glide", {
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
```

## Screenshots of the app

## Header

![Page Header](/images/header.png)

## Project card

![Page Header](/images/project.png)

## Footer

![Page Header](/images/footer.png)

## Responsive on Mobile

![Gif](/assets/responsive.gif)

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bootstap](https://getbootstrap.com/docs/4.2/getting-started/introduction/)
- [JQuery](https://jquery.com/)
- [Glidejs](https://glidejs.com/)
- [GitHub API](https://docs.github.com/en/rest)

## Resources Used

- [W3schools](https://www.w3schools.com)
- [stackoverflow](https://stackoverflow.com)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Links

- [Deployed application](https://imanmansour86.github.io/new-portfolio/)

## Author

Iman Mansour

- [Portfolio](https://imanmansour86.github.io/new-portfolio/)
- [Github](https://github.com/imanmansour86)
- [LinkedIn](https://www.linkedin.com/in/iman-mansour-51391515/)
- [Email](mailto:imanmansour86@gmail.com)

## License

[MIT Open Source Software](https://choosealicense.com/licenses/mit/)

```

```
