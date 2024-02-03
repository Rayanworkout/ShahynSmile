
<script setup lang="ts">

const btnHovered = ref(false);

</script>


<template>
    <nav class="navbar navbar-expand-lg pt-4">
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <div class="smaller-vp">
                <a class="contact" href="#">Shahyn Smile</a><br>
            </div>
            <button class="navbar-toggler white-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-auto">
                    <a class="nav-link elem mx-3" href="#">Accueil</a>
                    <a class="nav-link elem" href="#about">Notre Équipe</a>
                    <a class="nav-link elem mx-3" href="#pricing">Services</a>
                    <!-- <a class="nav-link elem" href="#contact">Contact</a> -->
                    <a @mouseover="btnHovered = true" @mouseleave="btnHovered = false"
                        class="nav-link btn nav-btn rounded-pill ms-auto mb-2" href="tel:+33628944165"><i
                        class="mx-2 icon"
                            :class="{ 'bi bi-calendar-event': !btnHovered, 'bi bi-calendar-check': btnHovered }"></i>
                        Réserver</a>
                </div>
            </div>
        </div>
    </nav>
</template>


<style scoped>

.icon {
    font-size: 18px;
    color: var(--background-color);
}
.navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid var(--text-color);
    background-color: transparent;
    z-index: 2;
    transition: background-color 0.3s ease-in-out;
}

.white-button {
    color: var(--text-color);
    background-color: transparent;
    border: 1px solid var(--text-color);
}


.contact {
    color: var(--text-color);
    text-decoration: none;
    font-size: 25px;
}

.nav-link.elem {
    font-size: larger;
    color: var(--text-color);
}

.nav-btn {
    background-color: transparent;
    border: 1px solid var(--text-color);
    border-radius: 7px;
    color: var(--text-color);
    padding: 10px;
    margin-left: 30px;
    width: 150px;
}

.nav-btn:hover {
    background-color: var(--background-color);
    border: 1px solid var(--primary-color);
    box-shadow: none;
    color: var(--primary-color);
}

.icon {
    font-size: 18px;
    color: var(--text-color);
}

.navbar:hover {
    background-color: var(--background-color);
}

.navbar:hover .elem {
    color: black;
}

.navbar:hover .icon {
    color: black;
}

.navbar:hover .nav-btn {
    color: black;
}

.navbar:hover .nav-btn {
    border-color: black;
}

.navbar:hover .white-button {
    color: black;
    border-color: black;
}

.navbar:hover .contact {
    color: black;
}

/* Starting from 1000px */
@media (min-width: 1000px) {
    .smaller-vp {
        display: none;
    }

    .elem {
        transition: border-color 0.5s ease-in-out;
    }

    .elem:hover {
        color: var(--primary-color);
        border-bottom: 2px solid black;
    }
}

/* under 1000px  */
@media (max-width: 1000px) {

    .navbar-nav {
        text-align: right;
    }
}

/* very small screens */
@media (max-width: 400px) {

    .navbar-nav {
        text-align: right;
    }

    .cta {
        margin-left: 0;
    }
}
</style>