<template>
  <div class="ocean-default fade-wrap">
    <div class="fade-slot">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// PUBLIC_INTERFACE
/**
 * Default layout wrapper for Slides with Ocean Professional styling.
 * Uses CSS-only transitions to avoid runtime component registration issues.
 */
</script>

<style scoped>
.ocean-default {
  padding: 24px;
}
@media (max-width: 768px) {
  .ocean-default {
    padding: 16px;
  }
}

/* Minimal fade utility to avoid importing Transition component */
.fade-wrap .fade-slot {
  transition: opacity 300ms ease, transform 300ms ease;
}
.slidev-page.enter-from .fade-slot,
.slidev-page.leave-to .fade-slot {
  opacity: 0;
  transform: translateY(6px);
}
</style>
