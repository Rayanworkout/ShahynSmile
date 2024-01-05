
<script setup lang="ts">
import { ref } from 'vue'

const calendarHover = ref(false);
const heartHover = ref(false);
const bookHover = ref(false);

</script>



<template>
    <div class="py-3 d-flex justify-content-around align-items-center items text-center">
        <div @mouseover="heartHover = true" @mouseleave="heartHover = false">
            <i :class="{ 'bi bi-heart icon': !heartHover, 'bi bi-heart-fill icon': heartHover }"></i>
            <p class="display-6"><strong>
                50
                </strong></p>
            <p>Patients satisfaits</p>
        </div>
        <div @mouseover="calendarHover = true" @mouseleave="calendarHover = false">
            <i
                :class="{ 'bi bi-calendar-heart icon': !calendarHover, 'bi bi-calendar-heart-fill icon': calendarHover }"></i>
            <p class="display-6"><strong>
                    3
                </strong></p>
            <p>ans d'expérience</p>
        </div>
        <div @mouseover="bookHover = true" @mouseleave="bookHover = false">
            <i :class="{ 'bi bi-book icon': !bookHover, 'bi bi-book-fill icon': bookHover }"></i>
            <p class="display-6"><strong>
                    5
                </strong></p>
            <p>Certificats Professionnels</p>
        </div>
    </div>
</template>


<style scoped>
.icon {
    font-size: 50px;
}

.counter:hover {
    color: var(--primary-color);
}

p {
    font-size: 30px;
}

@media (max-width: 750px) {
    .items {
        flex-direction: column;
    }
}
</style>