<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        mockpuppets.com
      </h1>
      <div class="links">
        <!-- <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a> -->
        <a href="#" class="button--green" @click="mock()">Mock</a>
      </div>
      <div class="main-content">
        <div class="joke" v-if="!!joke.setup">
          <div class="setup">{{ setup }}</div>
          <div class="punchline" v-show="joke.punchlineIsVisible">{{ joke.punchline }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joke: { setup: '', punchline: '', punchlineIsVisible: false },
    };
  },
  computed: {
    setup() {
      if (!this.joke || !this.joke.setup)
        return '';
      const questionWords = ['who', 'what', 'where', 'when', 'why', 'how'];
      if (questionWords.some(x => this.joke.setup.toLowerCase().startsWith(x))) {
        if (this.joke.setup.indexOf('?') < 0)
          return this.joke.setup + '?';
      }
      return this.joke.setup;
    },
  },
  methods: {
    mock() {
      return fetch('/api/joke')
        .then(r => r.json())
        .then(r => {
          if (this.joke.setup === r.setup) {
            this.mock();
          } else {
            this.joke = {...r, punchlineIsVisible: false };
          }
        });
    }
  },
  watch: {
    'joke': function (oldVal, newVal) {
      if (!!newVal && newVal.setup !== this.joke.setup) {
        setTimeout(() => {
          this.$set(this.joke, 'punchlineIsVisible', true);
        }, 2500);
      }
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main-content {
  padding-top: 1rem;
  min-height: 200px;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
