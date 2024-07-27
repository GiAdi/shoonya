import styled from "styled-components";

export default function ListingCard({ data }) {
    return (
        <CardContainer>
            <StyledImage src={data.image}/>
            <CardTitle>
                {data.title}
            </CardTitle>
            <CardDescription>
                {data.description}
            </CardDescription>

            <ListingDetails>
                <CardRow>
                    Date: {new Date(data.date).toLocaleDateString()}
                </CardRow>
                <CardRow>
                    Location: {data.location}
                </CardRow>
                <CardRow>
                    Price: {data.price}
                </CardRow>
            </ListingDetails>

        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    gap: 0.4em;
    background: moccasin;
    flex: 1 1 calc(33.33% - 6em); 
    flex-wrap: wrap;
    max-width: 32%;
    padding: 2em;
    box-sizing: border-box;

    @media (max-width: 800px) {
        max-width: 100%;
        width: 100%;
        flex: 1;
  }
`;

const CardTitle = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5em;
`;

const CardDescription = styled.span`
    margin-bottom: 0.5em;
`;

const CardRow = styled.span`
`;

const ListingDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2em;
`;

const StyledImage = styled.img`
    height: 10em;
    width: 10em;
    border-radius: 10px;
    @media (max-width: 800px) {
        width: 100%;
  }
`;
