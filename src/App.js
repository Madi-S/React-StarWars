import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Navbar from './components/Navbar'
import People from './components/People'
import Planets from './components/Planets'
import Countries from './components/Countries'
import Users from './components/Users'

const queryClient = new QueryClient()

function App() {
    const [page, setPage] = useState('planets')
    
    let ContentComponent
    if (page === 'planets') ContentComponent = Planets
    else if (page === 'users') ContentComponent = Users
    else if (page === 'people') ContentComponent = People
    else if (page === 'countries') ContentComponent = Countries

    return (
        <QueryClientProvider client={queryClient}>
            <div className='App'>
                <h1>Star Wars Info</h1>
                <Navbar currPage={page} setPage={setPage} />
                <div className='content'>
                    <ContentComponent />
                </div>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
