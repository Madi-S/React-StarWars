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
        </nav>
    )
}

export default Navbar
