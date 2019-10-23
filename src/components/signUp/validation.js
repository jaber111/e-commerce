import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  password: Yup.string().required("Mot de passe obligatoire"),
  email: Yup.string().email('Invalid email').required('Required'),
  confirmePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default SignInSchema;