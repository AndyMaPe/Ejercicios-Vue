<template>
  <div class="about">
    <h1>This is an about page</h1>
     <input type="button" value="Mensajes" @click="navega()" />
     <h3>{{ $route.params.demo }} </h3>
  </div>
</template>

<script>
export default {
   methods: {
    navega: function(){
        this.$router.push("/messages")
    },
  }
}
</script>
