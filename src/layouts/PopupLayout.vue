<template>
    <div class="flex h-screen min-h-screen w-[800px] flex-col bg-green-500">

        <header class="border-b px-4 py-3">
            <h1 class="text-lg font-semibold">RoundIt!</h1>  
        </header>

        <main class="flex-1 p-4">
            <slot />
        </main>

    </div>
</template>