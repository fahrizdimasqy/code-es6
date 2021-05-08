class ImageFigure extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;
        this.render();
    }
    /*Setelah mengubah nilainya lalu kita panggil fungsi render(). Perhatikan juga bahwa
kita perlu memisahkan kode rendering HTML di browser pada fungsi yang terpisah
(tidak dilakukan di connectedCallback). Tujuannya agar kita dapat memanggil
fungsi tersebut tidak hanya sekali tapi setiap kali terdapat perubahan data.
*/
    render() {
        this.innerHTML = `<figure>
            <img src="${this.src}" alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
        </figure>`;
    }
    /*u. Di dalam
fungsi attributeChangedCallback(), kita tuliskan kode untuk mengubah nilai
properti this[name] dengan nilai baru yang ditetapkan. this[name] ini merupakan
cara dinamis untuk mengubah nilai properti sesuai dengan nama atribut yang
diubah. Misalkan jika kita mengubah atribut “caption” maka akan mengubah
nilai this[“caption”], jika kita mengubah atribut “alt” maka akan mengubah
nilai this[“alt”].
*/
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }
    /*Lalu terdapat juga static get observedAttributes(). Apa fungsinya?
Fungsi getter statis ini berperan sebagai “seseorang” yang mengamati perubahan
nilai pada atribut yang ditentukan. Jika terjadi perubahan, ia akan
memanggil attributeChangedCallback dengan memberitahu nama atribut apa yang
berubah, nilai sebelum perubahan, serta nilai baru yang akan
ditetapkan. observedAttributestidak akan mengamati seluruh atribut yang
diterapkan pada custom element, hanya atribut yang dituliskan pada nilai
kembaliannya yang akan diamati.*/
    static get observedAttributes() {
        return ["caption"];
    }

}
customElements.define("image-figure", ImageFigure);