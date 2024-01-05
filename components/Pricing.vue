

<template>
    <div class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center mb-3 hover-effect">
                        <h1 class="text-center mt-3">Nos Tarifs</h1>
                        <div class="custom-border-bottom mx-auto mb-3"></div>
                    </div>

                    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                        lectus tortor,
                        dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
                        ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
                        enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
                        scelerisque vitae,
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-5">
                    <div class="pricing-card card">
                        <div class="pricing-header">
                            <h3 class="text-center">Prestation 1</h3>
                            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                            </p>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-price">
                                <h1 class="text-center">80€</h1>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-footer text-center">
                            <a href="https://calendly.com/fr" target="_blank" class="btn cta">Réserver</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="pricing-card card">
                        <div class="pricing-header">
                            <h3 class="text-center">Prestation 2</h3>
                            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                            </p>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-price">
                                <h1 class="text-center">120€</h1>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-footer text-center">
                            <a href="https://calendly.com/fr" target="_blank" class="btn cta">Réserver</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pricing-card card">
                        <div class="pricing-header">
                            <h3 class="text-center">Prestation 3</h3>
                            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                            </p>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-price">
                                <h1 class="text-center">200€</h1>
                            </div>
                            <div class="pricing-list">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pricing-footer text-center">
                            <a href="https://calendly.com/fr" target="_blank" class="btn cta">Réserver</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped>
.pricing-card {
    border: 1px solid var(--secondary-color);
    background-color: var(--secondary-color);
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
</style>