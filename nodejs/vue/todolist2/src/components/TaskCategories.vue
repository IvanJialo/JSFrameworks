<template>
    <div class="task-categories-page">
        <header class="categories-header">
            <button class="back-button" @click="goBack">{{ backIcon }}</button>
            <h1>{{ title }}</h1>
        </header>

        <div class="categories-list">
            <GroceryCategory />
            <EducationalCategory />
            <HomeCategory />
            <WorkCategory />
            <MandatoryCategory />
            <PersonalCategory />
        </div>
    </div>
</template>

<script>
import GroceryCategory from './GroceryCategory.vue';
import EducationalCategory from './EducationalCategory.vue';
import HomeCategory from './HomeCategory.vue';
import WorkCategory from './WorkCategory.vue';
import MandatoryCategory from './MandatoryCategory.vue';
import PersonalCategory from './PersonalCategory.vue';

export default {
    name: 'TaskCategories',
    components: {
        GroceryCategory,
        EducationalCategory,
        HomeCategory,
        WorkCategory,
        MandatoryCategory,
        PersonalCategory,
    },
    methods: {
        goBack() {
            this.$router.push('/');
        },
    },
    data() {
        return {
            title: 'All Task List',
            backIcon: '⬅️',
        };
    },
};
</script>

<style scoped>
.task-categories-page {
    padding: 20px;
}

.categories-header {
    display: flex;
    align-items: center;
    gap: 10px;
}

.back-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.categories-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}
</style>