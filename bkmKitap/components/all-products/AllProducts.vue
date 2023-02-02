<template>
    <div class="col-lg-8 col-md-12">


        <div id="products-filter" class="products-collections-listing row">
            <ProductItem
                v-for="(product, index) in products"
                :product="product"
                :key="index"
                @clicked="toggle"
                :className="`col-lg-6 col-md-6 products-col-item`"
            ></ProductItem>
            
        </div>

        <nav class="woocommerce-pagination">
            <ul>
                <li><a href="#" class="page-numbers">1</a></li>
                <li><span class="page-numbers current">2</span></li>
                <li><a href="#" class="page-numbers">3</a></li>
                <li><a href="#" class="page-numbers">4</a></li>
                <li><span class="page-numbers dots">…</span></li>
                <li><a href="#" class="page-numbers">11</a></li>
                <li><a href="#" class="page-numbers">12</a></li>
                <li><a href="#" class="next page-numbers"><i class="fas fa-chevron-right"></i></a></li>
            </ul>
        </nav>

        <QuckView />
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
import ProductItem from '../landing-one/ProductItem';
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
            return this.$store.state.products.all
        }
    },
}
</script>