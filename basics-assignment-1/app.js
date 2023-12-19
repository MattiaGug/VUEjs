const app = Vue.createApp({
  data() {
    return {
      name: 'Mattia',
      age: 27,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Man_Daeng_Waterfall.jpg/640px-Man_Daeng_Waterfall.jpg'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      number = Math.random()
      return number.toFixed(2);
    }
  }
});

app.mount('#assignment');