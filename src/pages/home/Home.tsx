import { Nav } from './components/Nav';

import foto from '../../assets/foto.png';
import logo from "../../assets/svg/logo.svg";
// Hero
import hero from '../../assets/svg/home/hero.svg';
import logoApps from '../../assets/svg/home/logoApps.svg';
// Mobile
import mobile from '../../assets/svg/home/mobile.svg';
import windows10 from '../../assets/images/home/windows10.png';
import googleplay from '../../assets/images/home/googleplay.png';
// Review
import review1 from '../../assets/images/home/review1.jpg';
import review2 from '../../assets/images/home/review2.jpg';
import review3 from '../../assets/images/home/review3.jpg';
// Partners
import partners from '../../assets/svg/home/partners.svg';
import github from '../../assets/images/home/github.png';
import teams from '../../assets/images/home/teams.png';
import trello from '../../assets/images/home/trello.png';
import figma from '../../assets/images/home/figma.png';
import amazon from '../../assets/images/home/amazon.png';
import twitter from '../../assets/images/home/twitter.png';
import discord from '../../assets/images/home/discord.png';

// Swiper
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from 'react';
import { useInterfaceMode } from '../../hooks/useInterfaceMode';
import { Link } from 'react-router-dom';

// ScrollReveal
import ScrollReveal from 'scrollreveal';
import { Tabs } from '../../components/Tabs';

export function Home() {
    const [appswork, setAppsWork] = useState("apps");
    const [slideVideo, setSlideVideo] = useState(1);
    const [slideReviews, setSlideReviews] = useState(1);
    const { isDarkMode } = useInterfaceMode();

    // Swiper
    const handleSlideVideoChange = (swiper: SwiperClass) => {
        setSlideVideo(swiper.activeIndex + 1);
    };
    const handleSlideReviewsChange = (swiper: SwiperClass) => {
        setSlideReviews(swiper.activeIndex + 1);
    };

    // ScrollReveal
    useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal('.srl', {
            duration: 1100,
            distance: '50px',
            origin: 'left'
        });
        sr.reveal('.srr', {
            duration: 1100,
            distance: '50px',
            origin: 'right'
        });
        sr.reveal('.srb', {
            duration: 1100,
            distance: '50px',
            origin: 'bottom'
        });
        sr.reveal('.srt', {
            duration: 1100,
            distance: '50px',
            origin: 'top'
        });
    }, []);

    return (
        <>
            <div className="text-black dark:text-white overflow-x-hidden">
                <Nav />

                <div className="separator max-[768px]:h-[40px]"></div>

                {/* Hero Section */}
                <div className="hero flex flex-col justify-center">

                    <div className="flex items-center flex-col lg:flex-row-reverse w-4/5 mx-auto max-[768px]:mx-5 max-[768px]:w-auto gap-28 max-[1024px]:gap-10">
                        <div className="srr flex-1">
                            <img src={hero} className="select-none" />
                        </div>
                        <div className="srl flex-1 flex flex-col gap-8">
                            <h1 className="text-5xl min-w-fit leading-none"><b>Teamer Software</b></h1>
                            <p className="text-xl w-10/12 max-[1024px]:w-full">The <b>open source platform</b> for cohesive and organized development will help you organize with your team or alone those tasks that need it. With all the functionality that we include <b>you will be satisfied</b>.</p>
                            <Link to='https://github.com/orgs/ProyectoIntegradoOrganizationalApp/repositories' target="_blank" className="btn btn-primary min-w-fit max-w-fit">Our Repository</Link>
                        </div>
                    </div>
                </div>

                <div className="separator"></div>

                {/* Apps */}
                <div className="flex w-4/5 mx-auto max-[768px]:mx-5 max-[768px]:w-auto gap-10 max-[1024px]:gap-5 flex-col lg:flex-row">
                    <div className="srl flex-1 aspect-video bg-[url()] bg-red-200 bg-no-repeat bg-cover min-w-[300px]"></div>
                    <div className="srr flex-1 flex flex-col gap-6 h-fit min-w-[425px] max-[768px]:min-w-[unset]">
                        <div className="flex-1 flex max-[1024px]:flex-wrap gap-4">
                            <Tabs tab={appswork} setTab={setAppsWork} links={[
                                {
                                    url: "apps",
                                    name: "Our Apps"
                                },
                                {
                                    url: "work",
                                    name: "Work Management"
                                }
                            ]} />
                        </div>
                        {
                            appswork == "apps" &&
                            <div>
                                <h1 className="text-2xl flex items-center gap-4"><img src={logoApps} className="ourApps select-none" /> Our Apps</h1>
                                <p className="pt-7 pb-6">
                                    Teamer Software is <b>dedicated to empowering your team</b> by offering a comprehensive
                                    suite of tools and applications designed to facilitate seamless project collaboration.
                                    <br /><br />
                                    Our platform ensures that you can work on your projects <b>effortlessly and comfortably</b>,
                                    fostering efficient communication and task management among team members. With Teamer,
                                    you can <b>streamline your workflows</b>, stay organized, and achieve project success with ease.
                                    <br /><br />
                                    By leveraging the power of Teamer Software, go to the <b>next level</b>.
                                </p>
                                <div className="btn btn-special">Create Project</div>
                            </div>
                        } {
                            appswork == "work" &&
                            <div>
                                <h1 className="text-2xl flex items-center gap-4"><i className="fa-solid fa-gear text-yellow-600"></i> Work Management</h1>
                                <p className="py-7">
                                    Work management is a critical aspect of <b>modern businesses</b>, enabling efficient
                                    organization, prioritization, and tracking of tasks, projects, and workflows.
                                    <br /><br />
                                    Platforms like <b>Teamer</b> have revolutionized work management, providing companies
                                    with robust tools to streamline processes, enhance productivity, and foster
                                    collaboration. This section explores the concept of <b>work management</b> and how
                                    Teamer facilitates seamless task management and <b>team coordination</b>.
                                </p>
                                <div className="btn btn-special">Start Now</div>
                            </div>
                        }
                    </div>
                </div>

                <div className="separator"></div>

                {/* Installation */}
                <div className="flex flex-col items-center justify-center gap-12 max-[768px]:gap-8 py-[3.2rem] px-14 max-[768px]:px-5 bg-slate-200 dark:bg-slate-900/40">
                    {/* Progress */}
                    <div className="w-2/5 min-w-fit flex flex-col justify-center items-center gap-7 max-[768px]:gap-4 max-[580px]:w-full">
                        <h1 className="leading-none text-2xl px-10 max-[580px]:px-0">Teamer <span className="max-[500px]:hidden">Software</span> <b>installation</b></h1>
                        <progress className="progressVideo progress w-full h-4 bg-gray-200 dark:bg-slate-500" value={slideVideo} max="3"></progress>
                    </div>
                    {/* Video Slider */}
                    <div className="lg:w-7/12 w-full relative">
                        <Swiper onSlideChange={handleSlideVideoChange}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="!cursor-grab active:!cursor-grabbing">
                                <div className='bg-red-500 w-full aspect-video'></div>
                            </SwiperSlide>
                            <SwiperSlide className="!cursor-grab active:!cursor-grabbing">
                                <div className='bg-blue-500 w-full aspect-video'></div>
                            </SwiperSlide>
                            <SwiperSlide className="!cursor-grab active:!cursor-grabbing">
                                <div className='bg-green-500 w-full aspect-video'></div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-button-next !hidden lg:!flex"></div>
                        <div className="swiper-button-prev !hidden lg:!flex"></div>
                    </div>
                </div>

                {/* Download App */}
                <div className="flex flex-wrap-reverse justify-between ml-[10%] max-[768px]:ml-5 gap-14">
                    {/* Left */}
                    <div className="srl flex-1 flex flex-col gap-8 justify-center min-w-[400px] max-[768px]:min-w-[unset] mr-14 max-[768px]:mr-5 max-[1285px]:mt-10 max-[1021px]:mt-0">
                        <p className="text-2xl leading-[1.3]"><b>Download<br />Our App</b></p>
                        <p>
                            Download our <b>application</b> to enjoy a unique and complete experience
                            anytime, anywhere. Get immediate access to <b>exclusive content</b>, real-time
                            updates and an interface optimized to give you maximum speed on your
                            devices.
                        </p>
                        <ul className="!list-disc p-[1.1rem] leading-none flex flex-col gap-2">
                            <li>Faster services</li>
                            <li>Easy and intuitive handling</li>
                            <li>Better error handling</li>
                        </ul>
                        <div className="flex gap-4 select-none">
                            <img src={windows10} className="btn cursor-pointer bg-transparent hover:bg-transparent active:bg-transparent border-none p-0" />
                            <img src={googleplay} className="btn cursor-pointer bg-transparent hover:bg-transparent active:bg-transparent border-none p-0" />
                        </div>
                    </div>
                    {/* Right */}
                    <div className="srr flex-[1.7]">
                        <img src={mobile} className="min-w-[400px] max-[768px]:min-w-[300px] ml-auto" />
                    </div>
                </div>

                <div className="separator"></div>

                {/* Features */}
                <div className="flex flex-wrap gap-12">
                    {/* Left */}
                    <div className="flex-1 aspect-[1/.85] bg-slate-200 min-w-[200px]"></div>
                    {/* Right */}
                    <div className="flex-1 flex flex-col gap-10 min-w-[470px] max-[768px]:min-w-[unset] mx-8 max-[768px]:mx-5">
                        <div className="srl">
                            <svg className="w-32" viewBox="0 0 165 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M165 38.5C165 17.237 147.763 0 126.5 0H0V77H126.5C147.763 77 165 59.763 165 38.5Z" fill={`${isDarkMode ? "url(#paint0_linear_76_67)" : "url(#paint0_linear_76_123)"}`} />
                                <rect x="62" y="21" width="8" height="37" fill="#94A3B8" />
                                <rect x="77" y="21" width="8" height="37" fill="#94A3B8" />
                                <rect x="55" y="37" width="8" height="37" transform="rotate(-90 55 37)" fill="#94A3B8" />
                                <rect x="101.676" y="32.0488" width="10.8074" height="8.8483" transform="rotate(-98.9222 101.676 32.0488)" fill="#94A3B8" />
                                <rect x="119" y="58" width="11" height="38" transform="rotate(180 119 58)" fill="#94A3B8" />
                                <rect x="55" y="50" width="8" height="37" transform="rotate(-90 55 50)" fill="#94A3B8" />
                                <defs>
                                    <linearGradient id="paint0_linear_76_123" x1="148.755" y1="77" x2="5.55477e-06" y2="77" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#CBD5E1" />
                                        <stop offset="0.784224" stop-color="#CBD5E1" stop-opacity="0.171256" />
                                        <stop offset="1" stop-color="#CBD5E1" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint0_linear_76_67" x1="148.755" y1="77" x2="5.55477e-06" y2="77" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#334155" />
                                        <stop offset="0.784224" stop-color="#334155" stop-opacity="0.171256" />
                                        <stop offset="1" stop-color="#334155" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-5 text-2xl">
                                <i className="fa-solid fa-book"></i>
                                <p className="leading-none">Features</p>
                            </div>
                            <p>
                                We are the <b>top</b> provider of web or app-based task management solutions,
                                empowering our clients to seamlessly coordinate and streamline their work,
                                while enhancing <b>team collaboration</b> and productivity
                            </p>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="srl flex items-center gap-5 shadow-lg">
                                <div className="text-2xl min-w-[94.35px] aspect-square flex justify-center items-center bg-slate-200 dark:bg-slate-700">
                                    <i className="fa-solid fa-lightbulb"></i>
                                </div>
                                <p className="p-3">
                                    <b>Simple and intuitive</b> user interface that allows you to <b>efficiently manage</b> tasks and projects
                                </p>
                            </div>
                            <div className="srr flex items-center gap-5 shadow-lg">
                                <div className="text-2xl min-w-[94.35px] aspect-square flex justify-center items-center bg-slate-200 dark:bg-slate-700">
                                    <i className="fa-solid fa-people-arrows"></i>
                                </div>
                                <p className="p-3">
                                    <b>Advanced collaboration functionality</b> that enables users to assign tasks, share files, add comments and much more
                                </p>
                            </div>
                            <div className="srl flex items-center gap-5 shadow-lg">
                                <div className="text-2xl min-w-[94.35px] aspect-square flex justify-center items-center bg-slate-200 dark:bg-slate-700">
                                    <i className="fa-solid fa-gear"></i>
                                </div>
                                <p className="p-3">
                                    Great deal of <b>customization and flexibility options</b> that allow clients to tailor the platform to their specific needs
                                </p>
                            </div>
                            <div className="srr flex items-center gap-5 shadow-lg">
                                <div className="text-2xl min-w-[94.35px] aspect-square flex justify-center items-center bg-slate-200 dark:bg-slate-700">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <p className="p-3">
                                    We take the <b>security</b> of our clients' data very seriously, and therefore implement <b>top-tier security</b> measures
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="separator"></div>

                {/* Reviews */}
                <div className="block md:flex flex-wrap justify-center">
                    {
                        slideReviews == 1 &&
                        <div className="max-[908px]:w-full relative max-[908px]:mb-10 my-9 max-[908px]:my-0">
                            <div className="bg-slate-300 dark:bg-slate-900 absolute -top-[2.1rem] left-8 w-44 h-[21.5rem] rounded-xl -z-10 max-[908px]:hidden"></div>
                            <div className="bg-slate-200 dark:bg-slate-700 flex flex-col justify-center items-center gap-5 p-12 max-[908px]:p-9 max-[908px]:w-full">
                                <div className="w-36 aspect-square rounded-full">
                                    <img src={review1} className="rounded-full" />
                                </div>
                                <p className="leading-none">Tobey Maguire</p>
                            </div>
                        </div>
                    } {
                        slideReviews == 2 &&
                        <div className="max-[908px]:w-full relative max-[908px]:mb-10 my-9 max-[908px]:my-0">
                            <div className="bg-slate-300 dark:bg-slate-900 absolute -top-[2.1rem] left-8 w-44 h-[21.5rem] rounded-xl -z-10 max-[908px]:hidden"></div>
                            <div className="bg-slate-200 dark:bg-slate-700 flex flex-col justify-center items-center gap-5 p-12 max-[908px]:p-9 max-[908px]:w-full">
                                <div className="w-36 aspect-square rounded-full">
                                    <img src={review2} className="rounded-full" />
                                </div>
                                <p className="leading-none">Lauren Johnson</p>
                            </div>
                        </div>
                    } {
                        slideReviews == 3 &&
                        <div className="max-[908px]:w-full relative max-[908px]:mb-10 my-9 max-[908px]:my-0">
                            <div className="bg-slate-300 dark:bg-slate-900 absolute -top-[2.1rem] left-8 w-44 h-[21.5rem] rounded-xl -z-10 max-[908px]:hidden"></div>
                            <div className="bg-slate-200 dark:bg-slate-700 flex flex-col justify-center items-center gap-5 p-12 max-[908px]:p-9 max-[908px]:w-full">
                                <div className="w-36 aspect-square rounded-full">
                                    <img src={review3} className="rounded-full" />
                                </div>
                                <p className="leading-none">Maiki Tauren</p>
                            </div>
                        </div>
                    }
                    <div className="max-[768px]:flex-1 flex flex-col">
                        <hr className="srl bg-slate-300 dark:bg-slate-900 border-slate-300 dark:border-slate-900 h-4 mb-6 mt-0 md:mt-9 w-[23.8rem] max-[908px]:hidden relative -z-20" />
                        <p className="leading-none text-2xl ml-5 md:ml-9 mb-8">Customers Reviews</p>
                        <div className="md:max-w-[600px] mx-5 md:ml-9 block md:flex gap-12 mb-10">
                            <div className="srb text-5xl -translate-y-4 hidden md:block">
                                <i className="fa-solid fa-quote-left leading-none"></i>
                            </div>
                            <div className="w-full md:w-4/6 relative">
                                <Swiper onSlideChange={handleSlideReviewsChange}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    modules={[Pagination, Navigation]}
                                    spaceBetween={40} className="static select-none"
                                >
                                    <SwiperSlide className="!cursor-grab active:!cursor-grabbing !items-start !bg-transparent !text-left !text-base">
                                        This tool is exactly what I was looking for to efficiently manage my projects.
                                        I love the user-friendly interface that makes it easy to use.
                                    </SwiperSlide>
                                    <SwiperSlide className="!cursor-grab active:!cursor-grabbing !items-start !bg-transparent !text-left !text-base">
                                        I've finally found the perfect solution to streamline my project management tasks.
                                        This tool has exceeded my expectations with its intuitive interface and seamless functionality.
                                    </SwiperSlide>
                                    <SwiperSlide className="!cursor-grab active:!cursor-grabbing !items-start !bg-transparent !text-left !text-base">
                                        Managing my projects has never been this effortless. This remarkable tool ticks all the boxes
                                        with its exceptional features and polished user interface.
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="srt text-5xl translate-y-3/4 hidden md:block">
                                <i className="fa-solid fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="separator"></div>

                {/* Information */}
                <div className="bg-slate-200 dark:bg-slate-900/40">
                    <div className="flex flex-wrap max-[939px]:gap-10 gap-20 py-[3.2rem] px-14 max-[768px]:px-5 max-[768px]:justify-center items-center w-fit mx-auto">
                        <div className="srl flex flex-col gap-4 min-w-[220px] max-[768px]:min-w-full max-[768px]:max-w-[unset] max-w-[350px] flex-1">
                            <div className="text-5xl">
                                <i className="fa-solid fa-gears"></i>
                            </div>
                            <p className="text-xl"><b>Troubleshooting Assistance</b></p>
                            <p>
                                Our technical support team is available to help you with any issues
                            </p>
                            <Link target="_blank" to="https://en.wikipedia.org/wiki/Troubleshooting" className="custom-border">More Information <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="srt flex flex-col gap-4 min-w-[220px] max-[768px]:min-w-full max-[768px]:max-w-[unset] max-w-[350px] flex-1">
                            <div className="text-5xl">
                                <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <p className="text-xl"><b>Product Knowledge and Training</b></p>
                            <p>
                                We believe that knowledge is power, which is why we offer a comprehensive training
                            </p>
                            <Link target="_blank" to="https://en.wikipedia.org/wiki/Training_and_development" className="custom-border">More Information <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="srr flex flex-col gap-4 min-w-[220px] max-[768px]:min-w-full max-[768px]:max-w-[unset] max-w-[350px] flex-1">
                            <div className="text-5xl">
                                <i className="fa-solid fa-gauge-high"></i>
                            </div>
                            <p className="text-xl"><b>Proactive Monitoring and Maintenance</b></p>
                            <p>
                                We take the security and performance of our platform seriously
                            </p>
                            <Link target="_blank" to="https://en.wikipedia.org/wiki/Proactive_maintenance" className="custom-border">More Information <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="separator block min-[1417px]:hidden max-[717px]:h-[85px]"></div>

                {/* Partners */}
                <div className="flex flex-wrap-reverse justify-between max-[1417px]:ml-0 ml-[10%] gap-14 max-[910px]:gap-5">
                    {/* Left */}
                    <div className="srl flex-1 flex flex-col gap-8 justify-center max-[1417px]:justify-start max-[1417px]:mt-0 my-10 max-[717px]:mb-0 min-w-[300px] mr-14 max-[1417px]:ml-10 max-[768px]:mx-5">
                        <p className="text-2xl leading-[1.3]"><b>Our<br />Partners</b></p>
                        <p>
                            At Teamer, we believe in the <b>power of collaboration</b> and strategic
                            partnerships to drive innovation and create sustainable growth.
                            Our partners are an essential part of our <b>ecosystem</b>, and we work closely
                            with them to co-create solutions that meet the unique needs of our customers
                        </p>
                        <div className="btn btn-primary w-fit">Find More</div>
                    </div>
                    {/* Right */}
                    <div className="srr flex-[2.4] min-w-[350px] max-[1417px]:flex-1 max-[1416px]:justify-center items-center">
                        <svg className="min-[1417px]:!ml-auto max-[1417px]:w-full mr-16 max-[1417px]:h-fit" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="791" height="509" viewBox="0 0 791 509" fill="none">
                            <path className="max-[1416px]:hidden" d="M370 0.0667651L706.952 327.322L600.308 444.63C568.462 479.661 513.971 481.467 479.875 448.621L14.2565 0.0670298L370 0.0667651Z" fill="#64748b" />
                            <g filter="url(#filter0_d_1146_456)">
                                <rect x="58.7068" y="54.9702" width="89" height="89" rx="11" fill="white" />
                            </g>
                            <g filter="url(#filter1_d_1146_456)">
                                <rect x="293" y="79.0698" width="121" height="121" rx="11" fill="white" />
                            </g>
                            <g filter="url(#filter2_d_1146_456)">
                                <rect x="528" y="243.07" width="59" height="59" rx="11" fill="white" />
                            </g>
                            <g filter="url(#filter3_d_1146_456)">
                                <rect x="651" y="319.07" width="115" height="115" rx="11" fill="white" />
                            </g>
                            <g filter="url(#filter4_d_1146_456)">
                                <rect width="97" height="97" rx="11" transform="matrix(1 0 0 -1 414 473.07)" fill="white" />
                            </g>
                            <Link to="https://www.amazon.com" target="_blank" className="hover:scale-125 hover:-translate-x-[8.68rem] hover:-translate-y-[4.3rem] transition-all">
                                <rect x="540" y="263" width="34" height="21" fill="url(#pattern0)" />
                            </Link>
                            <Link to="https://www.trello.com" target="_blank" className="hover:scale-125 hover:-translate-x-[8.12rem] hover:-translate-y-[1.8rem] transition-all">
                                <g filter="url(#filter5_d_1146_456)">
                                    <rect x="484" y="79" width="74" height="74" fill="url(#pattern1)" shape-rendering="crispEdges" />
                                </g>
                            </Link>
                            <Link to="https://www.github.com" target="_blank" className="hover:scale-125 hover:-translate-x-[1.62rem] hover:-translate-y-[1.5rem] transition-all">
                                <rect x="74" y="69" width="59" height="59" fill="url(#pattern2)" />
                            </Link>
                            <Link to="https://www.microsoft.com/en-us/microsoft-teams/log-in" target="_blank" className="hover:scale-125 hover:-translate-x-[5.55rem] hover:-translate-y-[2.2rem] transition-all">
                                <rect x="315" y="100" width="78" height="80" fill="url(#pattern3)" />
                            </Link>
                            <Link to="https://www.figma.com" target="_blank" className="hover:scale-125 hover:-translate-x-[4.2rem] hover:-translate-y-[4.7rem] transition-all">
                                <g filter="url(#filter6_d_1146_456)">
                                    <rect x="217" y="241" width="110" height="110" fill="url(#pattern4)" shape-rendering="crispEdges" />
                                </g>
                            </Link>
                            <Link to="https://www.twitter.com" target="_blank" className="hover:scale-125 hover:-translate-x-[7.2rem] hover:-translate-y-[6.65rem] transition-all">
                                <rect x="435" y="403" width="56" height="47" fill="url(#pattern5)" />
                            </Link>
                            <Link to="https://www.discord.com" target="_blank" className="hover:scale-125 hover:-translate-x-[11.09rem] hover:-translate-y-[5.9rem] transition-all">
                                <rect x="674" y="351" width="69" height="52" fill="url(#pattern6)" />
                            </Link>
                            <defs>
                                <filter id="filter0_d_1146_456" x="33.7068" y="29.9702" width="139" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <filter id="filter1_d_1146_456" x="268" y="54.0698" width="171" height="171" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <filter id="filter2_d_1146_456" x="503" y="218.07" width="109" height="109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <filter id="filter3_d_1146_456" x="626" y="294.07" width="165" height="165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <filter id="filter4_d_1146_456" x="389" y="351.07" width="147" height="147" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_1146_456" transform="matrix(0.00100758 0 0 0.00163132 -0.0158814 0)" />
                                </pattern>
                                <filter id="filter5_d_1146_456" x="459" y="54" width="124" height="124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image1_1146_456" transform="scale(0.00195312)" />
                                </pattern>
                                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image2_1146_456" transform="scale(0.00195312)" />
                                </pattern>
                                <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image3_1146_456" transform="matrix(0.000474834 0 0 0.000462963 -0.411681 0)" />
                                </pattern>
                                <filter id="filter6_d_1146_456" x="195" y="219" width="154" height="154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image4_1146_456" transform="scale(0.002)" />
                                </pattern>
                                <pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image5_1146_456" transform="matrix(0.000491098 0 0 0.000585138 -0.0156524 0)" />
                                </pattern>
                                <pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image6_1146_456" transform="matrix(0.00161551 0 0 0.00214366 0 -0.00375916)" />
                                </pattern>
                                <image id="image0_1146_456" width="1024" height="613" xlinkHref={amazon} />
                                <image id="image1_1146_456" width="512" height="512" xlinkHref={trello} />
                                <image id="image2_1146_456" width="512" height="512" xlinkHref={github} />
                                <image id="image3_1146_456" width="3840" height="2160" xlinkHref={teams} />
                                <image id="image4_1146_456" width="500" height="500" xlinkHref={figma} />
                                <image id="image5_1146_456" width="2100" height="1709" xlinkHref={twitter} />
                                <image id="image6_1146_456" width="619" height="470" xlinkHref={discord} />
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="separator"></div>

                {/* Footer */}
                <footer className="bg-slate-200 dark:bg-slate-900/40 text-black dark:text-white pt-10 pb-5">
                    <div className="srb container mx-auto flex flex-wrap justify-between gap-14 mb-10 px-5">
                        <div className="flex-initial max-w-fit mb-4 md:mb-0">
                            <Link to="/" className="flex items-center mb-2 gap-3 text-xl cursor-pointer">
                                <img src={logo} className="w-9 aspect-square" />
                                <p>Teamer</p>
                            </Link>
                        </div>
                        <div className="flex-1 max-w-fit mb-4 md:mb-0">
                            <h4 className="font-bold mb-3">REFERENCES</h4>
                            <ul className="flex flex-col gap-1">
                                <li><Link to="/" className="hover:opacity-50 transition-all">Teamer Software</Link></li>
                                <li><Link to="https://www.atlassian.com/es/software/jira" target="_blank" className="hover:opacity-50 transition-all">Jira Software</Link></li>
                                <li><Link to="https://www.trello.com/" target="_blank" className="hover:opacity-50 transition-all">Trello</Link></li>
                                <li><Link to="https://react.dev/" target="_blank" className="hover:opacity-50 transition-all">React JS</Link></li>
                                <li><Link to="https://reactnative.dev/" target="_blank" className="hover:opacity-50 transition-all">React Native</Link></li>
                                <li><Link to="https://www.rust-lang.org/" target="_blank" className="hover:opacity-50 transition-all">Rust</Link></li>
                                <li><Link to="https://www.postgresql.org/" target="_blank" className="hover:opacity-50 transition-all">PostgreSQL</Link></li>
                                <li><Link to="https://www.figma.com/" target="_blank" className="hover:opacity-50 transition-all">Figma</Link></li>
                            </ul>
                        </div>
                        <div className="flex-1 max-w-fit mb-4 md:mb-0">
                            <h4 className="font-bold mb-3">RESOURCES</h4>
                            <ul className="flex flex-col gap-1">
                                <li><Link to="/profile/dashboard" target="_blank" className="hover:opacity-50 transition-all">Dashboard</Link></li>
                                <li><Link to="/" className="hover:opacity-50 transition-all">Home</Link></li>
                                <li><Link to="#" className="hover:opacity-50 transition-all">About Us</Link></li>
                                <li><Link to="#" className="hover:opacity-50 transition-all">Our Prices</Link></li>
                                <li><Link to="/profile/account" target="_blank" className="hover:opacity-50 transition-all">My Account</Link></li>
                                <li><Link to="/friends/dashboard" target="_blank" className="hover:opacity-50 transition-all">Friends</Link></li>
                                <li><Link to="/projects/dashboard" target="_blank" className="hover:opacity-50 transition-all">Projects</Link></li>
                            </ul>
                        </div>
                        <div className="flex-1 max-w-fit mb-4 md:mb-0">
                            <h4 className="font-bold mb-3">LEARN AND MANAGE</h4>
                            <ul className="flex flex-col gap-1">
                                <li><Link to="#" className="hover:opacity-50 transition-all">Teamer Courses</Link></li>
                                <li><Link to="https://openwebinars.net/" target="_blank" className="hover:opacity-50 transition-all">OpenWebinars</Link></li>
                                <li><Link to="https://www.udemy.com/" target="_blank" className="hover:opacity-50 transition-all">Udemy</Link></li>
                                <li><Link to="https://www.coursera.org/" target="_blank" className="hover:opacity-50 transition-all">Coursera</Link></li>
                                <li><Link to="https://chat.openai.com/" target="_blank" className="hover:opacity-50 transition-all">ChatGPT OpenAI</Link></li>
                            </ul>
                        </div>
                        <div className="flex-1 max-w-fit mb-4 md:mb-0">
                            <h4 className="font-bold mb-3">ABOUT TEAMER</h4>
                            <ul className="flex flex-col gap-1">
                                <li><Link to="#" className="hover:opacity-50 transition-all">Company</Link></li>
                                <li><Link to="#" className="hover:opacity-50 transition-all">Events</Link></li>
                                <li><Link to="#" className="hover:opacity-50 transition-all">Summary</Link></li>
                                <li><Link to="#" className="hover:opacity-50 transition-all">Our History</Link></li>
                                <li><Link to="#" className="hover:opacity-50 transition-all">Confidence and Security</Link></li>
                                <li><Link to="#" className="hover:opacity-50 transition-all">Frequently Asked Questions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="bg-white dark:bg-slate-700 border-white dark:border-slate-700" />
                    <div className="container mx-auto flex items-center justify-between flex-wrap mt-5 gap-4 px-5">
                        <div className="srl">
                            <p className="text-center leading-none">Copyright © 2023 Teamer Software</p>
                        </div>
                        <div className="srr">
                            <div className="flex gap-3 text-xl">
                                <Link to="#"><i className="fab fa-facebook"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}