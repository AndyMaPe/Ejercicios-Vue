<template>
   <div>
        <h1>Login</h1>
        Nombre:  <input type="text" placeholder="Nombre"  v-model="userName"/>
        Password: <input type="text" placeholder="Password" v-model="password"/>
        <input type="button" value="Log on" @ click="logOn()"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userName: '',
            password: ''
        }
    },
    methods: {
        logOn: function(){
            console.log(`Trying to log on using ${this.userName} and ${this.password}`)
            if (this.userName === 'andy' && this.password=='123456')
            this.$router.push({
                path:'McDonalds',
                params: {logonSuccesful:true}
            });
        }
    }
}
</script>

<style>

</style>