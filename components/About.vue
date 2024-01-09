


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
                            <h1 class="mt-3">Notre Centre</h1>
                            <div class="custom-border-bottom mx-auto mb-3"></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
                            tortor,
                            dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
                            ligula
                            massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
                            enim
                            est
                            eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque
                            vitae,
                        </p>
                        <div class="d-flex align-items-center items">
                            <p class="icon-text mx-3"><i class="bi bi-check2-circle icon"></i> Matériel Récent</p>
                            <p class="icon-text"><i class="bi bi-check2-circle icon"></i> Matériel Récent</p>
                            <p class="icon-text mx-3"><i class="bi bi-check2-circle icon"></i> Matériel Récent</p>
                            <p class="icon-text"><i class="bi bi-check2-circle icon"></i> Matériel Récent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.about-pic {
    border-radius: 15px;
}


.icon {
    font-size: 30px;
    margin-right: 5px;
    color: var(--primary-color);
}

.icon-text {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
}

.icon-text:hover {
    color: var(--primary-color);
    transform: scale(1.1);
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