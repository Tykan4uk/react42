import { Input } from "../input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import styles from "./styles.module.css";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: IFormValues = {
  firstName: "",
  lastName: "",
  email: ""
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Name must be more than one letter.")
    .max(32, "Too long name. Sorry, change your name.")
    .required("First name is required."),
  lastName: Yup.string()
    .min(2, "Surname must be more than one letter.")
    .max(32, "Too long surname. Sorry, change your name.")
    .required("Surname is required."),
  email: Yup.string()
    .email("Incorrect email.")
    .required("Email is required.")
});

export const CustomForm = () => {
  const {
    handleSubmit,
    formState,
    register,
    reset
  } = useForm<IFormValues>({
    mode: "onChange",
    delayError: 2000,
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(() => {
    reset();
  });

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className={styles['registration']}>
        <Input
          label="First name"
          error={formState.errors.firstName}>
          <input
            className={styles['inputField']}
            {...register("firstName")} />
        </Input>
        <Input
          label="Last name"
          error={formState.errors.lastName}>
          <input
            className={styles['inputField']}
            {...register("lastName")} />
        </Input>
        <Input
          label="Email"
          error={formState.errors.email}>
          <input
            className={styles['inputField']}
            {...register("email")} />
        </Input>
        <button
          className={styles['submitButton']}
          type="submit">Submit</button>
      </form>
    </div>
  );
}