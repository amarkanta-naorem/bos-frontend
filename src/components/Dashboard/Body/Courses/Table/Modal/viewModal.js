import DeleteCourseButton from "../../Buttons/deleteCourseButton";
import UpdateCourseButton from "../../Buttons/updateCourseButton";
import CourseDetailModal from "./courseDetailModal";

const ViewModal = ({ isVisible, onClose, courseDetails }) => {
  const handleModal = (e) => {
    e.target.id === "modal-pop-up" && onClose();
  };
  return (
    isVisible && (
      <div
        id="modal-pop-up"
        className="fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"
        onClick={handleModal}
      >
        <div className="w-[70rem] h-[40rem] overflow-y-scroll no-scrollbar bg-white rounded-lg">
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

          <div className="min-h-[522px] bg-gray-100">
            <CourseDetailModal course={courseDetails} />
          </div>

          <div className="sticky bottom-0 bg-gray-50 flex justify-end p-1 px-5 z-10">
            {/* <div className="flex justify-between">
              <ShareCourseButton />
            <CloseModalButton onClose={onClose} />
            </div> */}
            <DeleteCourseButton />
            <UpdateCourseButton />
          </div>
        </div>
      </div>
    )
  );
};

export default ViewModal;
