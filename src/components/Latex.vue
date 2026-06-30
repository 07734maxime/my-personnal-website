<template>
  <span v-html="renderedFormula"></span>
</template>

<script setup>
import { computed, useSlots } from 'vue';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const props = defineProps({
  displayMode: { type: Boolean, default: false }
});

const slots = useSlots();

const formula = computed(() => {
  const nodes = slots.default?.() ?? [];
  return nodes
    .map((node) => {  
      if (typeof node.children === 'string') return node.children;
      if (Array.isArray(node.children)) {
        return node.children
          .map((child) => (typeof child.children === 'string' ? child.children : ''))
          .join('');
      }
      return '';
    })
    .join('')
    .trim();
});

const renderedFormula = computed(() => {
  return katex.renderToString(formula.value, {
    displayMode: props.displayMode,
    throwOnError: false
  });
});
</script>