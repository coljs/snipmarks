<template>
  <div id="dashboard">
    <form id="create-snipmark--form">
      <input type="text" name="name" placeholder="Snipmark name" />
      <input type="text" name="description" placeholder="Snipmark description" />
      <div class="create-snipmark--radio">
        <label for="radio-choice-1">Snippet</label>
        <input type="radio" name="radio-choice" id="radio-choice-1" value="choice-1" />
        <label for="radio-choice-2">Bookmark</label>
        <input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2" />
      </div>
      <div class="create-snipmark--link">
        <input type="text" name="bookmark" placeholder="Bookmark link" />
      </div>
      <div class="create-snipmark--snippet">
        <textarea cols="52" rows="8" name="textarea" id="textarea" placeholder="Snippet"></textarea>
      </div>
      <div class="create-snipmark--submit">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'CreateSnipmarks'
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
    color: #fff;
    border: 0;
    border-bottom: 4px solid #169d82;
    font-size: 1em;
    font-weight: bold;
    margin-top: 1em;
    width: 50%;
    height: 3em;
    text-indent: .5em;
    border: .1em solid #ddd;
    border-radius: 4px;
    outline-color: #1abc9c;
  }
  .create-snipmark--submit input:focus, .create-snipmark--submit input:hover {
    background: #16a085;
    border-bottom-color: #12816b;
  }
  .create-snipmark--submit input:active {
    background: #1bc2a2;
    border-bottom-color: #17a388;
  }
</style>
