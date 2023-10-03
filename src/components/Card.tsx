const Card = () => {
    return(
        <section className="card">
            <header className="card__header">
                <h2 className="card__name">title</h2>
                {/*consider better class name for span*/}
                <span className="card__topIndicator">Top Sharer</span>
            </header>
            <p className="card__value">12</p>
        </section>
    )
}

export default Card;