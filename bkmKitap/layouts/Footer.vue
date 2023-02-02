<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <nuxt-link to="/"><img src="../assets/img/logo.png" alt="logo"></nuxt-link>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Hızlı linkler</h3>

                        <ul class="quick-links">
              
                            <li><nuxt-link to="/cart">Sepet</nuxt-link></li>
                            <li><nuxt-link to="/checkout">Alışverişi Tamamla</nuxt-link></li>
                            <li><nuxt-link to="/contact">İletişim</nuxt-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Bilgi</h3>

                        <ul class="information-links">
                            <li><nuxt-link to="/login">Giriş Yap</nuxt-link></li>
                            <li><nuxt-link to="/signup">Üye Ol</nuxt-link></li>
                
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>İletişim</h3>

                        <ul class="footer-contact-info">
                            <li><i class="fas fa-map-marker-alt"></i> İstanbul / Beylikdüzü</li>
                            <li><i class="fas fa-phone"></i> Bize Ulaşın: <a href="#">(+544) 218-7898</a></li>
                            <li><i class="far fa-envelope"></i> Email: <a href="#">turgay@gmail.com</a></li>
                            <li><i class="fas fa-fax"></i> Fax: <a href="#">+123456</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <p>Copyright &copy; 2023 Turgay bkmKitap. All Rights Reserved</p>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <ul class="payment-card">
                            <li><a href="#" target="_blank"><img src="../assets/img/visa.png" alt="image"></a></li>
                            <li><a href="#" target="_blank"><img src="../assets/img/mastercard.png" alt="image"></a></li>
                            <li><a href="#" target="_blank"><img src="../assets/img/mastercard2.png" alt="image"></a></li>
                            <li><a href="#" target="_blank"><img src="../assets/img/visa2.png" alt="image"></a></li>
                            <li><a href="#" target="_blank"><img src="../assets/img/expresscard.png" alt="image"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>