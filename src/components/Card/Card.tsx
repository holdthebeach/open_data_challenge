import './Card.scss'

const Card = (ministry) => {
    const {department, datasets} = ministry.data;

    return(
        <section className="card">
            <header className="card__header">
                <h2 className="card__name">{department}</h2>
                {/* consider better class name for span
                <span className="card__topIndicator">Top Sharer</span> */}
            </header>
            <p className="card__value">{datasets}</p>
        </section>
    )
}

export default Card;