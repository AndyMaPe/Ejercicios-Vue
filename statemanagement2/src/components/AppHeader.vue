<template>
  <header class="w-full block p-4 border-b bg-blue-300 border-gray-700">
    <h2 class="text-xl text-gray-800">Profile Card Generator</h2>
    <button
      @click="clear()"
      class="flex ml-auto text-gray-800 items-center"
    >
      Reset
    </button>
  </header>
</template>

<script>
  import eventBus from '../event-bus'; //Se importa el Bus de Evenetos de .js
  export default {
  methods:{
    clear: function(){
   eventBus.$emit('profileUpdate',{
     name
   })
    }
  }
}
</script>