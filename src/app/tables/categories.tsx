"use client";

export default function Categories() {
  const users = [
    {
      ads: "مسکن",
      adsTitle: "اجاره آپارتمان",
      user: "علی رضایی",
      phone: "09124374411",
      date: "1398/2/5",
      status: "منقضی شده",
    },
    {
      ads: "خودرو",
      adsTitle: "خرید خودرو سواری ",
      user: "طاهر محمدس",
      phone: "09114595588",
      date: "1402/2/5",
      status: "فعال ",
    },
    {
      ads: "مسکن",
      adsTitle: "اجاره آپارتمان",
      user: "علی رضایی",
      phone: "09124374411",
      date: "1398/2/5",
      status: "منقضی شده",
    },
    {
      ads: "خودرو",
      adsTitle: "خرید خودرو سواری ",
      user: "طاهر محمدس",
      phone: "09114595588",
      date: "1402/2/5",
      status: "فعال ",
    },
    {
      ads: "مسکن",
      adsTitle: "اجاره آپارتمان",
      user: "علی رضایی",
      phone: "09124374411",
      date: "1398/2/5",
      status: "منقضی شده",
    },
    {
      ads: "خودرو",
      adsTitle: "خرید خودرو سواری ",
      user: "طاهر محمدس",
      phone: "09114595588",
      date: "1402/2/5",
      status: "فعال ",
    },
    {
      ads: "مسکن",
      adsTitle: "اجاره آپارتمان",
      user: "علی رضایی",
      phone: "09124374411",
      date: "1398/2/5",
      status: "منقضی شده",
    },
    {
      ads: "خودرو",
      adsTitle: "خرید خودرو سواری ",
      user: "طاهر محمدس",
      phone: "09114595588",
      date: "1402/2/5",
      status: "فعال ",
    },
  ];

  return (
    <div className="flex min-h-screen truncate items-baseline justify-center from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br">
      <div className="overflow-x-auto relative shadow-md rounded-lg m-2 lg:m-10">
        <table className="w-full  text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                نوع دسته بندی
              </th>
              <th scope="col" className="py-3 px-6">
                عنوان دسته
              </th>
              <th scope="col" className="py-3 px-6">
                کاربر
              </th>
              <th scope="col" className="py-3 px-6">
                شماره تماس
              </th>
              <th scope="col" className="py-3 px-6">
                تاریخ ایجاد دسته
              </th>
              <th scope="col" className="py-3 px-6">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="py-4 px-6">{user.ads}</td>
                <td className="py-4 px-6">{user.adsTitle}</td>
                <td className="py-4 px-6">{user.user}</td>
                <td className="py-4 px-6">{user.phone}</td>
                <td className="py-4 px-6">{user.date}</td>
                <td className="py-4 px-6">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
