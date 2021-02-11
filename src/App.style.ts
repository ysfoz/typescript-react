import styled,{ createGlobalStyle } from 'styled-components'
import BGimage from './assets/background.jpg'

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
body {
    background-image: url(${BGimage});
    background-size:cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center
}

* {
    box-sizing:border-box;
    font-family: 'Indie Flower', cursi, sans-serif
}


`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 3rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 5rem;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #6ff9ff);
    border: 2px solid #0095a8;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size:1rem;
  }
  .start {
    max-width: 200px;
  }

  label {
    color:white;
    font-size:2rem;
  }
  select{
    margin-left:20px;
    font-size:1.3rem;
  }
 
  
`;