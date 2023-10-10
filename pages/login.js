import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import auth from '@/firebase/firebase.config';

const Login = () => {
  const [signInWithEmailAndPassword, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(data.email, data.password);
      router.back();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen hero bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className={styles.form}>
          <h3 className="my-5 text-5xl font-bold">Login!</h3>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Your Email</label>
            <input {...register('email', { required: true })} type="email" className="text-black bg-white" />
            <label htmlFor="">Your Password</label>
            <input {...register('password', { required: true })} type="password" className="text-black bg-white" />
            <button className="btn btn-accent" type="submit">
              Login
            </button>
            <br></br>
            <br></br>
            <Link href="/signup" className="my-5 mt-5 underline">
              Create a New Account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
