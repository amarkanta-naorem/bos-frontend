import { Fragment } from "react";

const ViewModal = ({ isVisible, onClose }) => {
  const handleModal = (e) => {
    e.target.id === "modal-pop-up" && onClose();
  };
  return (
    isVisible && (
      <Fragment>
        <div
          id="modal-pop-up"
          className="fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
          onClick={handleModal}
        >
          <div className="w-[60rem] h-[40rem] overflow-y-scroll no-scrollbar bg-white rounded-lg">
            <div className="sticky top-0 bg-gray-50 shadow-sm flex justify-between p-5 z-10">
              <h1 className="text-lg font-semibold text-teal-950">
                Course Details
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                height="20px"
                fill="#166534"
                className="cursor-pointer"
                onClick={() => onClose()}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>

            <div className="min-h-[30rem] m-5">
                <h1>Course Name and Others related data</h1>
            </div>

            <div className="sticky bottom-0 bg-gray-50 flex justify-between p-1 px-5 z-10">
              <div className="flex justify-between">
                <button className="relative overflow-x-hidden border border-indigo-700 py-1 md:py-2 px-2 mx-2 text-indigo-700 font-bold rounded inline-flex items-center group">
                  <span className="relative z-10 flex items-center group-hover:text-white duration-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="#4338ca"
                      className="w-4 h-4 me-2 group-hover:fill-white duration-700"
                    >
                      <path d="M352 224l-46.5 0c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8l-2.5 0c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144l80 0 0-61.3C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2l-3.7 0c-17.7 0-32-14.3-32-32l0-64zM80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112C0 67.8 35.8 32 80 32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96z" />
                    </svg>
                    Share
                  </span>
                  <div className="absolute inset-0 bg-indigo-700 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
                </button>

                <button className="relative overflow-x-hidden border border-[#F40F02] py-1 md:py-2 px-2 mx-2 text-[#F40F02] font-bold rounded inline-flex items-center group">
                  <span className="relative z-10 flex items-center group-hover:text-white duration-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="#F40F02"
                      className="w-4 h-4 me-2 group-hover:fill-white duration-700"
                    >
                      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                    </svg>
                    Delete
                  </span>
                  <div className="absolute inset-0 bg-[#F40F02] transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
                </button>

                <button className="relative overflow-x-hidden border border-teal-950 py-1 md:py-2 px-2 md:px-4 mx-2 text-teal-950 font-bold rounded inline-flex items-center group">
                  <span className="relative z-10 flex items-center group-hover:text-white duration-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#115e59"
                      className="w-4 h-4 me-2 group-hover:fill-white duration-700"
                    >
                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                    </svg>
                    Update
                  </span>
                  <div className="absolute inset-0 bg-teal-950 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
                </button>
              </div>

              <button
                onClick={() => onClose()}
                className="relative overflow-x-hidden border border-teal-950 py-1 md:py-2 px-2 md:px-4 mx-2 text-teal-950 font-bold rounded inline-flex items-center group"
              >
                <span className="relative z-10 flex items-center group-hover:text-white duration-700">
                  Close
                </span>
                <div className="absolute inset-0 bg-teal-950 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default ViewModal;
