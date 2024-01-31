import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import AuthForm from "./AuthForm";
import Loader from "../../ui/Loader";
import Message from "../../ui/Message";

import { useSignup } from "./useSignup";

export default function RegisterForm() {
  const { signUpUser, isPending, error } = useSignup();
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const user = data;
    signUpUser(user);
  };

  if (isPending) return <Loader />;

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthForm.Label>Register</AuthForm.Label>
        <AuthForm.Input
          placeholder="Full name"
          type="text"
          name="fullName"
          register={register}
        />
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
        <AuthForm.ActionButton>Register</AuthForm.ActionButton>
      </AuthForm>
      <Message variant="error" error={error} />
    </>
  );
}
