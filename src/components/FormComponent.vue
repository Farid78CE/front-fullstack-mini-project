<template>
    <div>
        <form class="form">
            <label for="id"> ID: </label>
            <input type="text" name="_id" placeholder="ObjectId MongoDB (_id)" v-model="id">
            <label for="name"> Name: </label>
            <input type="text" name="name" placeholder="Example: Farid" v-model="name">
            <label for="lastName">Last Name: </label>
            <input type="text" name="lastName" placeholder="Example: Zaredar" v-model="lastName">
            <label for="age"> Age: </label>
            <input type="number" name="age" placeholder="22" v-model="age">
            <button v-on:click="postAPI()"> Post </button>
            <button v-on:click="putAPI()"> Put </button>
            <button v-on:click="deleteAPI()"> Delete </button>
        </form>
    </div>
    <div>
        <ul>
            <li v-for="(person, index) in people" :key="index">
                <div class="display-card">    
                    <p> <b>Name:</b>  {{ person.name }}</p>
                    <p> <b>LastName:</b>  {{ person.lastName }}</p>
                    <p> <b>Age:</b>  {{ person.age }} </p>
                </div>
            </li>
        </ul>
    </div>
    <hr>
    <div class="display-card">    
            <p> <b>Name:</b>  {{ onePerson.name }}</p>
            <p> <b>LastName:</b>  {{ onePerson.lastName }}</p>
            <p> <b>Age:</b>  {{ onePerson.age }} </p>
        </div>
</template>

<script>
import axios from "axios";

export default {
    computed:{

    },
    data() {
        return {
            err: "",
            people: [],
            onePerson: {},
            id: "62d1aa650de617b1e41a0854",
            name: "",
            lastName:"",
            age: 0.0 
        }
    },
    methods: {
        async postAPI() {
            const person = {
                "name": this.name,
                "lastName": this.lastName,
                "age": this.age
            }
            await axios.post("http://localhost:3000/api/v1/people/", person).then((response) => {
                this.id = response.data.id;
            }).catch((error) => {
                this.err  = error.message; 
                console.log("[-] Post-error" + this.err);
            });
            
        },
        async deleteAPI(){
            await axios.delete(`http://localhost:3000/api/v1/people/${this.id}`).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error.message);
            })
        },
        async putAPI(){
            await axios.put(`http://localhost:3000/api/v1/people/${this.id}`, {
                "name" : this.name,
                "lastName": this.lastName,
                "age": this.age
            }).then((response) => {
                const data = response.data;
                console.log(data);
            }).catch((error) => {
                console.log(error.message);
            })
        },

    },
    async created() {

        await axios.get("http://localhost:3000/api/v1/people/")
            .then( (response) => {
                this.people = response.data;
                this.people = this.people.data;
                console.log(this.people);
            }).catch((error) => {
                this.err = error.message;
                console.log("[-] Get-error" + this.err);
            });
        
        await axios.get(`http://localhost:3000/api/v1/people/${this.id}`).then((response) => {
                console.log("HERE");
                console.log(response.data);
                this.onePerson = response.data
                this.onePerson = this.onePerson.data;
            }).catch( (error) => {
                console.log("HERE");
                console.log(error.message);
            })
        

    },


}
</script>


<style scoped>
.form {
    display: flex;
    flex-direction: column;
}

button {
    margin-top: 10px;
    color: white;
    background-color: black;
    border-radius: 12px;
    cursor: pointer;
}

button:hover {
    color: black;
    background-color: white;
}
ul {
    
    margin-top: 10px;
    margin-bottom: 10px;
    width: 50%;
}
ul li {
    list-style: none;
}

.display-card {
    border: 1px solid gray;
    text-align: center;
}
</style>