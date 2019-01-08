<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar>
                <v-toolbar-title>Register form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="email" name="Email" label="Email" type="text"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="register" color="primary">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
    import firebase from 'firebase';


    export default{
        name:'register',
        data:function(){
            return {
                email:'',
                password:''
            };
        },
        methods:{
            register :function(e){
                //para simplificar
                let email = this.email;
                let password = this.password;

                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user =>{
                    alert(`Account Created for ${user.email}`);
                    this.$router.go({ path: this.$router.path});
                },
                err => {
                    alert(err.message);
                });
                
                e.preventDefault();
            }

        }
    }
</script>

<style>
    
</style>
