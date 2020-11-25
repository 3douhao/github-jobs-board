import styled from '@emotion/styled'

const Container = styled.main`
  // display: grid;
  // grid-template-columns: repeat(1, 1fr);
  // justify-content: space-around;
  // align-items: center;
  // justify-items: center;
  width: 80vw;
  background: lightgray;
  padding: 2rem;
  font-size: 1rem;
  margin: auto;
  .active {
    cursor: initial;
    background: lightblue;
    width: 30px;
  }
  button {
    background: none;
    margin: 5px;
    // color: royalblue;
    outline: none;
  }
  label {
    font-size: 0.5rem;
  }
`
export default Container
