import { useState } from "react";
import { BEONSCHOOL, CreatedAt } from "../../../../../../utils/common/common";

const CourseDetailModal = ({ course }) => {
  const [isAccordion, setIsAccordion] = useState(null);

  const handleAccordion = (content) => {
    setIsAccordion(isAccordion === content ? null : content);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between w-full">
        <div className="w-2/3 mr-5">
          <div className="flex justify-between">
            <div className="mr-5">
              <img
                className="rounded-2xl"
                src={`${BEONSCHOOL}/storage/${course.thumbnail_url}`}
                alt={course.title}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {course.title}{" "}
                <span className="text-sm capitalize text-indigo-700">
                  {course.level}
                </span>
              </h1>
              <ul className="flex flex-wrap my-3">
                <li className="flex items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#042f2e"
                    className="h-[1rem]"
                  >
                    <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>
                  <span className="ms-2 text-sm">
                    {course.section_content_count} lession
                  </span>
                </li>

                <li className="flex items-center mb-3 mx-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#042f2e"
                    className="h-[1rem]"
                  >
                    <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
                  </svg>
                  <span className="ms-2 text-sm">
                    {CreatedAt(course.created_at)}
                  </span>
                </li>
                {course.tags.length !== 0 && (
                  <li className="flex items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="#042f2e"
                      className="h-[1rem]"
                    >
                      <path d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    <span className="ms-2 text-sm">
                      {course.tags.map((tag) => tag.title).join(", ")}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="my-5">
            <h2 className="text-lg font-bold tracking-tight text-gray-900 my-3">
              About This Course
            </h2>
            <p>{course.short_description}</p>

            <hr className="my-7" />

            <p>{course.long_description}</p>
          </div>
        </div>

        <div className="w-1/3">
          <h1 className="text-2xl font-serif font-bold tracking-tight text-gray-900 mb-5">
            Course contents
          </h1>
          <ul>
            {course.sections.map((section) => (
              <div key={section.id}>
                <li
                  className="flex justify-between bg-gray-200 rounded cursor-pointer p-3"
                  onClick={() => handleAccordion(section.contents)}
                >
                  <span>{section.title}</span>

                  {section.contents.length > 0 && (isAccordion === section.contents ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="#042f2e"
                        className="h-[20px]"
                      >
                        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        fill="#042f2e"
                        className="h-[20px]"
                      >
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                      </svg>
                    </span>
                  ))}
                </li>
                <ul className="p-3">
                  {isAccordion === section?.contents &&
                    section.contents.map((content) => (
                      <li
                        key={content.order}
                        className="flex items-center bg-gray-200 rounded font-thin tracking-tight cursor-pointer p-3 mb-2"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            fill="#042f2e"
                            className="h-[20px] mr-3"
                          >
                            <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                          </svg>
                        </span>
                        <span>{content.title}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;
