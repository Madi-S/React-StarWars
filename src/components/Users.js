import { useInfiniteQuery, useQueryClient } from 'react-query'
import Loader from 'react-loader-spinner'
import { sleep } from './../utils'

const fetchInfiniteUsers = async ({ pageParam = 1 }) => {
    try {
        const res = await fetch(`https://reqres.in/api/users?page=${pageParam}`)
        const data = await res.json()
        await sleep(2500)
        return data
    } catch (err) {
        throw new Error('Error fetching when users: ' + err)
    }
}

const Users = () => {
    const queryClient = useQueryClient()
    const {
        data,
        isLoading,
        isFetching,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        error
    } = useInfiniteQuery('users', fetchInfiniteUsers, {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.page < lastPage.total_pages) return lastPage.page + 1
            return false
        }
    })

    console.log('Data:', data)

    return (
        <div>
            <h2>Users</h2>

            {error && <div className='error'>Error fetching data</div>}
            {isLoading && (
                <div className='loader'>
                    <Loader
                        type='TailSpin'
                        color='#ffff57'
                        height={80}
                        width={80}
                    />
                </div>
            )}
            <div className='data'>
                {data &&
                    data.pages.map(page => {
                        return page.data.map(user => (
                            <User key={user.id} user={user} />
                        ))
                    })}
                {!isLoading && isFetching && (
                    <div className='loader'>
                        <Loader
                            type='TailSpin'
                            color='#ffff57'
                            height={80}
                            width={80}
                        />
                    </div>
                )}
                {hasNextPage && <button onClick={fetchNextPage}>Load more</button>}
            </div>
        </div>
    )
}

const User = ({ user }) => {
    return (
        <div className='card'>
            <h3>{user.email}</h3>
            <p>First name - {user.first_name}</p>
            <p>Last name - {user.last_name}</p>
        </div>
    )
}

export default Users
