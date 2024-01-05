


<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <div class="smaller-vp">
                <a class="contact" href="#">Blanchiment</a><br>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-auto">
                    <a class="nav-link elem active" aria-current="page" href="#">Accueil</a>
                    <a class="nav-link elem" href="#about">Notre Centre</a>
                    <a class="nav-link elem" href="#services">Services</a>
                    <!-- <a class="nav-link elem" href="#contact">Contact</a> -->
                    <a class="nav-link btn nav-btn rounded-pill" href="https://calendly.com/fr" target="_blank">Réserver</a>
                </div>
            </div>
        </div>
    </nav>
</template>


<style scoped>
.contact {
    color: var(--text-color);
    text-decoration: none;
    font-size: 25px;
}

.nav-link elem {
    font-size: larger;
}

.nav-btn {
    background-color: var(--primary-color);
    border-radius: 7px;
    color: white;
    padding: 10px;
    margin-left: 30px;
}

.nav-btn:hover {
    background-color: var(--background-color);
    border: 1px solid var(--primary-color);
    box-shadow: none;
    color: var(--primary-color);
}

/* Starting from 1000px */
@media (min-width: 1000px) {
    .smaller-vp {
        display: none;
    }
    .elem {
        border-bottom: 2px solid transparent;
        transition: border-color 0.5s ease-in-out;
    }

    .elem:hover {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
    }

    .active {
        border-bottom: 2px solid var(--primary-color);
    }
}

/* under 1000px  */
@media (max-width: 1000px) {

    .navbar-nav {
        text-align: right;
    }

    .cta {
        margin-left: 0;
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