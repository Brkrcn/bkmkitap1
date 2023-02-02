<template>
    <div>
        <!-- Start All Products Area -->
        <section class="all-products-area pb-60">
            <div class="container">
         
                <div class="col-lg-12 col-md-12">
                    <ul class="top-header-nav" style="padding-bottom: 13px;font-weight: 800;">
                        <li style="padding-left: 61px;">
                            <a href="#" class="" style="font-size: 17px;font-weight: 800;">Çok Satan</a>
                        </li>
                        <li style="padding-left: 188px;">
                            <a href="#" class="" style="font-size: 17px;font-weight: 800;">Yeni Çıkan</a>
                        </li> 
                        <li style="padding-left: 170px;">
                            <a href="#" class="" style="font-size: 17px;font-weight: 800;">Okula Yardımcı</a>
                        </li> 
                        <li style="padding-left: 192px;">
                            <a href="#" class="" style="font-size: 17px;font-weight: 800;">Vitrin</a>
                        </li> 

                     
                    </ul></div>

                <div class="row">

                    <ProductItem
                        v-for="(product, index) in products"
                        :product="product"
                        :key="index"
                        @clicked="toggle"
                        :className="`col-lg-3 col-md-6 col-sm-6`"
                    ></ProductItem>
                    
                </div>
            </div>
        </section>
        <!-- End all Products Area -->
        <QuckView />
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
import ProductItem from './ProductItem';
export default {
    components: {
        QuckView,
        ProductItem
    },
    methods: {
        toggle() {
            mutations.toggleQuickView();
        }
    },
    computed: {
        products(){
            return this.$store.state.products.all.filter(product => product.latest === true)
        }
    },
}
</script>