import styled from 'styled-components';

export const Li = styled.li`
  margin: 3px;
  padding: 3px 3px;
  display: inline-block;
  justify-content: space-between;
  width: 170px;
  color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    background-color: #ffb268;
  }
`;

export const DateFormat = styled.h1`
  color: grey;
`;

export const H1 = styled.h1`
  font-size: 20px;
  text-align: center;
  color: white;
`;

export const Span = styled.span`
  margin: 5px;
  padding: 5px 5px;
  color: white;
`;

export const Img = styled.img`
  height: auto;
  width: auto;
  padding-bottom: 10px;
  color: white;
`;

export const Ul = styled.ul`
  margin: 0 0;
  padding: 0 0 0 0;
`;

export const Section = styled.section`
  text-align: center;
`;
