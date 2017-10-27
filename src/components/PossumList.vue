<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Registered Possums:</h1>
      <label for="weight">Search:</label>
      <input v-model="search" id="seach" type="text" />
      <ul class="columns is-flex-tablet is-flex-desktop">
        <li v-for="possum in possums" class="column is-one-quarter-desktop is-half-tablet">
          <div class="card">
            <div class="card-image">
              <figure class="image is-3by3">
                <img v-bind:src="possum.avatar.items[0]._pieces[0].item.attachment._urls.full" alt="">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img v-bind:src="possum.avatar.items[0]._pieces[0].item.attachment._urls.full" alt="">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ possum.title }}</p>
                  <p class="subtitle is-6">Weight: {{ possum.weight }}lbs</p>
                </div>
              </div>

              <div class="content">
                {{ possum.bio }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import {HTTP} from '../http-common'

export default {
  name: 'PossumList',
  data () {
    return {
      search: '',
      possums: []
    }
  },
  watch: {
    search: function () {
      this.getResults()
    }
  },
  methods: {
    getResults: function () {
      const vm = this
      let query = ''
      if (this.search.length > 0) {
        query = `?search=${this.search}`
      }
      HTTP.get(`possums${query}`)
        .then(response => {
          vm.possums = []
          vm.possums = response.data.results
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.getResults()
  }
}
</script>

<style scoped>
  ul {
    flex-wrap: wrap;
  }

  input {
    margin-bottom: 2rem;
  }
</style>
