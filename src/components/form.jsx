import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const Morph = keyframes`
    0% { border-radius: 25% 75% 51% 49% / 45% 53% 47% 55%; }
    25% { border-radius: 84% 16% 82% 18% / 72% 35% 65% 28%; }
    50% { border-radius: 23% 77% 35% 65% / 30% 70%; }
    67% { border-radius: 42% 58% 72% 28% / 53% 44% 56% 47%; }
    80% { border-radius: 28% 72% 34% 66% / 47% 61% 39% 53%; }
    100% { border-radius: 25% 75% 51% 49% / 45% 53% 47% 55%; }
`;
const Input = styled.input`
    width: ${(props) => props.width};
    height: 7vmin;
    margin-left: ${(props) => props.marginLeft};
    margin-bottom: 3vmin;
    padding: 4vmin;
    border: .4vmin solid transparent;
    border-radius: 50vmin;
    outline: none;
    font-family: 'Bungee';
    font-size: 2.2vmin;
    color: #fff;
    background-color: royalblue;
    transition border-color .1s ease-in;
    ::placeholder {
        opacity: 1;
    }
    :focus {
        border-color: #fff;
    }
`;
const Textarea = styled.textarea`
    width: 70vmin;
    height: 25vmin;
    margin-bottom: 3vmin;
    padding: 4vmin;
    border: .4vmin solid transparent;
    border-radius: 8vmin;
    outline: none;
    font-family: 'Bungee';
    font-size: 2.2vmin;
    color: #fff;
    transition border-color .1s ease-in;
    background-color: royalblue;
    resize: none;
    ::placeholder {
        opacity: 1;
    }
    :focus {
        border-color: #fff;
    }
`;
const H3 = styled.h3`
  margin-top: 8vmin;
  font-size: 7vmin;
  text-align: center;
  color: royalblue;
`;
const FormComponent = styled.form`
  width: 70vmin;
  margin-left: 12vmin;
`;
const Button = styled.button`
  width: 15vmin;
  height: 10vmin;
  margin-left: 42vmin;
  border: 0;
  font-family: 'Bungee';
  font-size: 3vmin;
  color: #fff;
  background-color: #74b72e;
  transition: color 0.2s ease-in;
  animation: ${Morph} 20s linear infinite -2s;
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;

const Form = () => (
  <>
    <H3>Contact me</H3>
    <FormComponent action="https://getform.io/f/7d858909-0b80-442d-8352-ae3ac90bc05f" method="POST">
      <Input type="text" name="name" placeholder="NAME" width="25vmin" marginLeft="0" />
      <Input type="email" name="email" placeholder="EMAIL" width="42vmin" marginLeft="3vmin" />
      <Input type="text" name="subject" placeholder="SUBJECT" width="70vmin" marginLeft="0" />
      <Textarea name="message" placeholder="MESSAGE" />
      <input type="hidden" className="display-none" name="_gotcha" />
      <Button type="submit">Send</Button>
    </FormComponent>
  </>
);

export default Form;
