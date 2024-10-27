import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({

  data() {
    return {
      mouseX: '10px',
      mouseY: '10px',
      scrollY: window.scrollY,
      about: false,
      projects: {
        p1: null,
        p2: null,
        p3: null,
        p4: null,
        p5: null,
      },
    };
  },
  computed: {
    header() {
      if (this.scrollY > 100) {
        return {
          backgroundColor: '#141414',
          transition: 'background-color 0.3s ease-in-out'
        }
      } else {
        return {
          backgroundColor: 'rgba(0,0,0,0)',
        }
      }
    },
    gradiant() {
      return { backgroundImage: `radial-gradient(circle at ${this.mouseX}% ${this.mouseY}px, #393d8a, #212241 55%)` }
    },

  },
  methods: {
    cursor(event) {
      let width = window.innerWidth;
      this.mouseX = (event.clientX / width) * 100;
      this.mouseY = event.clientY;
    },
    scroll() {
      this.scrollY = window.scrollY;
    },
    popup(element) {
      if (this.projects[element] != null) {
        let position = this.projects[element].offsetTop - this.projects[element].clientHeight * 2
        if (this.scrollY > position)
          return true
      }
      return false
    },
    scrollTo(element) {
      document.querySelector(element).scrollIntoView({ behavior: 'smooth', block: 'start' })
      console.log(element)
    }
  },
  mounted() {
    this.projects.p1 = this.$refs.p1;
    this.projects.p2 = this.$refs.p2;
    this.projects.p3 = this.$refs.p3;
    this.projects.p4 = this.$refs.p4;
    this.projects.p5 = this.$refs.p5;

  },
  created() {
    window.addEventListener('scroll', this.scroll);
  }


}).mount("#app");
