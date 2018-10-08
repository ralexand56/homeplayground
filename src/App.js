import React from 'react';
import styled from 'styled-components';
import Login from './Login';

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
  margin: ${props => (props.isOn ? '5px' : '0')};
  transition: all 0.5s ease;
`;

const Section1 = styled.section`
  grid-area: sect1;
  padding: 10px;
  background-color: red;
  background-image: url('/img/vogue.jpg');
  background-size: cover;
  background-blend-mode: difference;
`;

const Section2 = styled.section`
  grid-area: sect2;
  padding: 10px;

  background-color: white;
  background-image: url('/img/vogue.jpg');
  background-size: cover;
  background-blend-mode: multiply;
`;

const Section3 = styled.section`
  grid-area: sect3;
  padding: 10px;

  background-color: #4e8092;
  background-image: url('/img/vogue.jpg');
  background-size: cover;
  background-blend-mode: multiply;
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

export default class App extends React.Component {
  state = { isOn: false };

  constructor(props) {
    super(props);

    this.state = { isOn: false };
  }

  handleClick = () => this.setState(prevState => ({ isOn: !prevState.isOn }));

  render() {
    return (
      <MainContainer isOn={this.state.isOn}>
        <Aside>
          <MenuItem>
            <button onClick={() => this.handleClick()}>Switch</button>
          </MenuItem>
          <MenuItem>Home</MenuItem>
          {this.state.isOn && <MenuItem>On</MenuItem>}
          <MenuItem>
            <a href="/IRS_Informagic_Home_React/">Informagic</a>
          </MenuItem>
        </Aside>
        <Header isOn={this.state.isOn}>Header</Header>
        <Section1>Section 1</Section1>
        <Section2>Section 2</Section2>
            <Section3>Section 3</Section3>
            <Login name="Nina simone" />
        <Footer>Footer</Footer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto repeat(3, 1fr) auto auto;
  grid-template-areas:
    'header'
    'sect1'
    'sect2'
    'sect3'
    'Login'
    'footer';
  font-size: 1.2rem;
  background: linear-gradient(#077391, #69b4c9);
  height: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 200px 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto auto;
    grid-template-areas: ${props =>
      props.isOn
        ? [
            '"aside header header header"',
            '"aside sect1 sect2 sect3"',
            '"aside footer footer footer"'
          ].join(' ')
        : [
            '"aside header header header "',
            '"aside sect1 sect2 sect3"',
            '"aside Login Login Login"',
            '"aside footer footer footer"'
          ].join(' ')};
  }
`;
