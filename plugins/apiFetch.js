export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig().public

    const apiFetch = $fetch.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    })

    return {
        provide: {
            apiFetch,
        }
    }
})
