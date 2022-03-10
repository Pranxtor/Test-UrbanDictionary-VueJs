<script lang="ts">
import { Ref } from 'vue';
import axios from 'axios';
import { Vue } from 'vue-class-component';

// reactive state


// functions that mutate state and trigger updates


// lifecycle hooks
export default class DefinitionGenerator extends Vue {
    definition : {
        word: Ref<String>,
        definition: Ref<String>,
        example: Ref<String>,
    } [] = [];

    random() {
    axios.get('https://api.urbandictionary.com/v0/random')
        .then((response) => {
            this.definition = response.data
        })
    }

    created(): void {
      this.random()
    };
}

</script>

<template>
  <main>
    <div class="generator-container">
        <div class="definition-container">
            <h3 class="word">{definition.word}</h3>
            <p class="definition">Definition</p>
            <p>Example</p>
        </div>
        <button class="random-click">Generate a definition</button>
    </div>
  </main>
</template>

<style scoped>

.generator-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.definition-container{
    width: 50%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 20px;
    margin: 30px;
}

.word{
    font-size: 32px;
    line-height: 41px;
    color: #134FE5;
}

.definition{
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.05em;
    color: #000000;
}

.random-click{
    background: #134FE5;
    border-radius: 30px;
    color: #EFFF00;
    font-weight: bold;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 10px;
    margin-bottom: 30px;
}

</style>