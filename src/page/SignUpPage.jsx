import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [inputName, setInputName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [nameAlert, setNameAlert] = useState('');
  const [accountAlert, setAccountAlert] = useState('');
  const [emailAlert, setEmailAlert] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');
  const urlUsers = 'https://67040d0eab8a8f892732c2b5.mockapi.io/users';
  const navigate = useNavigate();

  function handleSignUp() {
    let valid = true;

    if (inputName === '') {
      valid = false;
      setNameAlert('border-red-400');
    } else {
      setNameAlert('');
    }
    if (accountName === '') {
      valid = false;
      setAccountAlert('border-red-400');
    } else {
      setAccountAlert('');
    }

    if (inputEmail === '') {
      valid = false;
      setEmailAlert('border-red-400');
    } else if (!/\S+@\S+\.\S+/.test(inputEmail)) {
      valid = false;
      setEmailAlert('border-red-400');
    } else {
      setEmailAlert('');
    }

    if (inputPassword.length < 5) {
      valid = false;
      setPasswordAlert('border-red-400');
    } else {
      setPasswordAlert('');
    }

    if (valid) {
      axios
        .post(urlUsers, {
          userName: inputName,
          accountName: accountName,
          email: inputEmail,
          password: inputPassword,
          posts: [],
          following: [],
          followers: [],
          avatar: '',
          repostedPosts: [],
          likedPosts: [],
        })
        .then((response) => {
          console.log(response);
          setInputName('');
          setAccountName('');
          setInputEmail('');
          setInputPassword('');
          navigate('../login');
        });
    }
  }

  return (
    <div className="container">
      <div className="flex justify-center items-center min-h-screen text-center gap-5">
        <div className="w-[50%] max-md:w-full flex flex-col items-center bg-[#242d35] p-8 rounded-md">
          <h1 className="text-3xl font-bold mb-4 text-white">سجل حساب جديد</h1>
          <form className="w-full max-w-sm text-right mx-auto">
            <div className="mb-4">
              <label
                className="mx-2 block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                :الأسم
              </label>
              <input
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
                className={`peer w-full bg-transparent outline-none text-base py-3 px-4 rounded-md border-2 ${
                  nameAlert === '' ? `border-dim-200` : nameAlert
                } focus:border-[#4070f4] focus:shadow-md`}
                id="name"
                type="text"
                value={inputName}
              />
            </div>
            <div className="mb-4">
              <label
                className="mx-2 block text-white text-sm font-bold mb-2"
                htmlFor="accountName"
              >
                :اسم الحساب
              </label>
              <input
                onChange={(e) => {
                  setAccountName(e.target.value);
                }}
                className={`peer w-full bg-transparent outline-none text-base py-3 px-4 rounded-md border-2 ${
                  accountAlert === '' ? `border-dim-200` : accountAlert
                } focus:border-[#4070f4] focus:shadow-md`}
                id="accountName"
                type="text"
                value={accountName}
              />
            </div>
            <div className="mb-4">
              <label
                className="mx-2 block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                :الايميل
              </label>
              <input
                className={`peer w-full bg-transparent outline-none text-base py-3 px-4 rounded-md border-2 ${
                  emailAlert === '' ? `border-dim-200` : emailAlert
                } focus:border-[#4070f4] focus:shadow-md`}
                id="email"
                type="email"
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
                value={inputEmail}
              />
            </div>
            <div className="mb-4">
              <label
                className="mx-2 block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                :كلمة السر
              </label>
              <input
                className={`peer w-full bg-transparent outline-none text-base py-3 px-4 rounded-md border-2 ${
                  passwordAlert === '' ? `border-dim-200` : passwordAlert
                } focus:border-[#4070f4] focus:shadow-md`}
                id="password"
                type="password"
                onChange={(e) => {
                  setInputPassword(e.target.value);
                }}
                value={inputPassword}
              />
            </div>
            <p className="text-white">
              هل لديك حساب؟{' '}
              <Link to={'./login'} className="text-blue-500">
              تسجيل الدخول
              </Link>
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSignUp();
                }}
                className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              >
                تسجيل جديد
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
