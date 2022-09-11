<template>
  <q-card class="bg-secondary">
    <q-card-section tag="h1">
      Contact me
      <q-tooltip tag="caption"> don't be shy! </q-tooltip>
    </q-card-section>
    <q-item tag="p">
      Share your idea, problem you need help or if you just need a hand in your
      next task.
    </q-item>

    <q-card-section>
      <q-form
        no-reset-focus
        @submit="submitForm()"
      >
        <q-item class="row">
          <q-item-section>
            <!-- standout="bg-primary text-white" -->
            <q-input
              v-model="formData.name"
              class="q-pa-md"
              label="Name"
              for="name"
              required
              input-style="color: white"
              standout="bg-primary"
              outlined
            />

            <q-input
              v-model="formData.email"
              class="q-pa-md"
              label="Email"
              type="email"
              for="email"
              required
              input-style="color: white"
              standout="bg-primary"
              outlined
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-input
              v-model="formData.message"
              class="q-px-md"
              label="Message"
              type="textarea"
              for="message"
              required
              input-class="input-class"
              input-style="min-height: 6em; color: white;"
              standout="bg-primary"
              autogrow
              outlined
            />
          </q-item-section>
        </q-item>
        <q-item class="justify-end">
          <q-btn
            style="width: 10rem; margin-right: 16px"
            label="Send"
            type="submit"
            :ripple="false"
          />
        </q-item>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

interface IFormData {
  name: string | null
  email: string | null
  message: string | null
}
const formData = ref<IFormData>({
  name: '',
  email: '',
  message: '',
})

/**
 * Contact Form that uses a microserver on AWS Lambda to send me an email
 * with the content of the contact form
 */
const submitForm = () => {
  console.log(formData.value)

  $q.notify({
    message: 'Message sent!',
    caption: 'Pinky promise get back to you soon!',
    icon: 'lab la-telegram-plane',
    // color: 'purple',
  })

  // TODO Limit the rate of the lambda execution, create usage limit.
  // endpoint with the lambda function
  const endpoint =
    'https://37ulbwz6ff.execute-api.eu-west-1.amazonaws.com/default/martinSendCForm2Mail'

  // TODO add info about the lead, languaje, country, OS, etc.
  // Use JSON.stringify here so the data can be sent as a string via HTTP
  const body = JSON.stringify({
    senderName: formData.value.name,
    senderEmail: formData.value.email,
    message: formData.value.message,
  })

  const requestOptions = {
    method: 'POST',
    body,
  }

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error('Error in fetch')
      return response.json()
    })
    .then((response) => {
      // sets the confirmation message
      console.log('Message sent successfully!', response)
    })
    .catch((error) => {
      // sets the error message
      console.error('An unkown error occured.', error)
    })

  formData.value = {
    name: null,
    email: null,
    message: null,
  }
}
</script>

<style lang="scss" scoped>
p {
  color: $primary;
}
</style>
