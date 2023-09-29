import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import auth from "@/firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';



const LoginPage = () => {


  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  console.log(user)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email,data.password)
  };

  return (
    <div>
      <Head>
        <title>W-NP Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <button onClick={()=>signIn("google",{
             callbackUrl:"http://localhost:3000/"
          })}>Google</button>
          <button  onClick={()=>signIn("github",{
            callbackUrl:"http://localhost:3000/"
          })}>GitHub</button>
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register("email", { required: true })} type="email" />
          <label htmlFor="">Your Password</label>
          <input {...register("password", { required: true })}  type="password" />
          <button type="submit">Login</button><br></br>
          <Link href="/signup">Create a new Account!</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;



