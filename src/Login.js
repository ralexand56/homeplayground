import React from 'react';
import styled, { keyframes } from 'styled-components';

const subtleMove = keyframes`{
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}`;

const TopSection = styled.section`
  grid-row: 2;
  grid-column: 1;
`;

const BottomSection = styled.section`
  background-color: #b4bdb6;
  grid-row: 3;
  grid-column: 1;
`;

const ProfileImage = styled.section`
  grid-row: 2 / 4;
  grid-column: 1;
  position: relative;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  padding: 10px;
  margin: 20px;
  animation: ${subtleMove} 0.5s ease-in-out both;
  background-color: transparent;
  background-image: url('/img/vogue.jpg');
  background-size: cover;
  border: 4px solid #b4bdb6;

  :after {
    content: ' ';
    position: absolute;
    border-radius: 50%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 3px solid #414440;
  }
`;

const ProfileName = styled.header`
  grid-row: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #b4bdb6;
  padding: 20px 20px 0 20px;
  text-align: center;
`;

export const Login = ({ className, name }) => (
  <section className={className}>
    <ProfileName>{name}</ProfileName>
    <TopSection />
    <BottomSection />
    <ProfileImage />
  </section>
);

export default styled(Login)`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  grid-area: Login;
  justify-self: center;
  background: #414440;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;
