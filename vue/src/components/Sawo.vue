<template>
  <div class="containerStyle">
    <section>
      <h1>VUE | Sawo Form Example {{isLoggedIn}}</h1>
        <div class="loggedin" v-if="isLoggedIn">
          <h2>User Successfull login</h2>
          <div>UserId: {{userPayload.user_id}}</div>
          <div>Verification Token: {{userPayload.verification_token}}</div>
        </div>
      <div class="formContainer" id="sawo-container" v-if="!isLoggedIn">
        <!-- Sawo form will populate here -->
      </div>
    </section>
  </div>
</template>


<script>
import Sawo from "sawotest";

console.log(`Sawo, `, Sawo)
export default {
  name: "Sawo",
  data: () => ({
    isLoggedIn: false,
    userPayload: {},
    Sawo: null
  }),
  mounted() {
    const sawoConfig = {
      // should be same as the id of the container
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key
      apiKey: "",
      // Add a callback here to handle the payload sent by sdk
      onSuccess: (payload) => {
        this.userPayload = payload;
        this.isLoggedIn = true;
      }
    };
    // creating instance
    this.Sawo = new Sawo(sawoConfig);
    this.Sawo.showForm();
  }
}
</script>

<style scoped>
  .containerStyle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f9f9f9;
  }

  .sectionStyle{
      width: 500px;
      height: 400px;
      border: 1px;
      border-color: black;
  }

  .formContainer {
      padding: 1rem;
      background-color: #f3f3f3;
      height: 300px;
      width: 400px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .loggedin {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
      padding: 1rem;
  }
</style>