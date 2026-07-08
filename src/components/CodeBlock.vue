<!-- CodeBlock.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import { createHighlighter } from 'shiki';

const props = defineProps({
  lang: { type: String, default: 'rust' },
  code: { type: String, required: true }
});

const highlightedCode = ref('');

onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-dark'],
    langs: ['rust']
  });
  highlightedCode.value = highlighter.codeToHtml(props.code, {
    lang: props.lang,
    theme: 'github-dark',
  });
});
</script>

<template>
  <div class="max-w-full min-w-0" v-html="highlightedCode"></div>
</template>
