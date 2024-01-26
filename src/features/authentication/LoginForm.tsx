import AuthForm from "./AuthForm";

export default function LoginForm() {
  return (
    <AuthForm>
      <AuthForm.Label>Login</AuthForm.Label>
      <AuthForm.Input placeholder="Email" type="email" />
      <AuthForm.Input placeholder="Password" type="password" />
      <AuthForm.ForgotPasswordLink />
      <AuthForm.ActionButton>Login</AuthForm.ActionButton>
    </AuthForm>
  );
}
