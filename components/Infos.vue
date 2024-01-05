

<template>
    <div class="container py-4">
        <div class="text-center mb-3 hover-effect">
            <h1 class="text-center">Informations Pratiques</h1>
            <div class="custom-border-bottom mx-auto mb-2"></div>
        </div>

        <div class="row text-center">
            <div class="col-md-6">
                <h2 class="my-4">Horaires</h2>
                <ul>
                    <li><span><i class="bi bi-calendar-check icon"></i> Lundi à Vendredi</span> : 9h - 12h / 14h - 18h</li>
                    <li><span><i class="bi bi-calendar-check icon"></i> Samedi</span> : 9h - 12h / 14h - 18h</li>
                    <li><span><i class="bi bi-calendar-x icon"></i> Dimanche</span> : Fermé</li>
                </ul>
            </div>
            <div class="col-md-6">
                <h2 class="my-4">Coordonnées</h2>
                <ul>
                    <li><a href="https://maps.app.goo.gl/vuQX2zN4fDbHBVK68" target="_blank"><span><i
                                    class="bi bi-geo-alt icon"></i></span> 1 rue de la Paix, 75000 Paris</a></li>
                    <li><span><i class="bi bi-telephone icon"></i></span> 01 23 45 67 89</li>
                    <li><span><i class="bi bi-envelope-at icon"></i></span> email@example.com </li>
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
</style>
