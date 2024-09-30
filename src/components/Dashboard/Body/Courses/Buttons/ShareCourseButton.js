const ShareCourseButton = () => {
  return (
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
  );
};

export default ShareCourseButton;
