//Second Project VUE Course

const app = Vue.createApp({
  data() { //function
    return {
      courseGoalA: "Finish the course and learn Vue",
      courseGoalB: "Master Vue and build amazing apps! ",
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {     // full of functions
  outputGoal() {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      return this.courseGoalA; //this is a keyword
    } else {
      return this.courseGoalB;
    }
  }
}
});

app.mount("#user-goal");
