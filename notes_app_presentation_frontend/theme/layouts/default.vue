<template>
  <div class="ocean-default">
    <Transition name="fade">
      <div>
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
// PUBLIC_INTERFACE
/**
 * Default layout wrapper for Slides with Ocean Professional styling.
 * Provides a simple fade transition between slides.
 */
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms ease, transform 300ms ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
.ocean-default {
  padding: 24px;
}
@media (max-width: 768px) {
  .ocean-default {
    padding: 16px;
  }
}
</style>
