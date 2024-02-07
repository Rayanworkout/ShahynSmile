<script setup>

const showPopup = ref(false);

</script>


<template>
    <div>
        <Navbar @show-popup="showPopup = true" />
        <div class="hero-section">
            <div class="text-center">
                <img src="../assets/img/logo-cropped.jpg" alt="">
            </div>
            <div class="px-4 py-3 my-3 text-center">
                <h1 class="display-5 fw-bold">Shahyn Smile, spécialiste du blanchiment dentaire.</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Notre centre professionnel propose différents blanchiments pour répondre aux
                        besoins et aux attentes de
                        chacun d'entre vous.</p>
                    <transition name="fade">
                        <div class="popup" v-if="showPopup" @click.self="showPopup = false">
                            <div class="popup-content">
                                <h2>Une question ? Besoin d'un rdv ?</h2>
                                <p>Contactez nous au <a href="tel:+33628944165">06.28.94.41.65</a></p>
                            </div>
                        </div>
                    </transition>
                    <div @click="showPopup = true" class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a class="btn btn-lg rounded-pill px-3 cta">Je
                            réserve <i class="bi bi-arrow-right-short" style="vertical-align: middle;"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-section {
    padding: 100px 0;
}

a {
    text-decoration: none;
}

p {
    font-size: 1.25rem;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}


@media (max-width: 768px) {
    img {
        width: 90%;
    }
}
</style>