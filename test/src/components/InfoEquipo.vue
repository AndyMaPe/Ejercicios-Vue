<template>
<div v-if="this.team.length>0">
    <h1>Info Equipo ID: {{ team }}</h1>
   
        <p>Nombre del equipo: {{this.equipo}}</p>
        <p>Nombre Corto: {{this.nombreCorto}}</p>
        <p>Año de Formacion: {{this.añoFormacion}}</p>
        <p>Deporte: {{this.deporte}}</p>
        <p>Liga: {{this.liga}}</p>
</div>

</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            resul:false,
            equipo: '',
            nombreCorto:'',
            añoFormacion: '',
            deporte: '',
            liga: ''
        }
    },
    props:{
        team:{
            type: String,
            required: true
        }
    },
    methods:{
        async getTeamDetails(){
            return axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.team}`)
             .then((response)=>{
                //console.log(response.data.teams[0]);
                this.equipo=response.data.teams[0].strTeam;
                this.nombreCorto=response.data.teams[0].strTeamShort;
                this.añoFormacion=response.data.teams[0].intFormedYear;
                this.deporte=response.data.teams[0].strSport;
                this.liga=response.data.teams[0].strLeague;
            })
        }
    },
    watch:{
        team: async function(){
            await this.getTeamDetails()
        }
    }
}
</script>

<style>

</style>