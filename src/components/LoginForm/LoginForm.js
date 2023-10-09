import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Button from 'styled/Button';
import Input from 'styled/Input';
import LabelContainer from 'styled/LabelContainer';
import Form from 'styled/Form';
import { Notify } from 'notiflix'; // Dodaj import Notify

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    } catch (error) {
      // Obsłuż błąd logowania
      logInFailureNotification(); // Wywołaj komunikat błędu
    }
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelContainer>
        <label>Email</label>
        <Input type="email" name="email" placeholder="Enter email" required />
      </LabelContainer>
      <LabelContainer>
        <label>Password</label>
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </LabelContainer>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
