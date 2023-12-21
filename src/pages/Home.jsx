import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>
            <Marquee className="text-5xl font-mono font-semibold py-3">
                Master Your Day, Conquer Your Goals Using Task Master
            </Marquee>
            <div className="w-3/4 mx-auto">
                <img src="https://i.ibb.co/cXWbb5r/Screenshot-2023-12-21-121154.png" alt="" />
            </div>

            <div>
                <div className="text-5xl font-mono font-semibold text-center mt-10">
                    Users Who Gets Benefited By This
                </div>
                <div className="w-2/3 mx-auto">
                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://unblast.com/wp-content/uploads/2021/09/University-Students-Illustration.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Students</h1>
                                <p className="py-6 text-2xl">Students can manage their schedule and assignments here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/73ddc4133109139.61b6f769b8236.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Corporates</h1>
                                <p className="py-6 text-2xl">Corporates can schedule their meetings and projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://assets.materialup.com/uploads/562852f4-89da-4a92-8901-9b14f4c18bad/preview.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Researchers</h1>
                                <p className="py-6 text-2xl">Researchers can update their research and make a list of their experiments.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://i.pinimg.com/originals/73/e3/2b/73e32b75228efce7aa05060a025ca736.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Managers</h1>
                                <p className="py-6 text-2xl">Managers can update their appointments and informations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;