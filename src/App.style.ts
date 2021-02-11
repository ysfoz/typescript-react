import styled,{ createGlobalStyle } from 'styled-components'
import BGimage from './assets/pc.jpg'
import BGimage2 from './assets/mobile.jpg'

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
}
body {
    background-image: url(${window.screen.width > 750 ? BGimage : BGimage2});
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
type Score ={
  score:number
}

export const Wrapper = styled.div<Score>`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score{
    color: ${({score}) => score >= 5 ? '#76ff03' : '#f50057'};
    font-size: ${window.screen.width > 750 ? '2rem' : '1.5rem'};
    margin: 0;
    margin-bottom:10px;
    font-weight:bold;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #05fdff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(3px 3px #311b92);
    font-size: ${window.screen.width > 750 ? '5rem' : '2.5rem'};
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #05fdff);
    border: 2px solid #37474f;
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
    color:#05fdff;
    font-size: ${window.screen.width > 750 ? '2.5rem' : '1.5rem'}

    

  }
  select{
    margin-left:20px;
    font-size:1.3rem;
  }
 .img {
   width:${window.screen.width < 750 ? '300px' : '700px'};
   height:100%;
   border-radius:20px;
   border: 3px solid #05fdff;
   
 }
 
`;