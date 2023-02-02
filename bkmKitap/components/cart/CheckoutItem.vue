<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Anasayfa</nuxt-link></li>
                    <li>Sepetiniz</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Checkout Area -->
		<section class="checkout-area ptb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="user-actions">
                            <i class="fas fa-sign-in-alt"></i>
                            <span>Alışverişe devam et <nuxt-link to="/login">Giriş yapmak için buraya tıklayın</nuxt-link></span>
                        </div>
                    </div>
                </div>

                <form>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="billing-details">
                                <h3 class="title">Fatura Detayları</h3>

                                <div class="row">
                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Adınız <span class="required">*</span></label>
                                            <input type="text" id="fullName" v-model="personDetails.fullName" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Adres <span class="required">*</span></label>
                                            <input type="text" id="address" v-model="personDetails.address" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>İl / İlce <span class="required">*</span></label>
                                            <input type="text" id="city" v-model="personDetails.city" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Email Adres <span class="required">*</span></label>
                                            <input type="email" id="email" v-model="personDetails.email" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Telefon <span class="required">*</span></label>
                                            <input type="text" id="phone" v-model="personDetails.phone" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="order-details">
                                <h3 class="title">Siparişiniz</h3>

                                <div class="order-table table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Ürün Adı</th>
                                                <th scope="col">Toplam</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr v-for="(cart, i) in cart" :key="i">
                                                <td class="product-name">
                                                    <a href="#">{{cart.name}}</a>
                                                </td>

                                                <td class="product-total">
                                                    <span class="subtotal-amount">{{cart.price * cart.quantity}}₺</span>
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <td class="order-subtotal">
                                                    <span>Sepet Ara Toplamı</span>
                                                </td>

                                                <td class="order-subtotal-price">
                                                    <span class="order-subtotal-amount">${{cartTotal}}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="order-shipping">
                                                    <span>Kargo</span>
                                                </td>

                                                <td class="shipping-price">
                                                    <span>10.00₺</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="total-price">
                                                    <span>Sipariş toplamı</span>
                                                </td>

                                                <td class="product-subtotal">
                                                    <span class="subtotal-amount">{{parseFloat(cartTotal + 10).toFixed(2)}}₺</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="payment-method">
                                    <p>
                                        <input type="radio" id="direct-bank-transfer" name="radio-group" checked>
                                        <label for="direct-bank-transfer">Havale EFT</label>

                                        Ödemenizi doğrudan banka hesabımıza yapın. Lütfen ödeme referansı olarak dekont paylaşın. Paranız hesabımıza geçene kadar siparişiniz kargoya verilmeyecektir.
                                    </p>
                                    <p>
                                        <input type="radio" id="paypal" name="radio-group">
                                        <label for="paypal">iyzico</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="cash-on-delivery" name="radio-group">
                                        <label for="cash-on-delivery">Kapıda ödeme</label>
                                    </p>
                                </div>

                                <a href="javascript:void(0)" @click="add" class="btn btn-primary order-btn">Şiparişi Tamamla</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
		<!-- End Checkout Area -->
    </div>
</template>

<script >
import firebase from '../../plugins/firebase';
export default {
    data(){
        return{
            personDetails: {
                fullName: 'Turgay bkmKitap', 
                address: 'Barış, Adakent Cd. No:51, 34520 Beylikdüzü/İstanbul',
                city: 'İstanbul / Beylikdüzü',
                email: 'turgay@gmail.com',
                phone: '+95442158756',
                createdAt: new Date()
            }
        }
    },
    computed: {
        cart(){
            return this.$store.getters.cart
        },
        cartTotal(){
            return this.$store.getters.totalAmount
        }
    }, 
    methods: {
        add(){
            const cartData = {
                details: this.personDetails,
                items: this.cart
            }
            const db = firebase.firestore();
            const dbOrderRef = db.collection('orders');
            dbOrderRef.add(cartData);
            this.$toast.success(`Şiparişiniz Alındı`, {
                icon: 'fas fa-cart-plus'
            });
            this.$store.dispatch('cartEmpty')
            this.$router.push("/");
        }
    }
}
</script>