const FortuneCookie = ({data}) => {
    return(
        <article className="article">
            <h2 className= "title">Galleta de la fortuna</h2>
            <div className="info">
                <h4>
                    {data.phrase}
                </h4>
                <p>
                    {data.author}
                </p>
            </div>
        </article>
    )
}
export default FortuneCookie