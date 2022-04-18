import heroImg from "../../assets/nasa.jpg"

export default function Hero() {
    return (
        <div className="mx-10 mt-10 rounded flex justify-between items-center py-10 bg-slate-500">
            <div className="w-2/5 relative mx-10">
                <img className="rounded-xl w-full" src={heroImg} alt="hero_section" />
            </div>
            <div className="w-3/5">
                <div className="text-6xl">Hero Section</div>
                <div className="text-3xl mt-3">Lorem ipsum dolor sit amet.</div>
                <div className="text-xl mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, expedita.</div>
            </div>
        </div>
    )
}