 <template>
  <v-toolbar >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>FireAuth</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items white--text>
      <v-btn flat v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></v-btn>
      <v-btn flat v-if="isLoggedIn"><router-link to="/">Dahsboard</router-link></v-btn>
      <v-btn flat v-if="!isLoggedIn"><router-link to="/login">Login</router-link></v-btn>
      <v-btn flat v-if="!isLoggedIn"><router-link to="/register">Register</router-link></v-btn>
      <v-btn flat v-if="isLoggedIn" v-on:click="logout" >Logout</v-btn>
      
    </v-toolbar-items>
  </v-toolbar>
</template>

  <script>
    import firebase from 'firebase';


    export default {
      name: 'navbar',
      data(){   
        return{
          isLoggedIn:false,
          currentUuser:false
        }
      },
      created(){
        if(firebase.auth().currentUser)
        {
          this.isLoggedIn = true;
          this.currentUser = firebase.auth().currentUser.email;
        }
      },
      methods:{
        logout: function(){
          firebase.auth().signOut().then(()=> {
            this.$router.go({ path: this.$router.path});
          }) 
        }
      }
    }
  </script>

  <style scoped>
    .email{ padding-right:5px; }

    a{ text-decoration: none; }
    
  </style>