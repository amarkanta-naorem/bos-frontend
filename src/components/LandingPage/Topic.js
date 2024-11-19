import { TopicsObject } from "../../utils/TopicsObject"

const Topic = () => {
    return (
        <div className="m-10">
            <ul className="flex flex-wrap items-center justify-center w-full text-white">
                {
                    TopicsObject.map((topic, index) => (
                        <li
                            key={index}
                            className="flex bg-teal-950 rounded-lg m-3 p-3"
                        >
                            <img src={topic.logo} alt={topic.title} className="w-10" />
                            <p className="inline-flex flex-col line-clamp-2 font-bold mx-2">
                                {topic.title}
                                <span className="font-light text-gray-400 text-[13px]">
                                    series {topic.series} | videos {topic.videos}
                                </span>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Topic;