import styled from 'styled-components';

export const Li = styled.li`
  margin: 5px;
  padding: 5px 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);
  display: inline-block;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

export const Span = styled.span`
  margin: 5px;
  padding: 5px 5px;
`;

export const Img = styled.img`
  height: auto;
  width: auto;
  padding-bottom: 10px;
`;
