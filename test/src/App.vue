<template>
  <div id="app">
    <input type="text" v-model="nombre"/>
    <Hello v-bind:name="this.nombre" greeting=" Que onda"/>
    <br/>
    Clave del equipo a consultar: <input type="text" v-model="nombreEquipo"/>
    <InfoEquipo v-bind:team="this.nombreEquipo"/>
   
 
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import InfoEquipo from './components/InfoEquipo.vue'

export default {
  data(){
    return{
    nombre: '',
    nombreEquipo: '',
  }
},
  components: {
    Hello, 
    InfoEquipo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
