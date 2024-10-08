import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const userId = localStorage.getItem('id');
  const imagePlaceholder =
    'https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg';
  const urlUsers = 'https://67040d0eab8a8f892732c2b5.mockapi.io/users';
  const [imageUrl, setImageUrl] = useState(imagePlaceholder);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get(`${urlUsers}/${userId}`).then((response) => {
      setImageUrl(response.data.avatar);
    });
  }

  return (
    <nav className="xl:w-1/5 w-20 h-full flex flex-col xl:pr-4 max-md:hidden gap-2">
      <a
        href="#"
        className="group flex items-center mt-5 py-2 px-2 text-base leading-6 font-extrabold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          fill="white"
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </a>
      <Link
        to={'../home'}
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-extrabold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          className="mr-4 h-6 w-6 "
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
          />
        </svg>
        الرئيسية
      </Link>
      <a
        href="#"
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-extrabold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          className="mr-4 h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
        </svg>
        استكشاف
      </a>
      <a
        href="#"
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-bold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          className="mr-4 h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
        الإشعارات
      </a>
      <a
        href="#"
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-bold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          className="mr-4 h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        الرسائل
      </a>
      <a
        href="#"
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-bold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          className="mr-4 h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        </svg>
        Grok
      </a>
      <a
        href="#"
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-bold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          className="mr-4 h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        </svg>
        القوائم
      </a>
      <a
        href="#"
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-bold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          className="mr-4 h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        </svg>
        الإشارات المرجعية
      </a>

      <a
        href="#"
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-bold rounded-full hover:bg-gray-900 w-max "
      >
        <svg
          className="mr-4 h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
        الإعدادات
      </a>

      <Link
        to={'../profile'}
        className="group flex items-center ps-2 pe-4 py-2 text-base leading-6 font-bold rounded-full hover:bg-gray-900 w-max "
      >
        <img
          src={imageUrl}
          alt="User Avatar"
          className="h-10 w-10 rounded-full"
        />
        الملف الشخصي
      </Link>
    </nav>
  );
}

export default SideBar;
