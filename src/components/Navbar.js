const Navbar = ({ setPage, currPage }) => {
    return (
        <nav>
            <button
                onClick={() => {
                    if (currPage !== 'planets') setPage('planets')
                }}
            >
                Plantes
            </button>
            <button
                onClick={() => {
                    if (currPage !== 'people') setPage('people')
                }}
            >
                People
            </button>
            <button
                onClick={() => {
                    if (currPage !== 'countries') setPage('countries')
                }}
            >
                Countries
            </button>
            <button
                onClick={() => {
                    if (currPage !== 'users') setPage('users')
                }}
            >
                Users
            </button>
        </nav>
    )
}

export default Navbar
