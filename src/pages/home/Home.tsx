import { Nav } from './components/Nav';

import foto from '../../assets/foto.png';
import logo from "../../assets/svg/logo.svg";
// Hero
import hero from '../../assets/svg/home/hero.svg';
import logoApps from '../../assets/svg/home/logoApps.svg';
// Mobile
import mobile from '../../assets/svg/home/mobile.svg';
import mobiledark from '../../assets/svg/home/mobiledark.svg';
import windows10 from '../../assets/images/home/windows10.png';
import googleplay from '../../assets/images/home/googleplay.png';
// Features
import features from '../../assets/svg/home/features.svg';
// Review
import review1 from '../../assets/images/home/review1.jpg';
import review2 from '../../assets/images/home/review2.jpg';
import review3 from '../../assets/images/home/review3.jpg';
// Partners
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
    const [appswork, setAppsWork] = useState("Our Apps");
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
        document.title = 'Projects and more | Teamer 2023';

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
        sr.reveal('.srr1', {
            duration: 1100,
            delay: 400,
            distance: '50px',
            origin: 'right'
        });
        sr.reveal('.srb', {
            duration: 1100,
            delay: 225,
            distance: '50px',
            origin: 'bottom'
        });
        sr.reveal('.srb1', {
            duration: 1100,
            delay: 400,
            distance: '50px',
            origin: 'bottom'
        });
        sr.reveal('.srb2', {
            duration: 1100,
            delay: 725,
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
            <div className="text-black dark:text-white overflow-x-hidden bg-white dark:!bg-[#202124]">
                <Nav />

                <div className="separator max-[768px]:h-[40px]"></div>

                {/* Hero Section */}
                <div className="hero flex flex-col justify-center">

                    <div className="flex items-center max-[768px]:flex-col flex-row-reverse w-4/5 mx-auto max-[768px]:mx-5 max-[768px]:w-auto gap-28 max-[1024px]:gap-10">
                        <div className="srr1 flex-1">
                            <img src={hero} className="select-none max-[768px]:w-96" />
                        </div>
                        <div className="flex-1 flex flex-col gap-8">
                            <h1 className="srb text-5xl min-w-fit leading-none"><b>Teamer Software</b></h1>
                            <p className="srb1 text-xl w-10/12 max-[1024px]:w-full">The <b>open source platform</b> for cohesive and organized development will help you organize with your team or alone those tasks that need it. With all the functionality that we include <b>you will be satisfied</b>.</p>
                            <div className="srb2">
                                <Link to='https://github.com/orgs/ProyectoIntegradoOrganizationalApp/repositories' target="_blank" className="btn btn-primary min-w-fit max-w-fit">Our Repository</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="separator"></div>

                {/* Apps */}
                <div className="flex w-4/5 mx-auto max-[768px]:mx-5 max-[768px]:w-auto gap-10 max-[1024px]:gap-5 flex-col lg:flex-row">
                    <div className="srb1 flex-1 aspect-video bg-[url()] bg-red-200 bg-no-repeat bg-cover min-w-[300px]"></div>
                    <div className="srb1 flex-1 flex flex-col gap-6 h-fit min-w-[425px] max-[768px]:min-w-[unset]">
                        <div className="flex-1 flex max-[1024px]:flex-wrap gap-4">
                            <Tabs tab={appswork} setTab={setAppsWork} links={[{ name: "Our Apps" }, { name: "Work Management" }]} />
                        </div>
                        {
                            appswork == "Our Apps" &&
                            <div>
                                <h1 className="text-2xl flex items-center gap-4"><img src={logoApps} className="ourApps select-none" /> Our Apps</h1>
                                <p className="pt-7 pb-6">
                                    Teamer Software is <b>dedicated to empowering your team</b> by offering a comprehensive
                                    suite of tools and applications designed to facilitate seamless project collaboration.
                                    <br /><br />
                                    Our platform ensures that you can work on your projects <b>effortlessly and comfortably</b>,
                                    fostering efficient communication and task management among team members. With Teamer,
                                    you can <b>streamline your workflows</b>, stay organized, and achieve project success with ease.
                                </p>
                                <Link to="/profile/dashboard" className="btn btn-primary">Create Project</Link>
                            </div>
                        } {
                            appswork == "Work Management" &&
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
                                <Link to="/login" className="btn btn-primary">Start Now</Link>
                            </div>
                        }
                    </div>
                </div>

                <div className="separator"></div>

                {/* Installation */}
                <div className="flex flex-col items-center justify-center gap-12 max-[768px]:gap-8 py-[3.2rem] px-14 max-[768px]:px-5 bg-slate-200 dark:bg-[#28292d]">
                    {/* Progress */}
                    <div className="w-2/5 min-w-fit flex flex-col justify-center items-center gap-5 max-[768px]:gap-4 max-[580px]:w-full">
                        <h1 className="leading-none text-2xl px-10 max-[580px]:px-0">Teamer <span className="max-[500px]:hidden">Software</span> <b>installation</b></h1>
                        <progress className="progressVideo progress w-full h-3 bg-gray-200 dark:bg-[#202124]" value={slideVideo} max="3"></progress>
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
                        <img src={isDarkMode ? mobiledark : mobile} className="min-w-[400px] max-[768px]:min-w-[300px] ml-auto" />
                    </div>
                </div>

                <div className="separator"></div>

                {/* Features */}
                <div className="flex flex-wrap gap-12">
                    {/* Left */}
                    <div className="srl flex-1 min-w-[500px] flex items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2586.21 1554.53" xmlSpace="preserve">
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            <path className="st0" d="M2471.91,1063.5c125.27,224.17-56,664-1205.64,358.33c-576.41-153.26-1006.97,191.99-1095.69-49      C-36.09,811.5,807.91,162.16,1277.24,615.5C1706.24,1029.87,2243.91,655.5,2471.91,1063.5z" />
                                        </g>
                                        <path className="st1" d="M2465.31,1556.94H121.23c73.36-542,570.08-961.24,1172.04-961.24     C1895.19,595.7,2391.95,1014.94,2465.31,1556.94z" />
                                    </g>
                                    <g>
                                        <path className="st2" d="M2159.76,1552.17h-881.68c-41.05,0-74.32-33.28-74.32-74.32V213.14c0-41.05,33.28-74.32,74.32-74.32h881.68     c41.05,0,74.32,33.28,74.32,74.32v1264.71C2234.08,1518.9,2200.81,1552.17,2159.76,1552.17z" />
                                        <g>
                                            <g>
                                                <rect x="1296.87" y="195.78" className="st1" width="848.04" height="1231.88" />
                                                <path className="st3" d="M2144.91,195.78c0.26,480.37,15.77,1059.71-38.19,1187.98c-237.67,23.16-515.95,30.59-809.86,31.97       L1408.58,199.5L2144.91,195.78z" />
                                                <path className="st4" d="M2068.74,1344.95c-370.44,59.29-618.02,62.41-818.83,47.5c26.02-277,36.45-737.18,46.95-1196.61       l446.39,0.99l404,26.67C2153.13,700.34,2153.78,1140.82,2068.74,1344.95z" />
                                            </g>
                                            <g>

                                                <rect x="1490.87" y="314.63" transform="matrix(0.9997 0.0235 -0.0235 0.9997 8.6767 -40.2309)" className="st5" width="446.24" height="67.97" />
                                                <g>
                                                    <g>
                                                        <g>

                                                            <rect x="1621.03" y="481.43" transform="matrix(0.9997 0.0235 -0.0235 0.9997 12.1978 -42.7379)" className="st5" width="402.51" height="31.11" />

                                                            <rect x="1619.45" y="547.73" transform="matrix(0.9997 0.0235 -0.0235 0.9997 13.7397 -41.1664)" className="st6" width="273.59" height="31.11" />
                                                        </g>
                                                        <g>

                                                            <rect x="1398.26" y="474.41" transform="matrix(0.9997 0.0235 -0.0235 0.9997 12.6835 -33.8755)" className="st7" width="95.29" height="95.29" />
                                                            <g>
                                                                <path className="st8" d="M1414.92,498.37c2.94,11.26,8.37,58.42,31.99,45.24c5.45-3.04,10.06-11.08,14.13-15.71           c7.32-8.32,14.65-16.63,21.97-24.95c14.65-16.63,29.3-33.26,43.95-49.89c3.75-4.26-12.82-14.95-17.54-9.6           c-13.02,14.78-26.04,29.57-39.06,44.35c-6.51,7.39-13.02,14.78-19.53,22.17c-4.52,5.13-14.97,21.67-21.67,23.14           c3.65,1.18,7.29,2.35,10.94,3.53c2.58,2.11-2.21-12.87-2.32-13.28c-1.82-6.96-3.63-13.91-5.45-20.87           C1430.83,496.77,1412.7,489.86,1414.92,498.37L1414.92,498.37z" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>

                                                            <rect x="1616.97" y="653.79" transform="matrix(0.9997 0.0235 -0.0235 0.9997 16.2421 -41.7586)" className="st5" width="331.46" height="31.11" />

                                                            <rect x="1615.36" y="722.44" transform="matrix(0.9997 0.0235 -0.0235 0.9997 17.8668 -42.5377)" className="st6" width="402.51" height="31.11" />
                                                        </g>
                                                        <g>

                                                            <rect x="1394.19" y="647.6" transform="matrix(0.9997 0.0235 -0.0235 0.9997 16.7573 -33.7317)" className="st7" width="95.29" height="95.29" />
                                                            <g>
                                                                <path className="st8" d="M1410.78,674.25c2.94,11.26,8.37,58.42,31.99,45.24c5.45-3.04,10.06-11.08,14.13-15.71           c7.32-8.32,14.65-16.63,21.97-24.95c14.65-16.63,29.3-33.26,43.95-49.89c3.75-4.26-12.82-14.95-17.54-9.6           c-13.02,14.78-26.04,29.57-39.06,44.35c-6.51,7.39-13.02,14.78-19.53,22.17c-4.52,5.13-14.97,21.67-21.67,23.14           c3.65,1.18,7.29,2.35,10.94,3.53c2.58,2.11-2.21-12.87-2.32-13.28c-1.82-6.96-3.63-13.91-5.45-20.87           C1426.7,672.64,1408.56,665.73,1410.78,674.25L1410.78,674.25z" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>

                                                            <rect x="1612.88" y="827.81" transform="matrix(0.9997 0.0235 -0.0235 0.9997 20.3456 -42.4507)" className="st5" width="402.51" height="31.11" />

                                                            <rect x="1611.32" y="893.01" transform="matrix(0.9997 0.0235 -0.0235 0.9997 21.848 -39.7776)" className="st6" width="180.01" height="31.11" />
                                                        </g>
                                                        <g>

                                                            <rect x="1390.11" y="820.8" transform="matrix(0.9997 0.0235 -0.0235 0.9997 20.8311 -33.5878)" className="st7" width="95.29" height="95.29" />
                                                            <g>
                                                                <path className="st8" d="M1408,848.67c2.94,11.26,8.37,58.42,31.99,45.24c5.45-3.04,10.06-11.08,14.13-15.71           c7.32-8.32,14.65-16.63,21.97-24.95c14.65-16.63,29.3-33.26,43.95-49.89c3.75-4.26-12.82-14.95-17.53-9.6           c-13.02,14.78-26.04,29.57-39.06,44.35c-6.51,7.39-13.02,14.78-19.53,22.17c-4.52,5.13-14.97,21.67-21.67,23.14           c3.65,1.18,7.29,2.35,10.94,3.53c2.58,2.11-2.21-12.87-2.32-13.28c-1.82-6.96-3.63-13.91-5.45-20.87           C1423.91,847.06,1405.78,840.16,1408,848.67L1408,848.67z" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>

                                                            <rect x="1608.8" y="1001.01" transform="matrix(0.9997 0.0235 -0.0235 0.9997 24.4191 -42.3064)" className="st5" width="402.51" height="31.11" />

                                                            <rect x="1607.22" y="1067.83" transform="matrix(0.9997 0.0235 -0.0235 0.9997 25.9793 -41.2562)" className="st6" width="317.97" height="31.11" />
                                                        </g>
                                                        <g>

                                                            <rect x="1386.03" y="993.99" transform="matrix(0.9997 0.0235 -0.0235 0.9997 24.9049 -33.444)" className="st7" width="95.29" height="95.29" />
                                                            <g>
                                                                <path className="st8" d="M1403.95,1020.73c2.94,11.26,8.37,58.42,31.99,45.24c5.45-3.04,10.06-11.08,14.13-15.71           c7.32-8.32,14.65-16.63,21.97-24.95c14.65-16.63,29.3-33.26,43.95-49.89c3.75-4.26-12.82-14.95-17.54-9.6           c-13.02,14.78-26.04,29.57-39.06,44.35c-6.51,7.39-13.02,14.78-19.53,22.18c-4.52,5.13-14.97,21.67-21.67,23.14           c3.65,1.18,7.29,2.35,10.94,3.53c2.58,2.11-2.21-12.87-2.32-13.28c-1.82-6.96-3.63-13.91-5.45-20.87           C1419.86,1019.12,1401.73,1012.21,1403.95,1020.73L1403.95,1020.73z" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>

                                                            <rect x="1604.79" y="1170.03" transform="matrix(0.9997 0.0235 -0.0235 0.9997 28.3608 -39.3064)" className="st5" width="159.55" height="31.11" />
                                                            <path className="st6" d="M2005.98,1245.44l-402.4-9.47l-0.73,31.1c155.68,3.65,353.91,10.95,394.36,4.74          C2003.35,1264.84,2006.66,1256.26,2005.98,1245.44z" />
                                                        </g>
                                                        <g>

                                                            <rect x="1383.32" y="1165.9" transform="matrix(0.9997 0.0235 -0.0235 0.9997 28.949 -33.3325)" className="st7" width="95.29" height="95.29" />
                                                            <g>
                                                                <path className="st8" d="M1399.94,1191.27c2.94,11.26,8.37,58.42,31.99,45.24c5.45-3.04,10.06-11.08,14.13-15.71           c7.32-8.32,14.65-16.63,21.97-24.95c14.65-16.63,29.3-33.26,43.95-49.89c3.75-4.26-12.82-14.95-17.54-9.6           c-13.02,14.78-26.04,29.57-39.06,44.35c-6.51,7.39-13.02,14.78-19.53,22.17c-4.52,5.13-14.97,21.67-21.67,23.14           c3.65,1.18,7.29,2.35,10.94,3.53c2.58,2.11-2.21-12.87-2.32-13.28c-1.82-6.96-3.63-13.91-5.45-20.87           C1415.85,1189.67,1397.71,1182.76,1399.94,1191.27L1399.94,1191.27z" />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                        <g>
                                            <path className="st8" d="M1909.91,147.38v95.08h-382v-95.08c0-15.16,6.16-28.88,16.08-38.84c1.24-1.24,2.52-2.4,3.88-3.48      c9.48-7.88,21.68-12.6,34.96-12.6c9.96,0,19.52-2.28,28.08-6.4c3.72-1.8,7.24-3.92,10.56-6.36      c10.92-8.08,19.28-19.56,23.44-33.24c4.24-13.96,12.92-25.64,24.16-33.76c10.8-7.76,23.96-12.24,37.92-12.24h23.84      c13.96,0,27.12,4.48,37.92,12.24c11.24,8.12,19.92,19.8,24.16,33.76c4.16,13.68,12.52,25.16,23.44,33.24      c3.32,2.44,6.84,4.56,10.56,6.36c8.56,4.12,18.12,6.4,28.08,6.4c13.28,0,25.48,4.72,34.96,12.6      C1902.15,115.1,1909.91,130.34,1909.91,147.38z" />
                                            <polygon className="st3" points="1940.91,195.78 1940.91,266.46 1496.91,266.46 1496.91,195.78 1527.91,195.78 1527.91,242.46       1909.91,242.46 1909.91,195.78     " />
                                            <ellipse className="st4" cx="1718.92" cy="57.45" rx="33.88" ry="32.2" />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path className="st9" d="M986.83,502.59c-13.55-2.56-26.21-25.2-30.61-33.88c-1.08-2.13-1.42-4.54-0.97-6.89l5.39-28.58      c0,0,12.44,2.12,11.48,18.68c-0.1,1.72,0.25,3.44,0.87,5.04l4.76,12.46l14.08-10.9l-7.72-21.8c0,0-10.33,2.84-15.67,1.14      c-10.96-3.5,3.41-12.04,7.95-12.95c4.54-0.91,14.54-4.54,19.08,3.18c4.54,7.72,7.27,12.26,7.27,12.26s5-17.26,1.59-55.87      c-0.15-1.74,4.2-1.7,5.42-0.46c3.66,3.72,9.49,15.06,9.8,49.52c0,0,0.61-40.16,7.5-44.29c5.68-3.41,8.55,16.25,4.55,49.58      c0,0,7.41-28.86,12.72-28.91c8.95-0.09,0.12,77.08-22.38,100.08L986.83,502.59z" />
                                            <path className="st9" d="M1029.31,490.78c-0.4,3.84-0.84,7.56-1.32,11.16v0.04c-1.6,12.8-3.6,24.24-5.92,34.04      c-0.12,0.48-0.2,0.92-0.32,1.36c-6.84,28.04-8.08,41.76-31.44,38.08l-24.04-27.36l-0.24-0.28l-1.76-2l4.88-14.4l0.64-1.88      l3.6-10.48l0.44-1.36l6.16-18.04l2.48-7.32L1029.31,490.78z" />
                                        </g>
                                        <g>
                                            <path className="st10" d="M582.7,1487.04l-6.12,19.12c-41.96,13.78-66.43,29.58-68,48h121.33l9.73-64.03      C615.07,1496.13,595.37,1491.95,582.7,1487.04z" />
                                            <path className="st9" d="M597.91,1439.5l-15.21,47.54c12.67,4.91,32.37,9.09,56.94,3.09l6.27-41.3L597.91,1439.5z" />
                                            <path className="st9" d="M805.35,1484.92l3.56-48.42l-57,3l-3.11,44.64C772.93,1491.83,792.88,1488.82,805.35,1484.92z" />
                                            <path className="st10" d="M873.91,1554.16c-1.57-18.42-23-43.67-70-49.67l1.44-19.58c-12.48,3.9-32.42,6.91-56.55-0.78l-4.89,70.03      H873.91z" />
                                        </g>
                                        <polygon className="st9" points="759.15,515.02 690.39,515.5 690.39,411.5 757.07,411.5 757.11,417.86 757.43,450.82 757.91,503.74         " />
                                        <path className="st11" d="M757.43,455.82c-12.36,13-44.6-1.68-58.2-16l57.88-16.96L757.43,455.82z" />
                                        <path className="st9" d="M773.39,387.5c-0.04,7.68-0.52,15.72-1.8,23.4c-3.36,20.96-12.24,39.08-32.72,39.64     c-48.4,1.4-62.2-26.28-71.32-48.92c-9.12-22.68,5.68-77.2,5.68-77.2l62.64-6.2l34.4,28.2     C770.27,346.42,773.59,365.58,773.39,387.5z" />
                                        <path className="st12" d="M669.51,388.65c0,0,13.81-0.64,16.17-36.28c24.69,8.26,42.73,0.73,57.03-15.71     c12.2,16.11,46.34,21.16,57.88-11.83c8.33-23.83-14.67-59.33-48.17-37.83c-32.83-16.59-82.63-15.45-96.96,25.24     c0,0-49.82,22.97,2.93,73.54C659.45,386.79,669.51,388.65,669.51,388.65z" />
                                        <polygon className="st12" points="859.92,888.8 821.91,1463.5 732.58,1463.5 754.91,905.83 768.58,899.5    " />
                                        <polygon className="st10" points="627.25,810.16 564.58,1463.5 661.91,1463.5 754.58,920.83 859.91,888.83 864.58,772.83      629.91,767.5    " />
                                        <path className="st13" d="M641.22,811.59c53.16,19.08,177.9-2.73,203.8-29.31l-18.4-36.81l-205.16,27.26L641.22,811.59z" />
                                        <path className="st4" d="M840.23,773.42c-1.72,0.72-3.48,1.48-5.28,2.16c-19.88,8.08-42.52,15.16-66.64,19.84     c-14.4,2.84-29.4,4.76-44.68,5.48c-23.04,1.16-46.72-0.36-70.16-5.68l29.8-277.84l3.64-33.88c0,0,39,48,82-5L840.23,773.42z" />
                                        <path className="st14" d="M723.63,800.9c-23.04,1.16-46.72-0.36-70.16-5.68l29.8-277.84L693.91,502     C720.19,565.92,747.11,707.46,723.63,800.9z" />
                                        <path className="st5" d="M690.41,472.5c29.63,125.8,41.82,255.25-1.83,399c-32.37,12.31-67.62,12.17-105.33,1.33l9.33-261.33     l-219.67,151l-13.33-82.33C444.02,599.42,590.02,477.44,690.41,472.5z" />
                                        <path className="st14" d="M834.95,775.58c-19.88,8.08-42.52,15.16-66.64,19.84c-13.24-75.92-16.16-200.64-5.4-256.92L834.95,775.58z" />
                                        <path className="st15" d="M1022.07,536.02c-0.12,0.48-0.2,0.92-0.32,1.36c-6.84,28.04-8.08,41.76-31.44,38.08l-24.04-27.36     l-0.24-0.28l3.12-16.4l0.64-1.88l3.6-10.48l0.44-1.36L1022.07,536.02z" />
                                        <path className="st5" d="M1017.91,561.5c0,0-59,125-94,128c-33.93,2.91-50-30-50-30l24,182.68c-28.2,13.2-58.96,19.64-94.68,13.32     c-31.72-103-43.71-236.18-46.07-384.5c25.68,1.6,76.54,3.79,94.75,15.5c32.67,21,73,96,73,96l47-64L1017.91,561.5z" />
                                        <g>
                                            <path className="st16" d="M298.66,385.37c0,0,3.57-59.8,9.66-56.98c6.09,2.82,18.29,54.82,18.29,54.82l-13.05,21.06L298.66,385.37z" />
                                            <path className="st8" d="M478.21,1465.16l1.77,19.68c3.12,34.74-22.51,65.44-57.26,68.56l-5.06,0.45      c-34.74,3.12-65.44-22.51-68.56-57.26l-1.77-19.68L478.21,1465.16z" />

                                            <rect x="304.27" y="516.16" transform="matrix(0.996 -0.0895 0.0895 0.996 -87.5125 37.0956)" className="st17" width="131.4" height="956.8" />

                                            <rect x="339.62" y="497.29" transform="matrix(0.996 -0.0895 0.0895 0.996 -80.5667 36.1554)" className="st18" width="46.67" height="838.67" />
                                            <polygon className="st12" points="478.19,1465.18 347.35,1476.94 343.91,1438.54 341.51,1411.86 334.11,1329.86 464.99,1318.1       472.35,1400.1 474.75,1426.78     " />

                                            <rect x="342.45" y="1405.92" transform="matrix(0.996 -0.0895 0.0895 0.996 -125.4184 42.2346)" className="st17" width="131.37" height="26.79" />
                                            <path className="st8" d="M261.7,523.96l36.35-145.69c0,0,12.55,5.57,27.77-3.83l66.76,137.77L261.7,523.96z" />
                                        </g>
                                        <path className="st9" d="M676.75,382.62c-0.59-2.15-10.35-5.1-12.5-5.7c-3.33-0.92-6.96-1.37-10.2,0.1     c-11.81,5.34-10.23,22.25-4.11,31.14c3.47,5.04,8.54,8.91,14.45,10.6c2.14,0.61,22.46,0.86,21.57-2.41     C685.94,416.33,676.77,382.69,676.75,382.62z" />
                                        <path className="st9" d="M304.91,722.5c-3.07-9.64-13.17-15.04-22.73-11.74c-14.89,5.14-27.86,13.86-29.86,28.7     c-1.83,13.51,4.93,56.67,35.11,62.21l-2.46-22.17c0,0,18.48-4.31,22.17-12.32C309.73,761.57,309.9,738.15,304.91,722.5z" />
                                        <path className="st10" d="M864.69,574.07c1.59,9.44,2.94,18.92,4.23,28.39c1.34,9.47,2.41,18.98,3.62,28.47l3.1,28.53     c0.9,9.52,1.79,19.05,2.37,28.61l-1.55,0.18c-1.64-9.44-2.97-18.91-4.29-28.39l-3.57-28.47c-1.01-9.51-2.16-19.01-3.04-28.53     c-0.93-9.52-1.8-19.05-2.43-28.61L864.69,574.07z" />
                                        <path className="st10" d="M595.69,572.53c-0.02,10.61-0.28,21.2-0.59,31.79c-0.27,10.59-0.81,21.18-1.21,31.76l-1.73,31.74     c-0.71,10.57-1.44,21.15-2.46,31.7l-1.56-0.07c-0.03-10.61,0.24-21.2,0.54-31.8l1.27-31.76c0.61-10.58,1.06-21.16,1.79-31.74     c0.69-10.57,1.43-21.15,2.41-31.71L595.69,572.53z" />
                                        <path className="st12" d="M725.29,381.63c0.85,3.77-0.71,7.33-3.47,7.95c-2.76,0.62-5.69-1.94-6.53-5.71     c-0.85-3.77,0.71-7.33,3.47-7.95C721.52,375.3,724.44,377.85,725.29,381.63z" />
                                        <path className="st12" d="M765.16,376.96c-0.16,3.86-2.59,6.9-5.42,6.78c-2.83-0.12-4.99-3.35-4.82-7.21     c0.16-3.86,2.59-6.9,5.42-6.78C763.16,369.87,765.32,373.1,765.16,376.96z" />
                                        <path className="st11" d="M742.93,380.13c1.37,3.31,1.15,6.87,2.04,9.58c0.45,1.37,1.07,2.58,1.94,3.32c0.8,0.73,2.1,1.21,3.75,1.85     c1.7,0.66,3.51,1.83,4.74,3.57c1.31,1.69,1.67,4.63,0.48,6.55c-1.06,1.92-2.59,2.98-3.91,3.95c-1.37,0.92-2.69,1.91-4.12,2.77     l-1.03-1.18c1.05-1.3,2.2-2.47,3.31-3.7c1.14-1.17,2.18-2.31,2.58-3.37c0.85-1.85-0.97-3.87-3.59-4.92     c-1.35-0.62-3.3-1.16-4.88-2.77c-1.52-1.55-2.27-3.48-2.57-5.29c-0.66-3.71,0.09-6.88-0.26-9.96L742.93,380.13z" />
                                        <path className="st12" d="M706.21,371.5c0.59-2.37,2.04-4.62,4.08-6.24c2.01-1.67,4.64-2.58,7.25-2.71     c5.25-0.32,10.45,2.67,12.61,7.09l-1.22,0.97c-3.47-2.73-7.3-4.22-11.19-4.08c-3.91,0.1-7.46,2.11-10.11,5.64L706.21,371.5z" />
                                        <path className="st12" d="M747.49,366.6c0.59-1.85,1.63-3.61,3.14-5.05c1.48-1.48,3.54-2.46,5.68-2.81c4.3-0.71,8.91,1.48,10.61,5.29     l-1.25,0.94c-2.81-1.89-5.88-2.69-8.77-2.29c-1.45,0.19-2.82,0.74-4.18,1.53c-1.33,0.83-2.55,1.97-3.88,3.19L747.49,366.6z" />
                                        <path className="st4" d="M725.36,418.87c6.98,10.93,16.29,12.12,23.48,0.61L725.36,418.87z" />
                                        <path className="st19" d="M773.58,384.83c-0.04,7.68-0.71,18.39-1.99,26.07c-4.84-1.56-8.36-6.08-8.36-11.48     C763.23,393.38,767.86,385.75,773.58,384.83z" />
                                        <circle className="st19" cx="708.31" cy="406.56" r="12.9" />
                                        <path className="st11" d="M668.29,395.47c-2.55-1.73-4.89-3.63-7.21-4.75c-1.15-0.57-2.23-0.91-3.18-0.83     c-0.97,0.07-2.08,0.64-3.33,1.53l-1.31-0.85c0.54-1.6,1.69-3.39,3.8-4.09c2.09-0.73,4.22-0.14,5.79,0.67     c3.19,1.74,5.36,4.3,6.69,7.37L668.29,395.47z" />
                                        <path className="st20" d="M307.14,767.17l-18.57,56.41l-3.83-44.08C296.28,776.99,302.58,772.37,307.14,767.17z" />
                                    </g>
                                    <line className="st21" x1="0.34" y1="1554.53" x2="2586.21" y2="1554.53" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    {/* Right */}
                    <div className="flex-1 flex flex-col gap-10 min-w-[470px] mx-8 max-[768px]:mx-5">
                        <div className="srl">
                            {
                                isDarkMode &&
                                <svg className="w-32" xmlns="http://www.w3.org/2000/svg" width="165" height="77" viewBox="0 0 165 77" fill="none">
                                    <path d="M165 38.5C165 17.237 147.763 0 126.5 0H0V77H126.5C147.763 77 165 59.763 165 38.5Z" fill="url(#paint0_linear_76_123)" />
                                    <rect x="62" y="21" width="8" height="37" fill="white" />
                                    <rect x="77" y="21" width="8" height="37" fill="white" />
                                    <rect x="55" y="37" width="8" height="37" transform="rotate(-90 55 37)" fill="white" />
                                    <rect x="101.676" y="32.0488" width="10.8074" height="8.8483" transform="rotate(-98.9222 101.676 32.0488)" fill="white" />
                                    <rect x="119" y="58" width="11" height="38" transform="rotate(180 119 58)" fill="white" />
                                    <rect x="55" y="50" width="8" height="37" transform="rotate(-90 55 50)" fill="white" />
                                    <defs>
                                        <linearGradient id="paint0_linear_76_123" x1="148.755" y1="77" x2="5.55477e-06" y2="77" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#28292D" />
                                            <stop offset="0.784224" stop-color="#28292D" stop-opacity="0.171256" />
                                            <stop offset="1" stop-color="#28292D" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            } {
                                !isDarkMode &&
                                <svg className="w-32" viewBox="0 0 165 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M165 38.5C165 17.237 147.763 0 126.5 0H0V77H126.5C147.763 77 165 59.763 165 38.5Z" fill="url(#paint0_linear_76_123)" />
                                    <rect x="62" y="21" width="8" height="37" fill="#94A3B8" />
                                    <rect x="77" y="21" width="8" height="37" fill="#94A3B8" />
                                    <rect x="55" y="37" width="8" height="37" transform="rotate(-90 55 37)" fill="#94A3B8" />
                                    <rect x="101.676" y="32.0488" width="10.8074" height="8.8483" transform="rotate(-98.9222 101.676 32.0488)" fill="#94A3B8" />
                                    <rect x="119" y="58" width="11" height="38" transform="rotate(180 119 58)" fill="#94A3B8" />
                                    <rect x="55" y="50" width="8" height="37" transform="rotate(-90 55 50)" fill="#94A3B8" />
                                    <defs>
                                        <linearGradient id="paint0_linear_76_123" x1="148.755" y1="77" x2="5.55477e-06" y2="77" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#CBD5E1" />
                                            <stop offset="0.784224" stopColor="#CBD5E1" stopOpacity="0.171256" />
                                            <stop offset="1" stopColor="#CBD5E1" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            }
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
                                <div className="text-2xl min-w-[94.35px] aspect-square flex justify-center items-center bg-slate-200 dark:bg-[#28292d]">
                                    <i className="fa-solid fa-lightbulb"></i>
                                </div>
                                <p className="p-3">
                                    <b>Simple and intuitive</b> user interface that allows you to <b>efficiently manage</b> tasks and projects
                                </p>
                            </div>
                            <div className="srr flex items-center gap-5 shadow-lg">
                                <div className="text-2xl min-w-[94.35px] aspect-square flex justify-center items-center bg-slate-200 dark:bg-[#28292d]">
                                    <i className="fa-solid fa-people-arrows"></i>
                                </div>
                                <p className="p-3">
                                    <b>Advanced collaboration functionality</b> that enables users to assign tasks, share files, add comments and much more
                                </p>
                            </div>
                            <div className="srl flex items-center gap-5 shadow-lg">
                                <div className="text-2xl min-w-[94.35px] aspect-square flex justify-center items-center bg-slate-200 dark:bg-[#28292d]">
                                    <i className="fa-solid fa-gear"></i>
                                </div>
                                <p className="p-3">
                                    Great deal of <b>customization and flexibility options</b> that allow clients to tailor the platform to their specific needs
                                </p>
                            </div>
                            <div className="srr flex items-center gap-5 shadow-lg">
                                <div className="text-2xl min-w-[94.35px] aspect-square flex justify-center items-center bg-slate-200 dark:bg-[#28292d]">
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
                            <div className="bg-slate-300 dark:bg-[#28292d] absolute -top-[2.1rem] left-8 w-44 h-[21.5rem] rounded-xl max-[908px]:hidden"></div>
                            <div className="bg-slate-200 dark:bg-[#414149] relative z-0 flex flex-col justify-center items-center gap-5 p-12 max-[908px]:p-9 max-[908px]:w-full">
                                <div className="w-36 aspect-square rounded-full">
                                    <img src={review1} className="rounded-full" />
                                </div>
                                <p className="leading-none">Tobey Maguire</p>
                            </div>
                        </div>
                    } {
                        slideReviews == 2 &&
                        <div className="max-[908px]:w-full relative max-[908px]:mb-10 my-9 max-[908px]:my-0">
                            <div className="bg-slate-300 dark:bg-[#28292d] absolute -top-[2.1rem] left-8 w-44 h-[21.5rem] rounded-xl max-[908px]:hidden"></div>
                            <div className="bg-slate-200 dark:bg-[#414149] relative z-0 flex flex-col justify-center items-center gap-5 p-12 max-[908px]:p-9 max-[908px]:w-full">
                                <div className="w-36 aspect-square rounded-full">
                                    <img src={review2} className="rounded-full" />
                                </div>
                                <p className="leading-none">Lauren Johnson</p>
                            </div>
                        </div>
                    } {
                        slideReviews == 3 &&
                        <div className="max-[908px]:w-full relative max-[908px]:mb-10 my-9 max-[908px]:my-0">
                            <div className="bg-slate-300 dark:bg-[#28292d] absolute -top-[2.1rem] left-8 w-44 h-[21.5rem] rounded-xl max-[908px]:hidden"></div>
                            <div className="bg-slate-200 dark:bg-[#414149] relative z-0 flex flex-col justify-center items-center gap-5 p-12 max-[908px]:p-9 max-[908px]:w-full">
                                <div className="w-36 aspect-square rounded-full">
                                    <img src={review3} className="rounded-full" />
                                </div>
                                <p className="leading-none">Maiki Tauren</p>
                            </div>
                        </div>
                    }
                    <div className="max-[768px]:flex-1 flex flex-col">
                        <hr className="srl bg-slate-300 dark:bg-[#28292d] border-slate-300 dark:border-slate-900 h-4 mb-6 mt-0 md:mt-9 w-[23.8rem] max-[908px]:hidden relative -z-20" />
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
                <div className="bg-slate-200 dark:bg-[#28292d]">
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
                <div className="flex items-center flex-wrap-reverse justify-between max-[1417px]:ml-0 ml-[10%] gap-14 max-[910px]:gap-5">
                    {/* Left */}
                    <div className="srl flex-1 flex flex-col gap-8 justify-center max-[1417px]:justify-start max-[1417px]:mt-0 mt-10 max-[717px]:mb-0 min-w-[300px] mr-14 max-[1417px]:ml-10 max-[768px]:mx-5">
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
                    <div className="srr flex-[1] max-[768px]:min-w-[350px] max-[1417px]:flex-1 max-[1416px]:justify-center items-center">
                        <svg className="min-[1417px]:!ml-auto max-[1417px]:w-full mr-16 max-[1417px]:h-fit" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="791" height="509" viewBox="0 0 791 509" fill="none">
                            <path className="max-[1416px]:hidden" d="M370 0.0667651L706.952 327.322L600.308 444.63C568.462 479.661 513.971 481.467 479.875 448.621L14.2565 0.0670298L370 0.0667651Z" fill={`${isDarkMode ? "#414149" : "#cbd5e1"}`} />
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
                                    <rect x="484" y="79" width="74" height="74" fill="url(#pattern1)" shapeRendering="crispEdges" />
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
                                    <rect x="217" y="241" width="110" height="110" fill="url(#pattern4)" shapeRendering="crispEdges" />
                                </g>
                            </Link>
                            <Link to="https://www.twitter.com" target="_blank" className="hover:scale-125 hover:-translate-x-[7.2rem] hover:-translate-y-[6.65rem] transition-all">
                                <rect x="435" y="403" width="56" height="47" fill="url(#pattern5)" />
                            </Link>
                            <Link to="https://www.discord.com" target="_blank" className="hover:scale-125 hover:-translate-x-[11.09rem] hover:-translate-y-[5.9rem] transition-all">
                                <rect x="674" y="351" width="69" height="52" fill="url(#pattern6)" />
                            </Link>
                            <defs>
                                <filter id="filter0_d_1146_456" x="33.7068" y="29.9702" width="139" height="139" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <filter id="filter1_d_1146_456" x="268" y="54.0698" width="171" height="171" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <filter id="filter2_d_1146_456" x="503" y="218.07" width="109" height="109" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <filter id="filter3_d_1146_456" x="626" y="294.07" width="165" height="165" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1146_456" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="10" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1146_456" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1146_456" result="shape" />
                                </filter>
                                <filter id="filter4_d_1146_456" x="389" y="351.07" width="147" height="147" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                                <filter id="filter5_d_1146_456" x="459" y="54" width="124" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                                <filter id="filter6_d_1146_456" x="195" y="219" width="154" height="154" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                <footer className="bg-slate-200 dark:bg-[#28292d] text-black dark:text-white pt-10 pb-5">
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
                    <hr className="bg-white dark:bg-[#202124] border-white dark:border-[#202124]" />
                    <div className="container mx-auto flex items-center justify-between flex-wrap mt-5 gap-4 px-5">
                        <div className="srl">
                            <p className="text-center leading-none">Copyright © 2023 Teamer Software</p>
                        </div>
                        <div className="srr">
                            <div className="flex gap-3 text-xl">
                                <Link to="#" className="hover:opacity-50 transition-all"><i className="fab fa-facebook"></i></Link>
                                <Link to="#" className="hover:opacity-50 transition-all"><i className="fab fa-twitter"></i></Link>
                                <Link to="#" className="hover:opacity-50 transition-all"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}