<template>
  <q-toolbar>
    <q-avatar
      square
      size="64px"
    >
      <q-img
        src="src/assets/martin-icon.svg"
        alt="Martin Icon"
        :no-native-menu="true"
      />
    </q-avatar>
    <q-space />
    <q-btn-group
      flat
      :ripple="false"
    >
      <!-- LinkedIn -->
      <q-btn
        aria-label="Check my LinkedIn"
        href="https://www.linkedin.com/in/mr-martin-romero"
      >
        <q-tooltip> Check my LinkedIn </q-tooltip>
        <q-avatar
          square
          size="32px"
        >
          <q-img src="src/assets/linkedin-icon.svg" />
        </q-avatar>
      </q-btn>

      <!-- Email -->
      <q-btn
        flat
        :ripple="false"
        aria-label="Send me an Email"
        @click="sendEmail()"
      >
        <q-tooltip> Send me an email </q-tooltip>
        <q-avatar
          square
          size="32px"
        >
          <q-img src="src/assets/email-icon.svg" />
        </q-avatar>
      </q-btn>

      <q-btn
        flat
        :ripple="false"
        aria-label="Check my GitHub"
        href="https://github.com/MrMartinR/"
      >
        <q-tooltip> Check my GitHub </q-tooltip>
        <q-avatar
          square
          size="32px"
        >
          <q-img src="src/assets/github-icon.svg" />
        </q-avatar>
      </q-btn>
    </q-btn-group>
  </q-toolbar>
</template>

<script setup lang="ts">
/**
 * Function to send email via user mail program, cloaking?? my email address
 * to avoid spam
 */
const sendEmail = () => {
  const at = String.fromCharCode(Math.pow(2, 6))
  const adress = 'mailt' + 'o:chicho' + 'spit' + at + 'm' + 'e.com'
  window.location.href = adress
}
</script>
