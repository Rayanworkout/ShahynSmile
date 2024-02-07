

<template>
    <div class="container py-4">
        <div class="text-center mb-3 hover-effect">
            <h1 class="text-center">Informations Pratiques</h1>
            <div class="custom-border-bottom mx-auto mb-2"></div>
        </div>

        <div class="row text-center">
            <!-- <div class="col-md-6">
                <h2 class="my-4">Horaires</h2>
                <ul>
                    <li><span><i class="bi bi-calendar-check icon"></i> Lundi à Vendredi</span> : 9h - 12h / 14h - 18h</li>
                    <li><span><i class="bi bi-calendar-check icon"></i> Samedi</span> : 9h - 12h / 14h - 18h</li>
                    <li><span><i class="bi bi-calendar-x icon"></i> Dimanche</span> : Fermé</li>
                </ul>
            </div> -->
            <div class="col-md-6 mx-auto">
                <h2 class="my-4">Coordonnées</h2>
                <ul class="contact">
                    <li><a href="https://maps.app.goo.gl/vuQX2zN4fDbHBVK68" target="_blank"><span><i
                                    class="bi bi-geo-alt icon"></i></span> Marseille 13014</a></li>
                    <li><a href="tel:+33628944165"><span><i class="bi bi-telephone icon"></i></span> 06 28 94 41 65</a></li>
                    <li><span><i class="bi bi-snapchat icon"></i></span> Shahynsmile</li>
                    <li><span><i class="bi bi-tiktok icon"></i></span> shahyn_smile</li>
                    <li><a href="https://www.instagram.com/shahyn_smile?igsh=MTV1YXVyYjloYW9qZQ%3D%3D&utm_source=qr"
                            target="_blank"><span><i class="bi bi-instagram icon"></i></span> shahyn_smile</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style scoped>
.custom-border-bottom {
    width: 40%;
}

span {
    font-weight: bold;
}

li {
    list-style: none;
    margin-bottom: 10px;
}

a {
    color: var(--text-color);
    text-decoration: none;
}

.contact {
    margin-right: 30px;
}
</style>
