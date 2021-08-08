const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = [...data];
                 this.render()
            });
    }
   
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    calcSum(){
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

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductList();

class Cart{
    constructor(container = '.product_in_cart'){
        this.container = container;
        this.goods = [];

        this.clickCart();

        this.getCartItem()
        .then(data =>{
            this.goods = [...data.contents];
            this.render();
        })
    }

    getCartItem(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
   
    render(){
            const block = document.querySelector(this.container);
            for (let product of this.goods){
                const productObj = new CartItem();
                
                block.insertAdjacentHTML('beforeend', productObj.render(product));
            }
        }

    clickCart(){
            document.querySelector(".btn-cart").addEventListener('click', () =>{
                document.querySelector(this.container).classList.toggle("invisible");
            }) }

}

class CartItem{
        render(product) {
            return `<div class = cart_item>
                        <p>${product.product_name}</p>
                        <p>${product.quantity}</p>
                        <p>$${product.price}</p>
                        <p>$${product.quantity * product.price}</p>
                    </div>`
    }
}

let basket = new Cart();