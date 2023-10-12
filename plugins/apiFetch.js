
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const apiFetch = $fetch.create({
        baseURL: config.public.apiURL,
        credentials: 'include',
        headers: {
            ...useRequestHeaders(['cookie']),
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        onRequest({ request, options }) {
            const xsrf = useCookie('XSRF-TOKEN')
            if (xsrf.value) {
                options.headers['X-XSRF-TOKEN'] = xsrf.value
            }

            if (process.server) {
                if (!options.headers.origin) {
                    options.headers.origin = config.public.appURL
                }
            }
        },
        async onResponseError({ response}) {
            if (response.status === 401) {
                const router = useRouter()
                return router.push({ name: 'logout' })
            }

            return Promise.reject('error')
        }
    })

    return {
        provide: {
            apiFetch,
        }
    }
})
