<script setup>

const showPopup = ref(false);

</script>



<template>
    <div class="py-5" id="pricing">
        <div class="container">
            <transition name="fade">
                <div class="popup" v-if="showPopup" @click.self="showPopup = false">
                    <div class="popup-content">
                        <h2>Une question ? Besoin d'un rdv ?</h2>
                        <p>Contactez nous au <a href="tel:+33628944165">06.28.94.41.65</a></p>
                    </div>
                </div>
            </transition>
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center mb-3 hover-effect">
                        <h1 class="text-center mt-3">Nos Tarifs</h1>
                        <div class="custom-border-bottom mx-auto mb-3"></div>
                    </div>

                    <p class="py-3"><i>Note: </i><strong>TOUS</strong> nos blanchiments sont sans danger et sans risque pour
                        l'émail et la dentine.
                        Les blanchiments brésiliens et LDS contiennent également du calcium afin de renforcer votre émail.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-5">
                    <div class="pricing-card card">
                        <div class="pricing-header">
                            <h3 class="text-center"><strong>Américain</strong></h3>
                            <div class="text-center mb-2"><i>Durée 60 minutes</i></div>
                            <p class="text-center">Le blanchiment américain est un blanchiment dentaire professionnel
                                certifié utilisé
                                aux USA.
                            </p>
                            <p class="text-center">Il a une durée de 2 ans.</p>
                            <p class="text-center">Il apportera une touche d'éclat à votre sourire dès la première séance.
                            </p>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-list text-center">
                                <p><strong>1 séance: 60€</strong></p>
                                <p><strong>2 séances: 100€</strong></p>
                            </div>
                        </div>
                        <div class="pricing-footer text-center" @click="showPopup = true">
                            <a class="btn cta rounded-pill px-4">Réserver</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="pricing-card card">
                        <div class="pricing-header">
                            <h3 class="text-center"><strong>Brésilien</strong></h3>
                            <div class="text-center mb-2"><i>Durée 50 minutes</i></div>
                            <p class="text-center">Le blanchiment Brésilien est un blanchiment dentaire professionnel
                                certifié
                                provenant du Brésil.
                            </p>
                            <p class="text-center">Il a une durée de 3 ans.</p>
                            <p class="text-center">Vous obtenez des résultats satisfaisants et un sourire éclatant dès la
                                première séance.</p>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-list text-center">
                                <p><strong>1 séance: 90€</strong></p>
                                <p><strong>2 séances: 160€</strong></p>
                            </div>
                        </div>
                        <div class="pricing-footer text-center" @click="showPopup = true">
                            <a class="btn cta rounded-pill px-4">Réserver</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="pricing-card card">
                        <div class="pricing-header">
                            <h3 class="text-center"><strong>LDS</strong></h3>
                            <div class="text-center mb-2"><i>Durée 60 minutes</i></div>
                            <p class="text-center">Le blanchiment LDS est un blanchiment dentaire mis au point par l'atelier
                                du sourire 13.
                            </p>
                            <p class="text-center">Il a une durée de 3 ans.</p>
                            <p class="text-center">Résultats garantis dès la première séance. Sa particularité ? Il est
                                totalement indolore !</p>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-list text-center">
                                <p><strong>1 séance: 100€</strong></p>
                                <p><strong>2 séances: 180€</strong></p>
                            </div>
                        </div>
                        <div class="pricing-footer text-center" @click="showPopup = true">
                            <a class="btn cta rounded-pill px-4">Réserver</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<style scoped>
.pricing-card {
    border: none;
    background-color: var(--grey-color);
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
}

.pricing-card:hover {
    transform: scale(1.05);
    cursor: pointer;
}

.custom-border-bottom {
    width: 30%;
}


ul {
    list-style: none;
}

.cta {
    color: black;
    border: 1px solid black;
}

.cta:hover {
    background-color: black;
    color: white;
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
</style>