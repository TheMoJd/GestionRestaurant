// Création d'un composant pour les projets
Vue.component('project-item', {
    props: ['name', 'description'],
    data() {
        return {
            showDescription: false
        };
    },
    template: `
      <li>
            <span @click="toggleDescription" class="toggle-arrow">
                {{ name }} <i :class="['fas', {'fa-chevron-down': !showDescription, 'fa-chevron-up': showDescription}]"></i>
            </span>
        <p v-if="showDescription">{{ description }}</p>
      </li>
    `,
    methods: {
        toggleDescription() {
            this.showDescription = !this.showDescription;
        }
    }
});

new Vue({
    el: '#app',
    data: {
        name: 'Moetez JAOUED',
        introduction: 'Future millionnaire et chasseur de dragons professionels.',
        skills: ['Programmation', 'Vente', 'Management de projet', 'Tuer des dragons', 'Sauver des princesses'],
        projects: [
            { name: 'Project 1', description: 'Description of Project 1' },
            { name: 'Project 2', description: 'Description of Project 2' }
        ],
        contact: {
            email: 'jaouedmoetaz@gmail.com',
            linkedin: 'https://www.linkedin.com/in/your-linkedin-profile'
        }
    }
});
