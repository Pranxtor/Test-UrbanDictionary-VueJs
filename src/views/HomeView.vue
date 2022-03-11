<script>
import { ref, watch } from 'vue';
import { Form, Field, useField, ErrorMessage} from 'vee-validate';
import * as Yup from 'yup'

export default {
  //  setup() {
  //     const usr= useField('username', Yup.string()
  //             .required("Username is required")
  //             .max(15, "Username is too long"));
  //     const username = usr.value
  //     const errorUsr = usr.errorMessage
  //     const pwd= useField('password', Yup.string()
  //             .required("Password is required")
  //             .min(6, "Password must contain a minimum of 6 characters"));
  //     const password = pwd.value
  //     const errorPwd = pwd.errorMessage
  //   return {
  //     username,
  //     errorUsr,
  //     password,
  //     errorPwd,
  //   };
  // },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data(){
    const validUsr = Yup.string()
              .required("Username is required")
              .max(15, "Username is too long")
    const validPwd = Yup.string()
              .required("Password is required")
              .min(6, "Password must contain a minimum of 6 characters")
    //const validUsr = this.usename;
    console.log(validUsr)
    // const validPwd = this.password;
    return {
      validUsr,
      validPwd,
    };
  },

  methods: {
    onSubmit(values) {
      //console.log(values)
      this.$router.push(`/generator`);
    },
  },
};
</script>

<template>
  <div class="home-container">
      <div class="login-container">
      <Form @submit="onSubmit" >
          <div class="input-container">
            <label htmlFor="username" >Username</label>
            <Field 
                name="username"
                type="text" 
                placeholder="Enter your username"
                :rules = "validUsr"
            />
            <span class="errorMessage"><ErrorMessage name="username" /></span>
          </div>
          <div class="input-container">
            <label htmlFor="password" >Password</label>
            <Field 
                name="password"
                type="password" 
                placeholder="Enter your password"
                :rules = "validPwd"
            />
            <span class="errorMessage"><ErrorMessage name="password" /></span>
          </div>
          <div class="btn-container">
            <button class="btn-submit">Login</button>
          </div>
          
      </Form>
    </div>
  </div>
</template>

<style scoped>

.home-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Lora', serif;
}

.login-container{
  width: 35%;
  padding: 20px;
  margin: 30px;
}

.input-container{
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

label{
  font-family: 'Lora', serif;
  font-size: 24px;
  line-height: 41px;
  font-weight: 700;
}

input{
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
}

.errorMessage{
  font-size: 14px;
  color: red;
  padding-left: 10px;
}

.btn-container{
  display: flex;
  justify-content: center;
}

.btn-submit{
  background: #EFFF00;
  border: none;
  border-radius: 30px;
  color: black;
  font-family: 'Lora', serif;
  font-size: 20px;
  font-weight: 700;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 10px 40px;
  margin-bottom: 30px;
  cursor: pointer;
}

</style>
