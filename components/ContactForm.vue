

<template>
    <section>
        <div class="container py-5" id="contact">
            <div class="text-center mb-3 hover-effect">
                <h1 class="text-center">Contact</h1>
                <div class="custom-border-bottom mx-auto mb-5"></div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <img src="../assets/img/brosse-a-dent.jpg" alt="brosses à dents dans un pot">
                </div>
                <div class="col-md-6">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" aria-describedby="nameHelp" placeholder="Votre Nom">
                        </div>
                        <div class="form-group my-3">
                            <input type="email" class="form-control" aria-describedby="emailHelp"
                                placeholder="Adresse email">
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Objet">
                        </div>

                        <div class="form-group my-3">
                            <textarea class="form-control" aria-describedby="emailHelp" rows="5"
                                placeholder="Bonjour, je souhaite des obtenir des informations à propos d'un blanchiment dentaire."></textarea>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn secondary-btn my-4">Envoyer</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
img {
    border-radius: 15px;
    width: 100%;
}

.custom-border-bottom {
    width: 30%;
}

input:focus {
    border: 2px solid var(--secondary-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
    img {
        display: none;
    }
}

</style>