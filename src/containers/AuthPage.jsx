import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Form = styled.form`
	/* position:absolute; */
	/* left:50%; */
	/* top:50%; */
	/* transform: translate(-50%,-50%); */
  background-color: var(--colors-ui-base);
	border-radius:3px;
	padding:30px;
  border-radius: 7px;
  box-shadow: var(--shadow);
`
const Input = styled.input.attrs({
  // placeholder:'asdasda'
})`
  border:0;
  border-bottom:1px solid #555;  
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:16px;
  color:var(--colors-text);
  :focus {
    border:none;	
    outline:none;
    border-bottom:1px solid var(--text-under);
  }
`
const InputContainer = styled.div`
	position:relative;
	margin-bottom:25px;
`
const InputLabel = styled.label`
	font-size:16px;
	color:var(--colors-text);
	transition: all 0.5s ease-in-out;
`
export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  cursor: pointer;
  margin: 0 auto;
  margin-top: 1rem;
`;

const AuthPage = () => {
  return (
    <FormWrapper>
      <Form>
        <InputContainer>
          <InputLabel>Email:</InputLabel>
          <Input placeholder='' type="email" />
        </InputContainer>
        <InputContainer>
          <InputLabel>Password:</InputLabel>
          <Input placeholder='' type="password" />
        </InputContainer>
        <Button>Log in</Button>
        <p style={{ marginTop: '1rem' }}>Don't have an account. <Link to='/sign-up' style={{ color: 'var(--text-under)' }}>Sing Up</Link></p>
      </Form>

    </FormWrapper>
  )
}

export default AuthPage