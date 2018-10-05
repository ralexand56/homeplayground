import React from 'react';
import styled from 'styled-components';

const Aside = styled.ul`
  grid-area: aside;
  padding: 10px;
  margin: 0px;
  list-style: none;
  background: rgba(255, 255, 255, 0.5);
  display: none;

   @media screen and (min-width: 768px) {
     display: block;
   }
`;

const Header = styled.header`
  background: lightblue;
  grid-area: header;
  padding: 10px;
`;

const Section1 = styled.section`
  grid-area: sect1;
  background: #3e6b79;
  padding: 10px;
`;

const Section2 = styled.section`
  grid-area: sect2;
  background: #4e8092;
  padding: 10px;
`;

const Section3 = styled.section`
  grid-area: sect3;
  background: #94bfca;
  padding: 10px;
`;

const Footer = styled.footer`
  grid-area: footer;
  background: #c9bfb0;
  padding: 10px;
`;

const MenuItem = styled.li`
  text-align: left;
  color: #077391;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  a {
    color: #077391;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
  }

  a:hover {
    opacity: 0.5;
  }
`;

const App = ({ className }) => (
  <div className={className}>
    <Aside>
      <MenuItem>Home</MenuItem>
      <MenuItem>
        <a href="/IRS_Informagic_Home_React/">Informagic</a>
      </MenuItem>
    </Aside>
    <Header>Header</Header>
    <Section1>Section 1</Section1>
    <Section2>Section 2</Section2>
    <Section3>Section 3</Section3>
    <Footer>Footer</Footer>
  </div>
);

export default styled(App)`
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto repeat(3, 1fr) auto;
  grid-template-areas:
    'header'
    'sect1'
    'sect2'
    'sect3'
    'footer';
  font-size: 1.2rem;
  background: linear-gradient(#077391, #69b4c9);
  height: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 200px 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      'aside header header header'
      'aside sect1 sect2 sect3'
      'aside footer footer footer';
  }
`;
