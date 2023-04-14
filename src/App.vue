<template>
  <authenticator
      :sign-up-attributes="['name','email']"
  >
    <template v-slot:header>
      <div style="padding: var(--amplify-space-large); text-align: center">
        <p style="font-size: 22px">Demo</p>
      </div>
    </template>

    <template v-slot="{ user, signOut }">
        <h1>Hello {{ user.attributes.name }}!</h1>
        <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';

</script>