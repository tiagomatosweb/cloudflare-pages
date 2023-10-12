
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const apiFetch = $fetch.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        async onResponseError({ response}) {
            // showError({ statusCode: response.status })
            // throw createError({
            //     statusCode: 500,
            //     statusMessage: 'Something bad happened on the server',
            //     fatal: true
            //   });

            return Promise.reject(response._data)
        }
    })

    return {
        provide: {
            apiFetch,
        }
    }
})
