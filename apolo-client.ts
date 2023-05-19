import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
    const client = new ApolloClient({
        uri: process.env.API_url,
        cache: new InMemoryCache(),
        headers: {
            Authorization:`apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`
        }
    })

    return client
};