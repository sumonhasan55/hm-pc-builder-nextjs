// pages/signup.js
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import styles from '../styles/Login.module.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import auth from '@/firebase/firebase.config';

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      router.back();
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen hero bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className={styles.form}>
          <h3 className='my-5 text-5xl font-bold'>Register!</h3>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Your Email</label>
            <input {...register('email', { required: true })} type="email" className='text-black bg-white '/>
            <label htmlFor="">Your Password</label>
            <input {...register('password', { required: true })} type="password" className='text-black bg-white '  />
            <button className='btn btn-primary ' type="submit">Register</button><br></br><br></br>
            <Link href="/login" className="my-5 mt-5 underline">Already Have An Account?</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
