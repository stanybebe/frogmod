let articleImages = document.querySelectorAll(".article-main img");

articleImages.forEach((el) => {
  let figure = document.createElement("figure");
  let figCaption = document.createElement("figcaption");
  let caption = document.createTextNode(el.alt);
  el.parentNode.insertBefore(figure, el);
  figure.appendChild(el);
  figure.appendChild(figCaption);
  figCaption.appendChild(caption);
  //figure.classList.add("py-2");
  el.classList.add("w-full", "md:w-3/5");
  figCaption.classList.add("text-sm");
});
