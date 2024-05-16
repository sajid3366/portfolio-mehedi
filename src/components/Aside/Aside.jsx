import { NavLink } from 'react-router-dom';
import image from '/image/logo.png'
const Aside = () => {
    return (
        <div className="w-[350px] h-screen bg-slate-200 pt-20 px-5 text-center ">
            <div className='w-[100px] h-[100px] rounded-full flex justify-center m-auto bg-gray-400 mb-5'>
                <img className='w-[100px] h-[90px]' src={image} alt="logo" />
            </div>
            <h1 className="text-xl font-bold">Mehedi Hasan Emon</h1>

            <ul className='mt-20 space-y-3 text-sm font-semibold text-slate-500'>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active text-red-500" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li><NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active text-red-500" : ""
                    }
                >
                    About
                </NavLink></li>
                <li><NavLink
                    to="/service"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active text-red-500" : ""
                    }
                >
                    Services
                </NavLink></li>
                <li><NavLink
                    to="/work"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active text-red-500" : ""
                    }
                >
                    Works
                </NavLink></li>
                <li><NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active text-red-500" : ""
                    }
                >
                    Blogs
                </NavLink></li>
                <li><NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active text-red-500" : ""
                    }
                >
                    Contact
                </NavLink></li>
            </ul>
            <footer className='mt-32 font-semibold text-sm text-slate-500'>
                <h2>Copyright &copy; 2024 Mehedi Hasan.</h2>
                <p>All right reserved.</p>
            </footer>
        </div>
    );
};

export default Aside;