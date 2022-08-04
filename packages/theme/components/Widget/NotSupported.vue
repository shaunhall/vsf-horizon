<template>
  <div class="bg-red-50 text-black p-5 text-sm text-center mx-auto container">
    Currently widget "{{ name }}" is not supported.
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>
