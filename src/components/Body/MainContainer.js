import React from "react";

const MainContainer = () => {
  return (
    <div className="w-[86.5rem] h-[86vh] overflow-x-scroll no-scrollbar bg-gray-100">
      <div className="flex justify-between items-center px-10 pt-5">
        <h1 className="text-2xl font-extrabold text-teal-950">Courses</h1>
        <p className="text-xs text-teal-950">Dashboard / Courses</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row justify-between items-center px-10">
        <div className="flex justify-between items-center w-1/5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="25px"
              fill="#042f2e"
              className="cursor-pointer"
            >
              <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
            </svg>
          </div>
          <div className="relative ml-10">
            <input
              type="search"
              className="w-96 p-2 py-3 rounded-lg bg-white outline-none"
              placeholder="Search..."
            />
            <button className="absolute end-2 top-3.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="20px"
                fill="#042f2e"
                className="cursor-pointer"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-2/5">
          <button className="border border-[#1D6F42] py-2 px-4 mx-2 text-[#1D6F42] font-bold rounded">
            Excel
          </button>
          <button className="border border-[#F40F02] py-2 px-4 mx-2 text-[#F40F02] font-bold rounded">
            PDF
          </button>
          <button className="border border-teal-800 py-2 px-4 mx-2 text-teal-800 font-bold rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#115e59"
              className="w-4 h-4 me-2"
            >
              <path d="M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-112 174.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L128 288l0-224zm0 224l0 48L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0zM512 128l-128 0L384 0 512 128z" />
            </svg>
            Import
          </button>
          <button className="border border-teal-950 py-2 px-4 mx-2 text-teal-950 font-bold rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#042f2e"
              className="w-4 h-4 me-2"
            >
              <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
            Create Course
          </button>
        </div>
      </div>

      <div className="mt-10 mb-20 px-10">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-6">
                <input type="checkbox" value="" className="w-4 h-4" />
              </th>
              <th scope="col" className="px-6 py-6">
                Title
              </th>
              <th scope="col" className="px-6 py-6">
                Short Description
              </th>
              <th scope="col" className="px-6 py-6">
                Author
              </th>
              <th colSpan="3" scope="col" className="px-6 py-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-6">
                <input type="checkbox" value="" className="w-4 h-4" />
              </td>
              <td className="px-6 py-6">React & Tailwind CSS</td>
              <td className="px-6 py-6">
                A short description of a project of React and Tailwind CSS.
              </td>
              <td className="px-6 py-6">John Doe</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  height="20px"
                  fill="#166534"
                  className="cursor-pointer"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="20px"
                  fill="#1e3a8a"
                  className="cursor-pointer"
                >
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height="20px"
                  fill="#991b1b"
                  className="cursor-pointer"
                >
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                </svg>
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-6">
                <input type="checkbox" value="" className="w-4 h-4" />
              </td>
              <td className="px-6 py-6">React & Tailwind CSS</td>
              <td className="px-6 py-6">
                A short description of a project of React and Tailwind CSS.
              </td>
              <td className="px-6 py-6">John Doe</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  height="20px"
                  fill="#166534"
                  className="cursor-pointer"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="20px"
                  fill="#1e3a8a"
                  className="cursor-pointer"
                >
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height="20px"
                  fill="#991b1b"
                  className="cursor-pointer"
                >
                  <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="fixed bottom-0 w-[83.1rem] flex justify-between bg-teal-950 px-10 py-1">
        <p className="text-sx text-white">
          &copy;
          <span className="font-bold italic"> BeOnSchool</span> is proudly owned
          by
          <span className="font-bold italic"> Amarkanta Naorem</span>
        </p>
        <p className="text-sx text-white">
          <span className="font-bold italic">BeOnSchool</span> - Made with 💖 in 
          <span className="font-bold"> Manipur</span>
        </p>
      </div>
    </div>
  );
};

export default MainContainer;
