import MusicCard from "../components/MusicCard";
import Navbar from "../components/Navbar";
import data from '../db.json';

export default function Music() {
    const info = data[0]
    return (
        <div className="bg-[#EBE8E2] h-full flex flex-col font-inter">
            <Navbar/>
            <div className="flex flex-col items-center mt-5 gap-10">
                    {info.map(item => (
                        <MusicCard id={item.id} title={item.title} link={item.link} month={parseInt(item.date.substring(0, 2), 10) - 1} year={item.date.substring(item.date.length - 4)} composer={item.composer} youtube={data[1].youtube}/>
                    ))}
            </div>
        </div>
    )
}