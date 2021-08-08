class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
        this.getSum();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, image: "image/notebook.jpg"},
            {id: 2, title: 'Mouse', price: 20, image: "image/mouse.jpg"},
            {id: 3, title: 'Keyboard', price: 200, image: "image/keyboard.jpg"},
            {id: 4, title: 'Gamepad', price: 50, image: "image/gamepad.jpg"},
        ];
    }

    getSum(){
        let s = 0;
        this.goods.forEach(item => s += item.price);
        console.log(s);
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.image;
    }
    render(){
           return `<div class="product-item">
            <h3>${this.title}</h3>
            <img src="${this.img}">
            <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

class Cart{
   
    addProduct(){

    }
    deleteProduct(){

    }
    getSum(){ //Итого в корзине

    }
    render(){

    }

}

class CartItem{
        render(){

    }
}



// const products = [
//     {id: 1, title: 'Notebook', price: 2000, image: "image/notebook.jpg"},
//     {id: 2, title: 'Mouse', price: 20, image: "image/mouse.jpg"},
//     {id: 3, title: 'Keyboard', price: 200, image: "image/keyboard.jpg"},
//     {id: 4, title: 'Gamepad', price: 50, image: "image/gamepad.jpg"},
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (item) => {
//     return `<div class="product-item">
//                 <h3>${item.title}</h3>
//                 <img src="${item.image}">
//                 <p>${item.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//       document.querySelector('.products').innerHTML = list.map(item =>
//          renderProduct(item)).join('');
//    };

// renderPage(products);