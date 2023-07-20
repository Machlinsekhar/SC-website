import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "./components/Image";
import Numbers from "./components/Numbers";
import Timeline from "./components/Timeline";
import TitleBlock from "./components/TitleBlock";
import Loader from "./components/Loader";
import ProgramCard from "./components/ProgramCard";
import rectangleImage from "./images/program-domain.png"
import Bubbles from "./components/Bubbles";
import Game from "./components/Game";
import LocomotiveScroll from 'locomotive-scroll';
import BlogItem from "./components/Blog";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'The Importance of Lifelong Learning',
      description:
        'In today\'s rapidly changing world, lifelong learning has become more important than ever. It enables individuals to adapt, grow, and thrive in their personal and professional lives. Lifelong learning fosters creativity, critical thinking, and problem-solving skills. It helps individuals stay relevant in their careers and enhances their overall well-being. Discover the benefits of lifelong learning and how you can incorporate it into your life.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
      title: 'Effective Study Techniques for Students',
      description:
        'Good study habits and techniques can significantly improve students\' learning outcomes. Discover effective study techniques that can help you maximize your study time, enhance your understanding of the material, and boost your academic performance. From time management strategies to active learning methods, explore a range of study techniques that can make a difference in your educational journey.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
      title: 'Effective Study Techniques for Students',
      description:
        'Good study habits and techniques can significantly improve students\' learning outcomes. Discover effective study techniques that can help you maximize your study time, enhance your understanding of the material, and boost your academic performance. From time management strategies to active learning methods, explore a range of study techniques that can make a difference in your educational journey.',
    },
    // Add more blog objects as needed
  ];

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.App'),
      smooth: true,
      multiplier: 0.5,
      lerp: 0.9  // Adjust this value to change the inertia (higher = more "ease out")
    });
  
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  
    // Clean up the effect on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className="App md:max-w-[1300px] md:mx-auto font-Poppins" data-scroll-container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />
          <Numbers />
          <TitleBlock
            title="The App"
            subtitle="Your Gateway to Seamless Learning and Professional Growth"
          />
          <Image />
          <TitleBlock
            title="Programs"
            subtitle="Unleashing your Potential for Skill Development and Career Advancement"
          />
          <ProgramCard
            image={rectangleImage}
            title="Source Catalyst Upskill Program"
            originalPrice="2500"
            discountedPrice="1490"
          />
          <TitleBlock title="Timeline" />
          <Timeline />
          <TitleBlock
            title="Internship Listings"
            subtitle="Discover the Best Internships Aligned with Your Skills"
          />
          <Bubbles className="text-4xl"/>

          <TitleBlock
            title="Blogs"
            subtitle="Handpicked blogs for the curious minds."
          />
          <div className="md:flex md:flex-row md:justify-start">
  {blogs.map((blog) => (
    <BlogItem
      className="flex justify-start"
      key={blog.id}
      image={blog.image}
      title={blog.title}
      description={blog.description}
    />
  ))}
</div>
        </>
 
      )}
    </div>

  );
}

export default App;
