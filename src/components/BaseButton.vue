<template>
  <button
    v-bind="$attrs"
    class="
      inline-flex
      justify-center
      items-center
      font-regular
      rounded
      border-2 border-brand-dark
      hover:border-brand-darkDarken
      ease-linear
      duration-200
      bg-transparent
    "
    :class="propClasses"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  size: {
    type: String,
    default: "md",
    validator(value) {
      return ["sm", "md", "lg"].includes(value)
    }
  },
  block: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  }
})

const propClasses = computed(() => {
  const size = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-1",
    lg: "px-5 py-2 text-lg"
  }[props.size]
  const width = props.block ? "w-full" : ""
  const outline = props.outline
    ? "text-brand-dark hover:text-brand-darkDarken"
    : "text-brand-light bg-brand-dark hover:bg-brand-darkDarken"

  return [size, width, outline]
})
</script>
