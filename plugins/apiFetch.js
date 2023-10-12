
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const apiFetch = $fetch.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        credentials: 'include',
        headers: {
            ...useRequestHeaders(['cookie']),
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })

    return {
        provide: {
            apiFetch,
        }
    }
})
