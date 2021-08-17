import gql from 'graphql-tag'
import useGQLQuery from '../useGQLQuery'
import Loader from 'react-loader-spinner'

const GET_COUNTRIES = gql`
    query {
        countries {
            name
            code
            currency
        }
    }
`

const GET_COUNTRY = gql`
    query ($code: ID!) {
        country(code: $code) {
            name
            code
            currency
        }
    }
`

const Countries = () => {
    // Fetch data from custom hook, which uses react-query
    // const { data, isLoading, error } = useGQLQuery('countries', GET_COUNTRY, {
    //     code: 'KZ'
    // })
    const { data, isLoading, error } = useGQLQuery('countries', GET_COUNTRIES)
    return (
        <div>
            <h2>Countries</h2>
            {error && <div className='error'>Error fetching data</div>}
            {isLoading && (
                <div className='loader'>
                    <Loader
                        type='Hearts'
                        color='#ffff57'
                        height={80}
                        width={80}
                    />
                </div>
            )}
            {data && (
                // <Country country={data.country} />
                <div className='data'>
                    {data.countries.map(country => (
                        <Country key={country.name} country={country} />
                    ))}
                </div>
            )}
        </div>
    )
}

const Country = ({ country }) => {
    return (
        <div className='card'>
            <h3>{country.name}</h3>
            <p>Code - {country.code}</p>
            <p>Currency - {country.currency}</p>
        </div>
    )
}

export default Countries
