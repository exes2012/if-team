<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" @change="changeLang()">
      <option v-for="(lang, i) in locale" :key="i" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return {
      locale: [
        'en',
        'ru',
        'ua'
      ]
    }
  },
  methods: {
    changeLang() {
      localStorage.setItem('lang', this.$i18n.locale)
    }
  }
}
</script>