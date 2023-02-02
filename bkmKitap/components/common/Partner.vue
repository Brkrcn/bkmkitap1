<template>
    <client-only>
        <!-- Start Partner Area -->
        <div class="partner-area">
            <div class="container">
                <hr style="padding-bottom: 10px;">
                <div class="partner-slides owl-carousel owl-theme">
                    <carousel
                        :loop = true
                        :autoplay = true
                        :autoplayTimeout = 1000
                        :paginationEnabled = false
                        :perPageCustom = "[[0, 2], [768, 4], [1200, 6]]"
                        :speed = 5000
                    >
                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/icon1.svg" alt="image"></a>
                                <span style="padding-top: 10px;">Top 100</span>
                            </div>
                        </slide>

                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/icon2.svg" alt="image"></a>
                                <span>Manga</span>
                            </div>
                        </slide>

                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/icon3.svg" alt="image"></a>
                                <span>Bilim Kurgu</span>
                            </div>
                        </slide>

                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/icon4.svg" alt="image"></a>
                                <span>Harry Poter</span>
                            </div>
                        </slide>

                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/icon5.svg" alt="image"></a>
                                <span>Suç ve Gizem</span>
                            </div>
                        </slide>
                        
                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/icon6.svg" alt="image"></a>
                                <span>Fantestik</span>
                            </div>
                        </slide>
                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/icon7.svg" alt="image"></a>
                                <span>Defter</span>
                            </div>
                        </slide>
                        <slide>
                            <div class="partner-item">
                                <a href="#" target="_blank"><img src="../../assets/img/icon8.svg" alt="image"></a>
                                <span>Aksesuar</span>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <hr>
            </div>
        </div>
        <!-- End Partner Area -->
    </client-only>
</template>