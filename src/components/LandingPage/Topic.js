import { TopicsObject } from "../../utils/TopicsObject";

const Topic = () => {
  return (
    <div className="md:m-10">
      <ul className="flex flex-wrap items-center justify-center md:w-full text-white">
        {TopicsObject.map((topic, index) => (
          <li
            key={index}
            className="md:flex items-center cursor-pointer bg-teal-950 rounded-lg m-1 md:m-3 p-2 md:p-3"
          >
            <img src={topic.logo} alt={topic.title} className="w-6 h-6 md:h-auto md:w-10 mx-auto" />
            <p className="inline-flex items-center md:items-start flex-col line-clamp-2 font-bold mx-2">
                <span className="text-[13px] md:text-[16px]">
                    {topic.title}
                </span>
              <span className="font-light text-gray-400 text-[10px] md:text-[13px]">
                series {topic.series} | videos {topic.videos}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topic;
