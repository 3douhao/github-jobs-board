import styled from '@emotion/styled'

const Card = styled.div`
  box-shadow: 5px 5px 5px gray;
  cursor: pointer;
  width: 70vw;
  margin: auto;
  padding: 5px;
  margin-bottom: 5px;
  summary {
    outline: none;
    display: block;
    ::-webkit-details-marker {
      display: none;
    }
  }
  section {
    display: inline-grid;
    grid-template-columns: 1fr 8fr repeat(3, 2fr);
    align-items: center;
  }
  img {
    width: 50px;
    margin: 5px;
  }
  time {
    justify-self: end;
    align-self: end;
  }
  article {
  }
  h3 {
  }
  em {
    display: inline-block;
    border-radius: 15px;
    // margin: auto 10px;
    width: 100px;
    text-align: center;
    background: antiquewhite;
  }
  span {
    font-size: 0.8rem;
    color: royalblue;
  }
`

export default Card
