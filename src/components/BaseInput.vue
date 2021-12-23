<template>
  <div>
    <label :for="uniqueID" v-if="props.label">{{ props.label }}</label>
    <input
      v-bind="$attrs"
      :type="props.type"
      :id="uniqueID"
      class="
        inline-flex
        justify-center
        items-center
        rounded
        border border-brand-gray
        w-full
        font-sans
        outline-none
        focus:shadow-smooth
      "
      :class="propClasses"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { computed } from "vue"
import { v4 as uuid } from "uuid"

const props = defineProps({
  modelValue: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "md",
    validator(value) {
      return ["sm", "md", "lg"].includes(value)
    }
  },
  label: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  id: {
    type: String,
    default: ""
  }
})

const propClasses = computed(() => {
  const size = {
    sm: "py-1 px-2 text-sm",
    md: "py-1 px-2",
    lg: "py-2 px-2 text-lg"
  }[props.size]

  return [size]
})

const uniqueID = computed(() => {
  return props.id || uuid()
})
</script>
