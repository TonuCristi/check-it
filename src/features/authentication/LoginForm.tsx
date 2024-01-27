import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import AuthForm from "./AuthForm";
import Loader from "../../ui/Loader";

import { useSignin } from "./useSignin";

export default function LoginForm() {
  const { signInUser, isPending, error } = useSignin();
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const user = data;
    signInUser(user);
  };

  if (isPending) return <Loader />;

  if (error) return <div>Something went wrong...</div>;

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthForm.Label>Login</AuthForm.Label>
      <AuthForm.Input
        placeholder="Email"
        type="email"
        name="email"
        register={register}
      />
      <AuthForm.Input
        placeholder="Password"
        type="password"
        name="password"
        register={register}
      />
      <AuthForm.ForgotPasswordLink />
      <AuthForm.ActionButton>Login</AuthForm.ActionButton>
    </AuthForm>
  );
}
