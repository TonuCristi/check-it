import AuthForm from "./AuthForm";

export default function RegisterForm() {
  return (
    <AuthForm>
      <AuthForm.Label>Register</AuthForm.Label>
      <AuthForm.Input placeholder="Full name" type="text" />
      <AuthForm.Input placeholder="Email" type="email" />
      <AuthForm.Input placeholder="Password" type="password" />
      <AuthForm.ActionButton>Register</AuthForm.ActionButton>
    </AuthForm>
  );
}
