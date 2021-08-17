import { useQuery } from 'react-query'
import { sleep } from './../utils'
import Planet from './Planet'
import Loader from 'react-loader-spinner'

const fetchPlanets = async () => {
    await sleep(2500)
    const res = await fetch('http://swapi.dev/api/planets')
    return res.json()
}

const Planets = () => {
    const { data, isLoading, error } = useQuery('planets', fetchPlanets)

    return (
        <div>
            <h2>Planets</h2>

            {error && <div className='error'>Error fetching data</div>}
            {isLoading && (
                <div className='loader'>
                    <Loader
                        type='Grid'
                        color='#ffff57'
                        height={80}
                        width={80}
                    />
                </div>
            )}
            {data && (
                <div className='data'>
                    {data.results.map(planet => (
                        <Planet key={planet.name} planet={planet} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Planets
