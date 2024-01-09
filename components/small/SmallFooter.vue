

<template>
    <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-1 mb-1">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted elem">Accueil</a></li>
                <li class="nav-item"><a href="#services" class="nav-link px-2 text-muted elem">Services</a></li>
                <li class="nav-item"><a href="https://calendly.com/fr" class="nav-link px-2 text-muted elem">Réserver</a></li>
            </ul>
            <p class="text-center text-muted">&copy; 2024 Blanchiment</p>
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
</style>