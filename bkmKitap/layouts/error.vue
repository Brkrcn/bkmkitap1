<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Anasayfa</nuxt-link></li>
                    <li>404 Sayfa Bulunamadı</li>
                </ul>
            </div>
        </div>

        <section class="error-area ptb-60">
            <div class="container">
                <div class="error-content">
                    <img src="../assets/img/404.png" alt="error">

                    <h3>Aradıgınız sayfa bulunamadı</h3>
                    <p>Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.</p>

                    <nuxt-link to="/" class="btn btn-light">Anasayfa'ya dön</nuxt-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error-layout'
}
</script>