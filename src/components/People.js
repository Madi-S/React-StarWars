import { useQuery } from 'react-query'
import { sleep } from './../utils'
import Human from './Human'
import Loader from 'react-loader-spinner'

const fetchPeople = async () => {
    await sleep(2500)
    const res = await fetch('http://swapi.dev/api/people')
    return res.json()
}

const People = () => {
    const { data, isLoading, error } = useQuery('people', fetchPeople)

    return (
        <div>
            <h2>People</h2>

            {error && <div className='error'>Error fetching data</div>}
            {isLoading && (
                <div className='loader'>
                    <Loader
                        type='Bars'
                        color='#ffff57'
                        height={80}
                        width={80}
                    />
                </div>
            )}
            {data && (
                <div className='data'>
                    {data.results.map(human => (
                        <Human key={human.name} human={human} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default People
