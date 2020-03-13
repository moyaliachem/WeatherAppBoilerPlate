import styled from 'styled-components';

export const Li = styled.li`
  margin: 5px;
  padding: 5px 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);
  display: inline-block;
  justify-content: space-between;
  background-image: linear-gradient(skyblue, blue);
  width: 170px;
  color: #e8e4c9;

  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    color: #e8e4c9;
  }
`;

export const Span = styled.span`
  margin: 5px;
  padding: 5px 5px;
  color: #e8e4c9;
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
