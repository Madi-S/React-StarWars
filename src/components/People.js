import { useState } from 'react'
import { useQuery } from 'react-query'
import { sleep } from './../utils'
import Human from './Human'
import Loader from 'react-loader-spinner'

const fetchPeople = async key => {
    const [, page] = key.queryKey
    await sleep(2500)
    const res = await fetch(`http://swapi.dev/api/people?page=${page}`)
    return res.json()
}

const People = () => {
    const [page, setPage] = useState(1)
    const { data, isLoading, error } = useQuery(['people', page], fetchPeople)

    return (
        <div>
            <h2>People #{page}</h2>
            <div className='pagination'>
                <button
                    onClick={() => {
                        if (page > 1) setPage(page - 1)
                    }}
                >
                    Back
                </button>
                <button
                    onClick={() => {
                        if (page < 6) setPage(page + 1)
                    }}
                >
                    Forward
                </button>
            </div>

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
