<template>
  <div id="dashboard">
    <form id="create-snipmark--form">
      <input type="text" name="name" placeholder="Snipmark name" v-model="newSnipmark.name" />
      <input type="text" name="description" placeholder="Snipmark description" v-model="newSnipmark.description" />
      <div class="create-snipmark--radio">
        <label for="radio-choice-1">Snippet</label>
        <input type="radio" name="radio-choice" id="radio-choice-1" value="snippet" v-model="newSnipmark.type" />
        <label for="radio-choice-2">Bookmark</label>
        <input type="radio" name="radio-choice" id="radio-choice-2" value="link" v-model="newSnipmark.type" />
      </div>
      <div class="create-snipmark--link">
        <input
          type="text"
          name="bookmark"
          placeholder="Bookmark link"
          v-model="newSnipmark.link"
          :disabled="newSnipmark.type === 'snippet'"
        />
      </div>
      <div class="create-snipmark--snippet">
        <textarea
          cols="52"
          rows="8"
          name="snippet"
          placeholder="Snippet"
          v-model="newSnipmark.snippet"
          :disabled="newSnipmark.type === 'link'"
        >
        </textarea>
      </div>
      <div class="create-snipmark--submit">
        <input type="button" value="Submit" @click="createSnipmark(newSnipmark)" />
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'CreateSnipmarks',
    data () {
      return {
        newSnipmark: {
          name: '',
          description: '',
          type: '',
          link: '',
          snippet: ''
        }
      }
    },
    methods: {
      ...mapActions([
        'createSnipmark'
      ])
    }
  }
</script>

<style>
  #dashboard {
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  #create-snipmark--form {
    padding: 20px;
  }
  input[name="name"],
  input[name="description"],
  input[name="bookmark"],
  textarea {
    border: .1em solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    height: 3em;
    margin-top: 1em;
    outline-color: #1abc9c;
    text-indent: .5em;
    width: 100%;
  }
  .create-snipmark--radio {
    margin-top: 1em;
  }
  .create-snipmark--submit input {
    background: #1abc9c;
    border: .1em solid #ddd;
    border-bottom: 4px solid #169d82;
    border-radius: 4px;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    height: 3em;
    margin-top: 1em;
    outline-color: #1abc9c;
    text-indent: .5em;
    width: 50%;
  }
  .create-snipmark--submit input:focus, .create-snipmark--submit input:hover {
    background: #16a085;
    border-bottom-color: #12816b;
  }
  .create-snipmark--submit input:active {
    background-color: #1bc2a2;
    border-bottom-color: #17a388;
  }
  input[name="bookmark"]:disabled,
  textarea[name="snippet"]:disabled {
    background-color: #ddd;
  }
</style>
