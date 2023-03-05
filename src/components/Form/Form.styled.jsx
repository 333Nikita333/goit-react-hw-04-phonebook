import styled from 'styled-components';

export const FormBox = styled.form`
  margin-left: auto;
  margin-right: auto;
  padding: 15px;

  background: white;
  border-radius: 30px;

  & label {
    display: block;

    & span {
      display: block;
      margin-bottom: 15px;

      text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
        0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
        0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
        0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const InputName = styled.input`
  display: block;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
`;

export const InputTel = styled(InputName)``;

export const Button = styled.button`
  --color: #560bad;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  width: 8em;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--color);

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }
  &:hover {
    color: #fff;
  }
  &:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }
  &:hover:before {
    top: -30px;
    left: -30px;
  }
  &:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
`;
