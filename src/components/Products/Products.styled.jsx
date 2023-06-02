import styled from 'styled-components';

export const List = styled.ul`
  max-width: 1200px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  height: 460px;
  max-width: 300px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const Btn = styled.button`
  margin-top: auto;
`;
