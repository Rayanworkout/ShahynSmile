


<template>
    <div>
        <Navbar />
        <div class="hero-section">
            <div class="px-4 py-3 my-3 text-center">
                <h1 class="display-5 fw-bold">Shahyn Smile, spécialiste du blanchiment dentaire.</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Notre centre professionnel propose différents blanchiments pour répondre aux
                        besoins et aux attentes de
                        chacun d'entre vous.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href="https://calendly.com/fr" target="_blank" class="btn btn-lg rounded-pill px-3 cta">Je
                            réserve <i class="bi bi-arrow-right-short" style="vertical-align: middle;"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-section {
    /* Creating an overlay */
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('../assets/img/logo.jpg');
    background-size: cover;
    background-position: center 40%;
    padding: 200px 0;
    color: #fff;
    width: 100%;
}

@media (max-width: 768px) {
    .cta {
        margin-bottom: 10px;
    }

    .hero-section {
        /* Creating an overlay */
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('../assets/img/logo.jpg');
        background-size: cover;
        background-position: top;
    }

}
</style>