export default defineNuxtPlugin(() => {
    const apiFetch = $fetch.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        onRequest(context) {
            if (process.client) {
                context.options.credentials = 'include'
            }
        }
    })

    return {
        provide: {
            apiFetch,
        }
    }
})
