import { useQuery } from 'react-query'
import { GraphQLClient, request } from 'graphql-request'
import { sleep } from './utils'

const useGQLQuery = (key, query, variables, config = {}) => {
    const endpoint = 'https://countries.trevorblades.com/'
    const options = {
        headers: {
            authorization: `Bearer ${config.accessToken}`
        }
    }
    const graphQLClient = new GraphQLClient(endpoint, options)

    const fetchData = async () => {
        await sleep(2500)
        const res = await graphQLClient.request(query, variables)
        return res
    }

    // const fetchData = async () => {
    //     await sleep(2500)
    //     const res = await request(endpoint, query, variables)
    //     return res
    // }

    return useQuery(key, fetchData, config)
}

export default useGQLQuery
