<template>
    <div class="main-container">
        <div class="nav-container">
            <UButton size="2xs" style="height: 60%;">button</UButton>
            <UButton size="2xs" style="height: 60%;">button2</UButton>
        </div>
        <slot></slot>
    </div>
</template>

<style>
#__nuxt {
    height: 100%;
}
body {
    height: 100%;
}
html {
    height: 100%;
    width: 100%;
}
.main-container {
    width: 100%;
    height: 80%;
}
.nav-container {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 95%;
    height: 10%;
    background-color: rgb(48, 42, 42);
    margin: auto;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: 0.5rem 0.5rem rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
}
</style>