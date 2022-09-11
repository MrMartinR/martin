<template>
  <q-page class="flex flex-center bg-primary">
    <q-card class="bg-transparent">
      <q-card-section>
        <q-item>
          <q-item-section avatar>
            <q-avatar size="10rem">
              <q-img src="src/assets/martin-romero.jpeg" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item tag="h1"> Hi there! I'm Martin </q-item>
            <q-tooltip tag="caption"> A random computer guy </q-tooltip>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>

    <!-- About -->
    <q-card class="bg-transparent">
      <q-card-section tag="h1">Who am I? </q-card-section>
      <q-card-section tag="p">
        Spanish-ish guy my passport says but (semi) Digital Nomad, on my
        forties, with no computer science degree, but a
        <a
          href="https://en.wikipedia.org/wiki/Lifelong_learning"
          target="_blank"
          >lifelong learning</a
        >, I've been 'playing' with computers for more than 25 years 24/7,
        touching basically every category except AI (no much neurons left for
        that...).
      </q-card-section>
      <q-card-section tag="p">
        I am having lot of fun creating professional custom apps using
        <a
          href="https://www.claris.com"
          target="_blank"
          >Claris apps (FileMaker)</a
        >, but now I am moving into the JavaScript universe, where there are
        basically no limits on what can be created.
      </q-card-section>
      <q-card-section tag="p">
        I'm looking to establish long term relationships with organizations
        providing a wide variety of services.
      </q-card-section>
    </q-card>

    <!-- Promise -->
    <q-card class="bg-transparent">
      <q-card-section tag="h1">
        How can I help your organization?
      </q-card-section>

      <q-card-section tag="p">
        Where I really shine is in transforming the workflow of your
        organization into a more productive environment, adopting paperless
        philosophy, avoiding duplicating data, integrating third party services,
        web development, app development, graphic design, video editing,
        tweaking your social media, data entry, you name it!
      </q-card-section>

      <q-card-section tag="p">
        Small or big task, you can count on me!
      </q-card-section>
    </q-card>

    <!-- The Contact Form -->
    <TheContactForm />

    <!-- The Tech Stack -->
    <TheTechStack />
  </q-page>

  <!-- <p><small>Ethical Code: I do not work for business related to Politics, Religion or Arms Industry.</small></p>
        <p>
          <small>
            Availability: Due the lack of availability, I’ve decided to stop working with startups, accepting only
            business with 3 or more years of trading, also to give priority to customers from the following countries:
            United Kingdom, Switzerland, Canada, New Zealand, Australia, Germany, Austria, Netherlands, Belgium,
            Estonia, Finland, Denmark, Sweden, France, United States and Japan
          </small>
        </p> -->
  <!-- The Footer -->
  <TheFooter />
</template>
<script setup lang="ts">
import TheContactForm from 'src/components/TheContactForm.vue'
import TheTechStack from 'src/components/TheTechStack.vue'
import TheFooter from 'src/components/TheFooter.vue'
</script>

<style lang="scss" scoped>
// :deep(.q-card) {
//   margin: 1rem;
//   background-color: transparent;
// }

// .q-card {
//   margin: 1rem;
//   background-color: transparent;
// }
</style>
