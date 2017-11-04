<template>
    <div class="wrapper" style="display:flex; justify-content: center; align-items: center; align-content: center">
        <form @submit.prevent="onSubmit" class="form-inline">
            <input v-model="authcode" type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Input 2FA code">
            <button class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import Api from "../../services/Api";

     export default {
       data: function () {
         return {
            authcode: ''
         }
       },
       methods: {
         onSubmit() {
            var self = this;
            Api().post('validate_authToken', { authcode: this.authcode }).then(function (res) {
              if (res.data.status == "OK") {
                self.$store.state.sessionToken = res.data.sessionToken;
                self.$store.state.isAdmin = 1;
                console.log(self.$store.state.sessionToken);
                self.$router.push('/home');
              } else {
                console.log(res.data.status);
              }
            });
            this.authcode = "";
         }
       },
       beforeCreate: function () {

         Api().get('generate_authToken').then(function (res) {
            console.log(res);
         });

       }
     }
</script>

<style>

</style>