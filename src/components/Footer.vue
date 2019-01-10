 <template>
  <v-footer
    height="auto"
    color="#DDD"
    v-if="isLoggedIn"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        xs12
      >
        &copy;2018 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  import firebase from 'firebase';

  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ],
      isLoggedIn:false
    }),
    created(){
      if(firebase.auth().currentUser)
      {
        this.isLoggedIn = true;
      }
    }
  }
</script>