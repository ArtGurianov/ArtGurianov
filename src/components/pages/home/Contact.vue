<template>
    <div class="wrapper" style="background-color: rgba(0,0,0,0.5);">
        <div id="contact-info">
            <div v-for="item in contactItems" class="contact-info-item">
                <a class="contact-info-item-logo" style="cursor: pointer" :href="item[2]">
                    <img :src="'../src/assets/contact/' + item[0]">
                </a>
                <div class="contact-info-item-text">
                    <h4>{{item[1]}}</h4>
                </div>
            </div>
        </div>
        <div id="contact-form-wrapper">
            <div style="margin: 0; padding: 0; height: 10%; width: 100%; display: flex; justify-content: center; align-items: center; align-content: center;"><h3>Email me</h3></div>
            <div id="contact-form">
                <form @submit.prevent="onSubmit" action="post" style="margin: 0; padding: 0; height: 100%; width: 100%;">
                    <div id="form-name" class="form-item">
                        <label style="height: 10%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center">Name*</label>
                        <div style="height: 50%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center"><input v-model="formName" type="text" name="name" required></div>
                    </div>
                    <div id="form-company" class="form-item">
                        <label style="height: 10%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center">Company</label>
                        <div style="height: 50%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center"><input v-model="formCompany" type="text" name="company"></div>
                    </div>
                    <div id="form-email" class="form-item">
                        <label style="height: 10%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center">Email*</label>
                        <div style="height: 50%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center"><input v-model="formEmail" type="email" name="email" required></div>
                    </div>
                    <div id="form-phone" class="form-item">
                        <label style="height: 10%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center">Phone</label>
                        <div style="height: 50%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center"><input v-model="formPhone" type="text" name="phone"></div>
                    </div>
                    <div id="form-subject" class="form-item">
                        <label style="height: 10%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center">Subject*</label>
                        <div style="height: 50%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center"><input v-model="formSubject" type="text" name="subject" required></div>
                    </div>
                    <div id="form-message" class="form-item">
                        <label style="height: 10%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center">Message*</label>
                        <div style="height: 80%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center"><textarea v-model="formMessage" id="textarea" name="message" required></textarea></div>
                    </div>
                    <div id="form-submit" class="form-item">
                        <div style="height: 50%; width: 100%; display: flex; justify-content: center; align-content: center; align-items: center"><button class="btn btn-info">Submit</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  import { Media } from '../../../store/media';
  import Api from '../../../services/Api';

    export default {
      data: function () {
        return {
            contactItems: Media.contactItems,
            formName: undefined,
            formCompany: undefined,
            formEmail: undefined,
            formPhone: undefined,
            formSubject: undefined,
            formMessage: undefined
        }
      },
      methods: {
        onSubmit() {
          var self = this;
            Api().post('send_email', {
              formName: self.formName,
              formCompany: self.formCompany,
              formEmail: self.formEmail,
              formPhone: self.formPhone,
              formSubject: self.formSubject,
              formMessage: self.formMessage}).then(function (res) {
                if (res.data == "OK") {
                  alert("Email was sent!");
                } else {
                  alert("Something went wrong :(");
                }
            });
        }
      }
    }
</script>

<style>
    #contact-info {
        position: absolute;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    #contact-form-wrapper {
        position: absolute;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
    .contact-info-item {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 1px solid white;
        float: left;
    }
    .contact-info-item-logo {
        float: left;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 20%;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    .contact-info-item-logo img {
        object-fit: contain;
        height: 90%;
        width: 90%;
    }
    .contact-info-item-text {
        float: left;
        height: 100%;
        width: 80%;
        margin: 0;
        padding: 0;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        border-left: 1px solid white;
    }
    #contact-form {
        position: absolute;
        top: 10%;
        margin: 0;
        padding: 0;
        height: 90%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;

    }
    .form-item {
        position: absolute;
        margin: 0;
        padding: 0;
        width: 50%;
    }
    input {
        border-radius: 10px;
        border: 1px solid black;
    }
    input:focus, textarea:focus {
        border-radius: 10px;
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        padding: 3px 0px 3px 3px;
        margin: 5px 1px 3px 0px;
        border: 2px solid rgba(81, 203, 238, 1);
        outline-style: none;
    }
    label, h3, button {
        font-style: italic;
        color: white;
    }


    /*MOBILE*/
    @media only screen
    and (max-width : 768px) {
        #contact-info {
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40%;
        }
        #contact-form-wrapper {
            left: 0;
            top: 0;
            width: 100%;
            height: 60%;
            border: 1px solid white;
        }
        .contact-info-item {
            width: 50%;
            height: 25%;
        }
        .contact-info-item h4 {
            font-size: 13px;
            color: white;
        }
        label {
            font-size: 13px;
            font-weight: lighter;
        }
        #form-name {
            height: 25%;
            top: 0;
            left: 0;

        }
        #form-company {
            height: 25%;
            top: 0;
            right: 0;
        }
        #form-email {
            height: 25%;
            top: 25%;
            left: 0;
        }
        #form-phone {
            height: 25%;
            top: 25%;
            right: 0;
        }
        #form-subject {
            height: 25%;
            top: 50%;
            left: 0;
        }
        #form-submit {
            height: 25%;
            top: 75%;
            left: 0;
        }
        #form-message {
            height: 50%;
            top: 50%;
            right: 0;
        }
        #textarea {
            height: 90%;
            width: 80% !important;
            border-radius: 5px;
        }
    }
    /*DESKTOP*/
    @media only screen
    and (min-width : 768px) {
        #contact-info {
            left: 0;
            top: 0;
            width: 30%;
            height: 100%;
        }
        #contact-form-wrapper {
            right: 0;
            top: 0;
            width: 70%;
            height: 100%;
            border: 1px solid white;
        }
        .contact-info-item {
            width: 100%;
            height: 12.5%;
        }
        .contact-info-item h4 {
            font-size: 20px;
            color: white;
        }
        label {
            font-size: 19px;
            font-weight: lighter;
        }
        #form-name {
            height: 20%;
            top: 0;
            left: 0;

        }
        #form-company {
            height: 20%;
            top: 20%;
            left: 0;
        }
        #form-email {
            height: 20%;
            top: 40%;
            left: 0;
        }
        #form-phone {
            height: 20%;
            top: 60%;
            left: 0;
        }
        #form-subject {
            height: 20%;
            top: 80%;
            left: 0;
        }
        #form-message {
            height: 80%;
            top: 0;
            right: 0;
        }
        #form-submit {
            height: 20%;
            top: 80%;
            right: 0;
        }
        #textarea {
            height: 100%;
            width: 90%;
            border-radius: 5px;
        }

    }
</style>