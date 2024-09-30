const CloseModalButton = ({onClose}) => {
  return (
    <button
      onClick={() => onClose()}
      className="relative overflow-x-hidden border border-teal-950 py-1 md:py-2 px-2 md:px-4 mx-2 text-teal-950 font-bold rounded inline-flex items-center group"
    >
      <span className="relative z-10 flex items-center group-hover:text-white duration-700">
        Close
      </span>
      <div className="absolute inset-0 bg-teal-950 transition-transform duration-1000 transform -translate-y-full group-hover:translate-y-0"></div>
    </button>
  );
};

export default CloseModalButton;
