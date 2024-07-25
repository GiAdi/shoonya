export default function ListingCard ({data}) {
    return(
        <div style={{border:'1px solid red'}}>
            {data.title}
            <br/>
            {data.description}
            <br/>
            {new Date(data.date).toLocaleDateString()}
            <br/>
            {data.location}
            <br/>
            {data.price}
        </div>
    )
}