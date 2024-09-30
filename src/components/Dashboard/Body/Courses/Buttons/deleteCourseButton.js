const DeleteCourseButton = () => {
  return (
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
  );
};

export default DeleteCourseButton;
