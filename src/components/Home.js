// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import "./App.css";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Image from "./components/Image";
// import Numbers from "./components/Numbers";
// import Timeline from "./components/Timeline";
// import TitleBlock from "./components/TitleBlock";
// import Loader from "./components/Loader";
// import ProgramCard from "./components/ProgramCard";
// import python from "./images/python.png";
// import iot from "./images/iot.png";
// import android from "./images/android.png";
// import industrial_automation from "./images/industrial-automation.png";
// import web from "./images/web.png";
// import Bubbles from "./components/Bubbles";
// import WhySC from "./components/WhySC";
// import LocomotiveScroll from 'locomotive-scroll';
// import BlogItem from "./components/Blog";
// import Foooter from "./components/Foooter";
// import Register from "./components/Register";
// import { ScrollingCarousel } from '@trendyol-js/react-carousel';


// function Home() {
//   const [isLoading, setIsLoading] = useState(true);
  
//   const blogs = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
//       title: 'The Importance of Lifelong Learning',
//       description:
//         'In today\'s rapidly changing world, lifelong learning has become more important than ever. It enables individuals to adapt, grow, and thrive in their personal and professional lives. Lifelong learning fosters creativity, critical thinking, and problem-solving skills. It helps individuals stay relevant in their careers and enhances their overall well-being. Discover the benefits of lifelong learning and how you can incorporate it into your life.',
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
//       title: 'Effective Study Techniques for Students',
//       description:
//         'Good study habits and techniques can significantly improve students\' learning outcomes. Discover effective study techniques that can help you maximize your study time, enhance your understanding of the material, and boost your academic performance. From time management strategies to active learning methods, explore a range of study techniques that can make a difference in your educational journey.',
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
//       title: 'Effective Study Techniques for Students',
//       description:
//         'Good study habits and techniques can significantly improve students\' learning outcomes. Discover effective study techniques that can help you maximize your study time, enhance your understanding of the material, and boost your academic performance. From time management strategies to active learning methods, explore a range of study techniques that can make a difference in your educational journey.',
//     },
//     // Add more blog objects as needed
//   ];

//   const COURSES = [
//     {
//       id: 1,
//       image: python,
//       title: "Python Development",
//       originalPrice: "2500",
//       discountedPrice: "1490",
//       description:
//         "Dive into the world of coding mastery with our Python Development Course. From building applications to automating tasks, you'll grasp Python's versatility. Through hands-on projects, you'll unlock the power of this language in just 30 days. Get ready to code your way to innovation!",
//     },
//     {
//       id: 2,
//       image: web,
//       title: "Web Development",
//       originalPrice: "2000",
//       discountedPrice: "1290",
//       description:
//         "Unleash your creativity and shape the digital landscape with our Web Development Course. Learn to craft responsive, user-friendly websites using HTML, CSS, and JavaScript. With three immersive projects each month, you'll be designing your web success story in just 30 days!",
//       },
   
//     {
//       id: 3,
//       image: android,
//       title: "Android Development",
//       originalPrice: "2000",
//       discountedPrice: "1290",
//       description:
//         "Join the ranks of app creators with our Android Development Course. Discover the art of building Android applications that captivate users. Through a series of real-world projects, you'll master the intricacies of app design, development, and deployment in just 30 days.",
//     },
//      {
//       id: 4,
//       image: iot,
//       title: "IOT",
//       originalPrice: "2000",
//       discountedPrice: "1290",
//       description:
//         "Immerse yourself in the Internet of Things (IoT) realm and shape the future of connectivity. In our IoT Course, you'll learn to build smart devices that communicate and interact seamlessly. With hands-on projects, you'll navigate the world of sensors, actuators, and data streams, all within 30 days.",
//     },
//     {
//       id: 5,
//       image: industrial_automation,
//       title: "Industrial Automation",
//       originalPrice: "2000",
//       discountedPrice: "1290",
//       description:
//         "Transform industries through automation expertise in just 30 days. Our Industrial Automation Course equips you with the skills to design, program, and manage automated systems. Through practical projects, you'll become a force driving efficiency and innovation in industrial processes."
//        },
//     // ... (add more course objects as needed)
//   ];

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector('.App'),
//       smooth: true,
//       multiplier: 0.5,
//       lerp: 0.9  // Adjust this value to change the inertia (higher = more "ease out")
//     });

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     // Clean up the effect on component unmount
//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);

//   return (
//     <div className="App md:max-w-[1920px] md:mx-auto font-Poppins " data-scroll-container>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>

//           <Header />
//           <Hero />
          
//           <div className="md:mx-10 px-2">
//           <Numbers />
//           <TitleBlock
//             title="Courses"
//           />
//           <div className="p-5">
//           <ScrollingCarousel >
// {COURSES.map((course) => (
//                     <ProgramCard
//                       key={course.id}
//                       image={course.image}
//                       title={course.title}
//                       originalPrice={course.originalPrice}
//                       discountedPrice={course.discountedPrice}
//                       description={course.description}
//                     />
//                   ))}
//       </ScrollingCarousel>
//           </div>
          

// <TitleBlock title="Why Source Catalyst?" />
// <WhySC/>
//           <TitleBlock
//             title="Our App"
//             subtitle="Your Gateway to Seamless Learning and Professional Growth"
//           />
//           <Image />

//           <TitleBlock title="Timeline" />
//           <Timeline />
//           <TitleBlock
//             title="Internship Listings"
//             subtitle="Discover the Best Internships Aligned with Your Skills"
//           />
//           <Bubbles className="text-4xl" />
          
//           <TitleBlock
//             title="Blogs"
//             subtitle="Handpicked blogs for the curious minds."
//           />
//           <div className="md:flex md:flex-row md:justify-center">
//             {blogs.map((blog) => (
//               <BlogItem
//                 className="flex justify-start"
//                 key={blog.id}
//                 image={blog.image}
//                 title={blog.title}
//                 description={blog.description}
//               />
//             ))}
//           </div>
//           {/* <FooterWithLogo/> */}
         
//           </div>
//         </>

//       )}
//        <Foooter/>
//     </div>

//   );
// }



// export default Home;

