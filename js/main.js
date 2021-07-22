const products = [
    {id: 1, title: 'Notebook', price: 2000, image: "image/notebook.jpg"},
    {id: 2, title: 'Mouse', price: 20, image: "image/mouse.jpg"},
    {id: 3, title: 'Keyboard', price: 200, image: "image/keyboard.jpg"},
    {id: 4, title: 'Gamepad', price: 50, image: "image/gamepad.jpg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img src="${item.image}">
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
      document.querySelector('.products').innerHTML = list.map(item =>
         renderProduct(item)).join('');
   };

renderPage(products);