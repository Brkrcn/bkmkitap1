<template>
    <client-only>
        <div class="col-lg-6 col-md-6">
            <div class="products-page-gallery">
                <div class="product-page-gallery-main">
                    <vueper-slides
                        :bullets = "false"
                    >
                        <vueper-slide
                            v-for="(img, i) in images"
                            :key="i"
                            :image="img.image" />
                    </vueper-slides>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    data(){
        return{
            images: [
                {
                    id: 1,
                    image: require('../../assets/img/kitap-1.jpg')
                },
                {
                    id: 2,
                    image: require('../../assets/img/kitap-2.jpg')
                },
                {
                    id: 3,
                    image: require('../../assets/img/kitap-3.png')
                },
                {
                    id: 4,
                    image: require('../../assets/img/kitap-4.jpg')
                },
                {
                    id: 5,
                    image: require('../../assets/img/kitap-5.jpg')
                },
                {
                    id: 7,
                    image: require('../../assets/img/kitap-6.jpg')
                },
                {
                    id: 8,
                    image: require('../../assets/img/kitap-7.jpg')
                },
            ]
        }
    }
}
</script>