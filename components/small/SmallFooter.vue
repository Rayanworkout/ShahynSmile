<script setup>

const showPopup = ref(false);

</script>



<template>
    <div class="container">
        <transition name="fade">
            <div class="popup" v-if="showPopup" @click.self="showPopup = false">
                <div class="popup-content">
                    <h2>Une question ? Besoin d'un rdv ?</h2>
                    <p>Contactez nous au <a href="tel:+33628944165">06.28.94.41.65</a></p>
                </div>
            </div>
        </transition>
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-1 mb-1">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted elem">Accueil</a></li>
                <li class="nav-item"><a href="#services" class="nav-link px-2 text-muted elem">Services</a></li>
                <li class="nav-item"><a @click="showPopup = true" class="nav-link px-2 text-muted elem">Réserver</a>
                </li>
            </ul>
            <p class="text-center text-muted">&copy; 2024 Shahyn Smile</p>
        </footer>
    </div>
</template>

<style scoped>
.elem {
    border-bottom: 2px solid transparent;
    transition: border-color 0.5s ease-in-out;
}

.elem:hover {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
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

a {
    text-decoration: none;
    cursor: pointer;
}

p {
    font-size: 1.25rem;
}

</style>