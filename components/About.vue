


<template>
    <section class="about-section" id="about">
        <div class="about-container">
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-6">
                        <img src="../assets/img/center.jpg" alt="about" class="img-fluid about-pic">
                    </div>
                    <div class="col-md-6">
                        <div class="text-center mb-3 hover-effect">
                            <h1 class="mt-3">À Savoir</h1>
                            <div class="custom-border-bottom mx-auto mb-3"></div>
                        </div>
                        <p><strong>Le blanchiment dentaire est une pratique simple, sans danger pour l'émail et efficace qui
                                permet
                                d'éclaircir les dents grâce à l'application d'un gel à base de peroxyde
                                d'hydrogène.</strong>
                        </p>
                        <p>Cet ingrédient actif se décompose, pénètre dans l'émail et blanchit les parties brunes. Seuls
                            l'émail et la dentine deviennent
                            plus clairs.
                        </p>
                        <p>Les <strong>PLOMBAGES</strong>, <strong>COURONNES</strong> et <strong>DENTIERS</strong> ne sont
                            donc pas blanchis, mais peuvent être
                            remplacés après le blanchiment chez le dentiste pour se fondre à la nouvelle teinte de vos
                            dents.</p>
                        <p><strong><i>Le sourire peut parfois conduire à un complexe, c'est pourquoi Shahyn Smile s'investit
                                    pour vous
                                    rendre la vie facile au quotidien.</i></strong></p>
                        <div class="d-flex align-items-center items">
                            <p class="icon-text mx-3"><i class="bi bi-check2-circle icon"></i> Matériel professionnel récent
                            </p>
                            <p class="icon-text"><i class="bi bi-check2-circle icon"></i> Produits professionnels sans danger
                            </p>
                            <p class="icon-text mx-3"><i class="bi bi-check2-circle icon"></i> Des tarifs abordables</p>
                            <p class="icon-text"><i class="bi bi-check2-circle icon"></i> Suivi après blanchiment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
h1 {
    color: black
}

.about-pic {
    border-radius: 15px;
}


.icon {
    font-size: 30px;
    margin-right: 5px;
    color: black;
}

.icon-text {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
}

.icon-text:hover {
    transform: scale(1.07);
}

@media (max-width: 768px) {
    .items {
        flex-direction: column;
    }

    .custom-border-bottom {
        width: 100%;
    }
}
</style>