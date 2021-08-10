Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `<div class="product_in_cart" v-show="visibility">
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item">
    </cart-item>
        </div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: ` <div class=cart_item>
                        <p>{{ cartItem.product_name }}</p>
                        <p>{{ cartItem.quantity }}</p>
                        <p>$ {{ cartItem.price }}</p>
                        <p>{{ cartItem.quantity*cartItem.price }}</p>
                        <button class="del" @click="$parent.$emit('remove', cartItem)">&times;</button>
                    </div>`
})