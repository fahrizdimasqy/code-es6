// let imageFigureElement = document.querySelector("image-figure");

// // jika tidak tersedia pada dom maka dibuat secara sintaksis

// if (!imageFigureElement) {
//     imageFigureElement = document.createElement("image-figure");
//     document.body.appendChild(imageFigureElement)
// }

// // mengubah/menamabah nilai attribute caption
// setTimeout(() => {
//     imageFigureElement.setAttribute("caption", "Gambar 1")
// }, 1000);

// setTimeout(() => {
//     imageFigureElement.remove()
// }, 3000);
// Membuat element secara sintaksis jika element tidak terdapat pada DOM
if (!document.querySelector("image-figure")) {
  const imageFigureElement = document.createElement("image-figure");

  imageFigureElement.setAttribute("src", "https://i.imgur.com/iJq78XH.jpg");
  imageFigureElement.setAttribute("alt", "Dicoding Logo");
  imageFigureElement.setAttribute("caption", "Huruf g dalam logo Dicoding");

  document.body.appendChild(imageFigureElement);
}
