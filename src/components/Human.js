const Human = ({ human }) => {
    return (
        <div className='card'>
            <h3>{human.name}</h3>
            <p>Gender - {human.gender}</p>
            <p>Birth year - {human.birth_year}</p>
        </div>
    )
}

export default Human
