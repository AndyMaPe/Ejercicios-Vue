<template>
  <section class="md:w-1/3 flex flex-col p-12">
  <!-- Profile Card -->
    <h3 class="font-bold font-lg">{{ formData.name }}</h3>
    <p class="mt-2">{{ formData.occupation }}</p>
  </section>
</template>

<script>
import eventBus from '../event-bus'; //Se importa el Bus de Evenetos de .js
export default {
  mounted(){
      eventBus.$on('profileUpdate', this.update) // oye EventBus ahí te encargo cuando alguien se aviente un profileUpdate 
  },
  beforeDestroy(){ // SI EL COMPONENTE MUERE SE DESUSCRIBIRA DEL EVENTO 
    eventBus.$$off('profileUpdate', this.update)
  },
  methods: {
    update(formData){
    this.formData = formData
  }
},
data (){
  return {
  formData:{}
  }
}
 /* YA NO SE USA UN PROP PORQUE LA INFO VIENE DEL PADRE 
  props: { 
    formData: {
      type: Object,
      default() {
        return {}
      }
    }
  }*/
}
</script>
