<script setup lang="ts">
import Logo from '@/components/common/Logo.vue';

</script>

<template>
    <div class="flex h-200 min-h-screen w-90 flex-col bg-white">

        <header class="border-b px-4 py-3">
            <logo class="h-8" />
            <h1 class="text-lg font-semibold">RoundIt!</h1>  
        </header>

        <main class="flex-1 p-4">
            <slot />
        </main>

    </div>
</template>9