"use client";

export default function Users() {
  const users = [
    { name: "علی رضایی", phone: "09126557799", title: "ادمین", status: "فعال" },
    {
      name: "نگار کریمی",
      phone: "09123456576",
      title: "معاون",
      status: "غیر فعال",
    },
    { name: "علی رضایی", phone: "09123456576", title: "ادمین", status: "فعال" },
    {
      name: "نگار کریمی",
      phone: "09123456576",
      title: "معاون",
      status: "فعال",
    },
    {
      name: "علی رضایی",
      phone: "09123456576",
      title: "ادمین",
      status: "غیر فعال",
    },
  ];

  return (
    <div className="flex min-h-screen truncate items-baseline justify-center from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br">
      <div className="overflow-x-auto relative shadow-md rounded-lg m-2 lg:m-10">
        <table className="w-full  text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                نام کاربری
              </th>
              <th scope="col" className="py-3 px-6">
                شماره تماس
              </th>
              <th scope="col" className="py-3 px-6">
                عنوان
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
                <td className="py-4 px-6">{user.name}</td>
                <td className="py-4 px-6">{user.phone}</td>
                <td className="py-4 px-6">{user.title}</td>
                <td className="py-4 px-6">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
