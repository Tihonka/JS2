<<<<<<< Updated upstream
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
=======
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        cartItems: [],
        products: [],
        filtered: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        addProduct(item){
            this.getJson(`${API}/addToBasket.json`)
            .then(data =>{
                if(data.result === 1){
                    let find = this.cartItems.find(el => el.id_product === item.id_product);
                    if (find){
                        find.quantity++;
                    }else{
                        const prod = Object.assign( {quantity: 1}, item);
                        this.cartItems.push(prod)
                    }
                }
            })
        },

        remove(item){
            this.getJson(`${API}/addToBasket.json`)
            .then(data =>{
                if(data.result ===1){
                     if(item.quantity > 1){
                         item.quantity--;
                     }else{
                         this.cartItems.splice(this.cartItems.indexOf(item), 1);
                    }
                 }
            })
        },

        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.getJson(`{API + this.cartUrl}`)
        .then(data =>{
            for (let item of data.contents){
                this.cartItems.push(item);
            }
        });
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filtered.push(el);
               }
           });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
    }
})

// class ProductList{
//     constructor(container='.products'){
//         this.container = container;
//         this.goods = [];
//         this._getProducts()
//             .then(data => { //data - объект js
//                  this.goods = [...data];
//                  this.render()
//             });
//     }
   
//     _getProducts(){
      
//         return fetch(`${API}/catalogData.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             })
//     }

//     calcSum(){
//         let s = 0;
//         this.goods.forEach(item => s += item.price);
//         console.log(s);
//     }
    
//     render(){
//         const block = document.querySelector(this.container);
//         for(let product of this.goods){
//             const item = new ProductItem(product);
//              block.insertAdjacentHTML("beforeend",item.render());
//         }
//     }
// }

// class ProductItem {
//     constructor(product, img = 'https://via.placeholder.com/200x150'){
//         this.title = product.product_name;
//         this.price = product.price;
//         this.id = product.id_product;
//         this.img = img;
//     }
//     render(){
//         return `<div class="product-item" data-id="${this.id}">
//                 <img src="${this.img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${this.title}</h3>
//                     <p>${this.price} $</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`
//     }
// }

// let list = new ProductList();

// class Cart{
//     constructor(container = '.product_in_cart'){
//         this.container = container;
//         this.goods = [];

//         this.clickCart();

//         this.getCartItem()
//         .then(data =>{
//             this.goods = [...data.contents];
//             this.render();
//         })
//     }

//     getCartItem(){
//         return fetch(`${API}/getBasket.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             })
//     }
   
//     render(){
//             const block = document.querySelector(this.container);
//             for (let product of this.goods){
//                 const productObj = new CartItem();
                
//                 block.insertAdjacentHTML('beforeend', productObj.render(product));
//             }
//         }

//     clickCart(){
//             document.querySelector(".btn-cart").addEventListener('click', () =>{
//                 document.querySelector(this.container).classList.toggle("invisible");
//             }) }

// }

// class CartItem{
//         render(product) {
//             return `<div class = cart_item>
//                         <p>${product.product_name}</p>
//                         <p>${product.quantity}</p>
//                         <p>$${product.price}</p>
//                         <p>$${product.quantity * product.price}</p>
//                     </div>`
//     }
// }

// let basket = new Cart();
>>>>>>> Stashed changes
