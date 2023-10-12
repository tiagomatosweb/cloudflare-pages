export default defineNuxtPlugin(() => {
    const apiFetch = $fetch.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    })

    return {
        provide: {
            apiFetch,
        }
    }
})
