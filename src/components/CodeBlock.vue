<template>
  <div v-html="highlightedCode"></div>
</template>

<script setup>
import { ref, onMounted, useSlots } from 'vue';
import { createHighlighter } from 'shiki';

const props = defineProps({
  lang: { type: String, default: 'rust' }
});

const highlightedCode = ref('');

onMounted(async () => {
  // Récupère le contenu du slot par défaut comme texte
  const slots = useSlots();
  const slotNodes = slots.default ? slots.default() : [];
  const codeText = slotNodes.map(n => (typeof n.children === 'string' ? n.children : '')).join('');
  // On crée l'instance du highlighter
  const highlighter = await createHighlighter({
    themes: ['github-light'],
    langs: ['rust']
  });

  // On génère le HTML
  highlightedCode.value = highlighter.codeToHtml(codeText, {
    lang: props.lang,
    theme: 'github-light',
  });
});
</script>