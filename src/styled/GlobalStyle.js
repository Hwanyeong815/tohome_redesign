import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  body {
    font-size: 16px;
    line-height: 1.6;
    color:#333;
  }
  a, button {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  
  .inner { width:1440px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%; }
  .main h2 { text-align: center; font-size: 20px;   }
   button { border:none; cursor: pointer; }

   .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

export default GlobalStyle;
