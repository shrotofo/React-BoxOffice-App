import styled from 'styled-components'

const Details=(props)=>{
    const{status,premiered,network}=props;

    return(
        <DetailsWrapper>
            <p>Status: {status}</p>
            <p>
                premeired : {premiered}{!!network && `on ${network.name}`}
            </p>
        </DetailsWrapper>
    );
};
export default Details;

const DetailsWrapper = styled.div`
p {
  margin: 5px 0;
  span {
    font-weight: bold;
    
    
  }
  color:#b8adad
  
}
`;