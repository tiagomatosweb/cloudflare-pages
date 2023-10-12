export default defineNuxtPlugin(() => {
    const apiFetch = $fetch.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        credentials: 'include',
    })

    return {
        provide: {
            apiFetch,
        }
    }
})
