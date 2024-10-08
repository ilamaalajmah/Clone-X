import { useState, useEffect } from 'react';
import axios from 'axios';

function RightBar() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const userId = localStorage.getItem('id');

  const urlUsers = 'https://67040d0eab8a8f892732c2b5.mockapi.io/users';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get(urlUsers)
      .then((response) => {
        const allUsers = response.data;
        const currentUserData = allUsers.find((user) => user.id === userId);
        setCurrentUser(currentUserData);
        setUsers(allUsers.filter((user) => user.id !== userId)); 
      })
      .catch((error) => {
        console.error('خطأ في جلب المستخدمين:', error);
      });
  };

  const handleFollowToggle = (id) => {
    if (currentUser.following.includes(id)) {
      axios
        .get(`${urlUsers}/${id}`)
        .then((response) => {
          const followedUser = response.data;
          const updatedFollowers = followedUser.followers.filter(
            (followerId) => followerId !== userId
          );

          axios
            .put(`${urlUsers}/${id}`, { followers: updatedFollowers })
            .then(() => {
              const updatedFollowing = currentUser.following.filter(
                (followingId) => followingId !== id
              );

              axios
                .put(`${urlUsers}/${userId}`, { following: updatedFollowing })
                .then(() => {
                  setCurrentUser({
                    ...currentUser,
                    following: updatedFollowing,
                  });
                  fetchUsers();
                })
                .catch((error) => {
                  console.error('خطأ في تحديث المتابعات:', error);
                });
            })
            .catch((error) => {
              console.error('خطأ في تحديث المتابعين:', error);
            });
        })
        .catch((error) => {
          console.error('خطأ في جلب المستخدم المتابع:', error);
        });
    } else {
      axios
        .get(`${urlUsers}/${id}`)
        .then((response) => {
          const followedUser = response.data;
          const updatedFollowers = [...followedUser.followers, userId];

          axios
            .put(`${urlUsers}/${id}`, { followers: updatedFollowers })
            .then(() => {
              const updatedFollowing = [...currentUser.following, id];

              axios
                .put(`${urlUsers}/${userId}`, { following: updatedFollowing })
                .then(() => {
                  setCurrentUser({
                    ...currentUser,
                    following: updatedFollowing,
                  });
                  fetchUsers();
                })
                .catch((error) => {
                  console.error('خطأ في تحديث المتابعات:', error);
                });
            })
            .catch((error) => {
              console.error('خطأ في تحديث المتابعين:', error);
            });
        })
        .catch((error) => {
          console.error('خطأ في جلب المستخدم المتابع:', error);
        });
    }
  };

  return (
    <div dir="rtl" className="hidden w-[30%] xl:block">
      <div className="relative m-2">
        <svg
          className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2"
          fill="white"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 488.4 488.4"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
              </g>
            </g>
          </g>
        </svg>

        <input
          type="text"
          className="w-full bg-dim-400 border-dim-400 text-gray-100 focus:outline-none font-normal h-9 pl-12 text-sm rounded-full text-right"
          placeholder="ابحث في تويتر"
        />
      </div>

      <div className="bg-dim-700 rounded-2xl m-2">
        <h3 className="text-white font-bold p-3 border-b border-dim-200 text-right">
          ما يحدث
        </h3>

        <div className="p-3 border-b border-dim-200 text-right">
          <h4 className="font-bold text-white">#فزعه الشعب السعودي</h4>
          <p className="text-xs text-gray-400">800.1K منشور</p>
        </div>
        <div className="p-3 border-b border-dim-200 text-right">
          <h4 className="font-bold text-white">#الديوان الملكي</h4>
          <p className="text-xs text-gray-400">30.5K منشور</p>
        </div>
        <div className="p-3 border-b border-dim-200 text-right">
          <h4 className="font-bold text-white">#الرياض الان</h4>
          <p className="text-xs text-gray-400">22.2K منشور</p>
        </div>
        <div className="p-3 border-b border-dim-200 text-right">
          <h4 className="font-bold text-white">#معرض طويق لتوظيف</h4>
          <p className="text-xs text-gray-400">10.7K منشور</p>
        </div>

        <div className="text-blue-400 p-3 cursor-pointer text-right">عرض المزيد</div>
      </div>
    </div>
  );
}

export default RightBar;
