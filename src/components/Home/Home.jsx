import image from '/image/logo.png'
const Home = () => {
    return (
        <div className="bg-[#CDE8E5] w-full px-28 pt-28 pb-20 flex gap-x-20 justify-center items-center">
            <div className="w-1/2 ">
                <div className='space-y-2'>
                    <h1 className="text-5xl font-bold ">Hi I'm <span className='text-red-500'>Mehedi</span></h1>
                    <h1 className="text-5xl font-bold" >Creative Desiner</h1>
                    <h1 className="text-5xl font-bold"> Based in Bangladesh</h1>
                </div>
                <p className='mt-6'>I'm a Bangladesh based web desiner & front end developer with 2+ years of experience</p>
                <div className='mt-10 flex gap-x-5'>
                    <p className='bg-blue-950 text-white rounded-sm px-5 py-2 cursor-pointer'>Got a project?</p>
                    <p className='text-blue-950 border-[2px] border-blue-950 rounded-sm px-6 py-2 cursor-pointer'>Let's talk</p>
                </div>
                <div className='flex gap-x-3 mt-32'>
                    <div className='w-[2px] bg-yellow-800'></div>
                    <div className='font-bold space-y-1'>
                        <p>+88 01925769550</p>
                        <p>mehedihasanemon@gmail.com</p>
                        <p>Limited6, Mohammadpur, Dhaka-1207</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;