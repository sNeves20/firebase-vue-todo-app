<template>
    <div class="pt-3">
        <v-row class="d-flex justify-center">
            <v-col cols="6">
                <v-text-field label="New Todo" outlined v-model="newItem" ></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn large color="primary" @click="addItem">Add</v-btn>
            </v-col>
        </v-row>
        <transition-group name="fade">
            <v-card class="mx-auto pa-3 ma-2 text-center" max-width="400" v-for="ToDo in ToDos" :key=ToDo.id>
                <v-row>
                    <v-col cols="8">
                        <v-list-item-title class="headline mb-1">{{ToDo.name}}</v-list-item-title>
                    </v-col>
                    <v-col cols="4">
                        <v-btn icon color="red" @click="deleteTodo(ToDo.id)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </transition-group>
    </div>
</template>


<script>
import {db} from '../firebase/db';

export default {
    data() {
        return{
            ToDos: [],
            newItem: ""
        }
    },
    methods: {
        async addItem(){
            if(this.newItem){
                await db.collection("ToDos").add({name: this.newItem})
            }
        }
    }
};
</script>