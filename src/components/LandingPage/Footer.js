import BgImageRight from "../../assets/images/right_footer_shape.png"
import BgImageMiddle from "../../assets/images/middle_footer_shape.png"
import BgImageLeft from "../../assets/images/left_footer_shape.png"

const Footer = () => {
    return (
        <div className="relative w-full">
            <div className="relative flex justify-between border-t border-[#252526] rounded-xl mt-10">
                <img src={BgImageLeft} alt="BgImageLeft"/>
                <img src={BgImageMiddle} alt="BgImageMiddle"/>
                <img src={BgImageRight} alt="BgImageRight"/>
            </div>
            <div className="absolute top-3 w-full px-20 text-white">
                <div className="flex flex-col items-center justify-center my-5">
                    <h1 className="text-[2.5rem] font-extrabold w-1/2 text-center">
                        Want us to email you occasionally with BeOnSchool news?
                    </h1>
                    <form className="relative w-1/3 mt-4">
                        <input
                            className="w-full placeholder:text-gray-600 outline-none p-3 bg-[#252526]"
                            type="text"
                            placeholder="//TODO: Enter email address"
                        />
                        <button className="absolute top-1 right-1 bg-blue-600 p-2 rounded-md">Subscribe</button>
                    </form>
                </div>
                <div className="flex items-start justify-between">
                <div className="text-xs">
                    <p className="font-bold my-3">Navigation</p>
                    <ul>
                        <li className="py-1 cursor-pointer hover:text-gray-500">Courses</li>
                        <li className="py-1 cursor-pointer hover:text-gray-500">Roadmap</li>
                        <li className="py-1 cursor-pointer hover:text-gray-500">Blog</li>
                        <li className="py-1 cursor-pointer hover:text-gray-500">Become Affiliate</li>
                        <li className="py-1 cursor-pointer hover:text-gray-500">Need Help</li>
                    </ul>
                </div>
                <div className="text-xs text-center">
                    <p className="font-bold my-3">Contact</p>
                    <ul>
                        <li className="py-1 cursor-pointer hover:text-gray-500">support@beonschool.com</li>
                    </ul>
                </div>
                <div className="text-xs">
                    <p className="font-bold my-3">Social</p>
                    <ul>
                        <li className="py-1 cursor-pointer hover:text-gray-500">Facebook</li>
                        <li className="py-1 cursor-pointer hover:text-gray-500">LinkedIn</li>
                        <li className="py-1 cursor-pointer hover:text-gray-500">GitHub</li>
                    </ul>
                </div>
                </div>
            <p className="text-white text-center my-2">Made with ❤️ in India</p>
            </div>
        </div>
    );
}

export default Footer;