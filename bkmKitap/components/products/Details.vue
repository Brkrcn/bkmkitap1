<template>
    <div class="col-lg-6 col-md-6">
        <div class="product-details-content">
            <h3>{{name}}</h3>

            <div class="price">
                <span class="new-price">{{price}}₺</span>
            </div>



         


            

            <div class="product-add-to-cart">
                <div class="input-counter">
                    <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                    {{quantity}}
                    <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
                </div>

                <button v-if="getExistPId" type="submit" class="btn btn-danger" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Eklendi
                </button>

                <button v-else type="submit" class="btn btn-primary" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Sepete Ekle
                </button>
            </div>

          

    
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            getExistPId: false,
            quantity: 1
        }
    },
    props: ['id', 'name', 'price', 'image' ],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        addToCart(){
            const product = [{
                id: this.id,
                name: this.name,
                price: this.price,
                image: this.image,
                quantity: this.quantity
            }]

            if(this.cart.length > 0){
                let id = this.id 
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Sepete Eklendi", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id, unit: 1, cart: this.cart
                    });
                    this.getExistPId = true
                    this.$toast.info("Zaten sepete eklendi");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Sepete Eklendi",{
                    icon: 'fas fa-cart-plus'
                });
            }
        },
        increaseQuantity(){
            if(this.quantity > 9){
                this.$toast("10'dan fazla eklenemez",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity++
            }
        },
        decreaseQuantity() {
            if(this.quantity < 2){
                this.$toast("1'den az eklenemez",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity--;
            }
        },
    }
}
</script>