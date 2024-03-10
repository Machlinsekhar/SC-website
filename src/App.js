import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "./components/Image";
import Numbers from "./components/Numbers";
import Timeline from "./components/Timeline";
import TitleBlock from "./components/TitleBlock";
import Loader from "./components/Loader";
import ProgramCard from "./components/ProgramCard";
import python from "./images/python.png";
import iot from "./images/iot.png";
import android from "./images/android.png";
import industrial_automation from "./images/industrial-automation.png";
import web from "./images/web.png";
import Bubbles from "./components/Bubbles";
import CustomCarousel from "./components/CustomCarousel";
import LocomotiveScroll from 'locomotive-scroll';
import BlogItem from "./components/Blog";
import Foooter from "./components/Foooter";
import Register from "./components/Register";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import LogoSlider from "./components/LogoSlider";
import Card from "./components/Card";
import accenture from './images/companies/accenture.png';
import jio from './images/companies/jio.png';
import deloitte from './images/companies/deloitte.png';
import forcepoint from './images/companies/forcepoint.png';
import lti from './images/companies/lti.png';
import godrej from './images/companies/godrej.png';
import rocket from './images/rocket.png';
import coinbag from './images/coinbag.png';
import handshake from './images/handshake.png';
import phone from './images/phone.png';
import prasad from './images/prasad.png';
import ciba from './images/ciba.png';
import knowledge from './images/knowlege1.png';
import testimonialImage2 from './images/Kaliappan.jpeg';
import TestimonialBlock from "./components/TestimonialBlock";
import testimonialImage3 from './images/Hasrsh.jpeg';
import testimonialImage1 from './images/Atharva.jpeg';
import ProfileCard from "./ProfileCard";
import Advisors from "./components/Advisors";
import QuestionBox from "./components/QuestionBox";
import BlockImage from "./components/BlockImage";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Blog from "./components/Blog";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const blogs = [
    {
      id: 1,
      imageUrl: knowledge,
      heading: 'The Impact of Project-Based Learning on Skill Development',
      initialParagraph: 'In today\'s fast-paced world, learning has evolved from textbooks and lectures to a more hands-on approach. One method that has gained popularity is project-based learning. It\'s not just a trend; it\'s a powerful way to master skills and accelerate your development.',
      questions: [
        {
          question: 'What is Project-Based Learning?',
          answer: 'At its core, project-based learning is exactly what it sounds like - learning through projects. Instead of just reading or listening, you actively engage with the subject matter by working on real-world projects.',
        },
        {
          question: 'Why Does it Work?',
          answer: (
            <>
              <ul className="list-disc pl-4">
                <li><span className="font-medium">Practical Application:</span> Project-based learning works because it's practical. Instead of
                  memorizing facts or theories, you're applying your knowledge to solve problems. This
                  hands-on approach cements your understanding and makes the learning experience
                  more meaningful.
                  It bridges the gap between theory and practice. It's not just about acquiring knowledge;
                  it's about applying it to solve real problems.</li>
                <li><span className="font-medium">Skill Mastery:</span>Traditional education often offers a broad overview of a subject. In
                  contrast, project-based learning allows for a deeper dive into specific skills, resulting in
                  true mastery.</li>
                <li><span className="font-medium">Motivation and Engagement: </span>When learners see the immediate impact of their work,
                  they become more motivated and engaged in the learning process.</li>
                <li><span className="font-medium">Collaboration: </span>Projects often involve teamwork, fostering collaboration and
                  communication skills - essential in today's workplace.</li>
              </ul>
            </>
          ),
        },

        {
          question: 'Making the Most of Project-Based Learning',
          answer:
            (
              <>
                <p>To maximize the effectiveness of project-based learning, consider these strategies:</p>
                <ul className="list-disc pl-4">
                  <li><span className="font-medium">Set Clear Goals:</span>Define what you want to achieve with each project. Having clear
                    objectives will keep you focused and motivated.</li>
                  <li><span className="font-medium">Embrace Challenges: </span>Don't shy away from difficult projects. The most substantial growth
                    often comes from tackling the toughest challenges.</li>
                  <li><span className="font-medium">Seek Feedback: </span>Encourage feedback from peers and mentors. Constructive criticism is
                    a valuable tool for improvement.</li>
                  <li><span className="font-medium">Reflect and Adapt: </span>Regularly assess your progress and adjust your approach as
                    needed. Self-reflection is key to continuous improvement.</li>
                </ul>
              </>
            ),
        },
      ],
      endingParagraph: 'Project-based learning is a game-changer in the world of skill development. It\'s not just about what you learn; it\'s about what you can do with that knowledge. This approach equips you with practical expertise, enhances your problem-solving abilities, and prepares you for the dynamic demands of the modern workforce. So, if you\'re looking to stay ahead in your career or embark on a new skill-building journey, consider project-based learning. It\'s not just a learning method; it\'s a pathway to unlocking your full potential. Start your journey to skill mastery today.',
    },

    {
      id: 2,
      imageUrl: knowledge,
      heading: 'Stay Ahead of the Game',
      subheading: 'How Skill Development Courses Can Catapult You into the Top 1%',
      initialParagraph: 'In today\'s fast-paced and cutthroat business landscape, staying ahead of the competition is not just a choice; it\'s a necessity. Whether you\'re a seasoned professional or just starting your career journey, one thing is clear: the road to success is lined with fierce competition. But fear not! ',
      initialParagraph1: 'Let\'s take a moment to grasp the challenges posed by the relentless competition in almost every industry. The digital age has ushered in an era of globalization and connectivity, making it easier for businesses and professionals to reach a broader audience. While this has created countless opportunities, it has also intensified competition to unprecedented levels.  Every day, new graduates enter the workforce, armed with the latest knowledge and skills.  Established professionals constantly strive to adapt to changing trends and technologies. In  such an environment, merely treading water won\'t cut it. You need to swim faster and smarter.  ',
      initialParagraph2: 'To excel in this hyper-competitive environment, you must be committed to continuous  improvement. It\'s about moving beyond your comfort zone and embracing lifelong learning. This is where skill development courses come into play. Having completed a few additional courses provide you with the tools and knowledge necessary to not only survive but thrive in your industry.',
      questions: [

        {
          question: 'Here\'s how skill development courses can help you rise to the top:',
          answer: (
            <>
              <ul className=" list-decimal pl-4">
                <li><span className="font-medium">Enhancing Core Competencies:</span> Skill development courses allow you to deepen your
                  expertise in your chosen field. Whether you're a marketer, programmer, designer, or any other
                  professional, there are courses tailored to your needs. By honing your core competencies, you
                  become indispensable to your employer or clients.</li>
                <li><span className="font-medium">Keeping Abreast of Trends: </span>Industries evolve rapidly, and staying updated is crucial. Skill
                  development courses often focus on the latest industry trends, ensuring that you remain
                  relevant. Being knowledgeable about the latest tools and techniques can set you apart from
                  competitors who are stuck in the past.</li>
                <li><span className="font-medium">Diversifying Your Skillset: </span>In today's multidisciplinary world, having a diverse skillset is a
                  valuable asset. Courses outside your immediate field can broaden your horizons and make you
                  a more versatile professional. This adaptability can be a game-changer when you encounter
                  unexpected challenges.</li>
                <li><span className="font-medium">Networking Opportunities: </span>Many skill development courses offer opportunities to connect
                  with peers and industry experts. Networking can open doors to collaborations, mentorship, and
                  even job offers you wouldn't have found otherwise.</li>
                <li><span className="font-medium">Boosting Confidence: </span>Confidence is a significant factor in achieving success. Skill
                  development courses not only enhance your skills but also boost your self-confidence. This
                  newfound confidence can be a driving force behind your rise to the top.</li>
              </ul>
            </>
          ),
        },

        {
          question: 'Becoming Part of the Top 1%',
          answer:
            (
              <>
                <p>The top 1% are the elite, the crème de la crème of their respective industries. They are the
                  go-to experts, the innovators, and the trailblazers. To reach this pinnacle, you need to be
                  exceptional.
                  Skill development courses are your ticket to joining this exclusive club. By continuously
                  investing in your education and skills, you're setting yourself on a trajectory that leads to the top.
                </p>
                <p>Here are some tips to help you get there:</p>
                <ul className=" list-decimal pl-4">
                  <li><span className="font-medium">Set Clear Goals: </span>Define your career goals and what you need to achieve them. This clarity
                    will guide your choice of skill development courses.</li>
                  <li><span className="font-medium">Commit to Lifelong Learning: </span>The journey to the top 1% is ongoing. Embrace learning as a
                    lifelong endeavor, not just a means to an end.</li>
                  <li><span className="font-medium">Prioritize Time Management: </span>Balancing work, personal life, and education can be
                    challenging. Effective time management is essential to keep moving forward.</li>
                  <li><span className="font-medium">Seek Feedback: </span>Constructive feedback is invaluable. Don't be afraid to ask for it and use it to
                    improve.</li>
                  <li><span className="font-medium">Stay Humble: </span>Even when you reach the top 1%, remember that there's always more to learn
                    and room for growth.</li>
                </ul>
                <p style={{ paddingTop: '10px' }}>In the relentless competition of today's industries, staying ahead of the game is a continuous
                  battle. Skill development courses are your allies in this journey. They provide you with the
                  knowledge, confidence, and adaptability required to not only keep pace but soar ahead.</p>

              </>
            ),
        },
      ],
      endingParagraph: 'Remember, the top 1% isn\'t reserved for a select few; it\'s a destination reachable by anyone willing to invest in their skills and commit to excellence. So, take that step today. Enroll in that course, invest in yourself, and seize your place at the summit of your industry. The competition may be cutthroat, but with the right skills, you can cut through it and claim your well-deserved spot at the top.',
    },
    // Add more blog items as needed
  ];

  const companies = [
    deloitte, accenture, forcepoint, jio, deloitte, accenture, forcepoint, jio
  ];
  const mentors = [
    jio, godrej, accenture, lti, jio, godrej, accenture, lti, jio, godrej, accenture, lti
  ];

  const why = [
    {
      id: 1,
      image: rocket,
      title: 'SKYROCKET YOUR CAREER',
      description: 'Why settle for less when you can aim for the stars? Get mentored by industry leaders and secure placements at India\'s top companies.'
    },
    {
      id: 2,
      image: coinbag,
      title: 'BUILD SKILLS THAT SHAPE TOMORROW',
      description: 'The world evolves, and so should your skills. Source Catalyst equips you with the tools of tomorrow, setting you on a path to conquer future challenges.'
    },
    {
      id: 3, image: handshake,
      title: 'JOIN THE ELITE CIRCLE',
      description: 'Become a part of an exclusive community where you\'re not just a student; you\'re a future industry leader.'
    },
    {
      id: 4, image: phone,
      title: 'IGNITE LEARNING',
      description: 'Education comes alive when knowledge meets action. Source Catalyst transforms learning with hands-on projects, letting you turn theory into real-world expertise'
    }
  ];

  const testimonials = [
    {
      id: 1,
      testimonialText: "Before joining this program, I had basic coding skills. But the project on machine learning took my skills to another level. I got to work on a real-world data set and even presented my findings to industry experts. The mentors were incredibly supportive, and the resources were top-notch. This project was a turning point in my academic journey.",
      tname: "Atharva Patil",
      title: "Deloitte",
      testimonialImage: testimonialImage1,
    },
    {
      id: 2,
      testimonialText: "I joined Source Catalyst’s Web Development Program during semester break and it has proved game-changer for me! The projects they provided helped me not only to learn web development deeper but also upgraded my CV.  And whenever there was any difficulty, my mentor always helped me out. I definitely recommend everyone to join this program!",
      tname: "Kaliappan Yadav",
      title: "Force Point",
      testimonialImage: testimonialImage2,
    },
    {
      id: 3,
      testimonialText: "Just after completion of Source Catalyst Program I landed my first job! I joined Python Program just before the placement season. Their wide variety of projects gave me the opportunity to upskill get a upper hand and eventually secure a job! Highly recommended for anyone looking to kickstart their career journey.",
      tname: "Harsh Shah",
      title: "Jio",
      testimonialImage: testimonialImage3,
    },

  ];


  const advice = "Hello Future Leaders! I'm thrilled to be part of the advisory board here. This program is a goldmine for anyone serious about tech and innovation. Don't miss this chance to learn, grow, and upskill. Your future self will thank you.";
  const aname = "PRASAD MENON";
  const post = "Position Ciba";
  const faq = [
    {
      id: 1,
      question: "How can I join Source Catalyst?",
      answer: "You can enroll in our courses directly on our website and start your journey to skill development and career advancement.",
    },
    {
      id: 2,
      question: "What is Source Catalyst?",
      answer: "Source Catalyst is an innovative skill development platform offering courses in Python, Web Development, Android Development, IoT, and Industrial Automation.",
    },
    {
      id: 3,
      question: "What makes Source Catalyst unique?",
      answer: "We emphasize hands-on project-based learning, weekly masterclasses with industry experts, one-on-one mentorship, and real-world assessments.",
    },
    {
      id: 4,
      question: "Who can benefit from Source Catalyst?",
      answer: "Source Catalyst is designed for learners of all levels, from beginners to advanced tech enthusiasts, seeking to enhance their skills and career prospects.",
    },
    {
      id: 5,
      question: "How do the courses work?",
      answer: "Our courses run for 30 days, featuring three projects each month. Learners engage in practical learning and receive guidance from experts.",
    },
    // Add more objects with questions and answers as needed
  ];
  // const blogs = [
  //   {
  //     id: 1,
  //     image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  //     title: 'The Importance of Lifelong Learning',
  //     description:
  //       'In today\'s rapidly changing world, lifelong learning has become more important than ever. It enables individuals to adapt, grow, and thrive in their personal and professional lives. Lifelong learning fosters creativity, critical thinking, and problem-solving skills. It helps individuals stay relevant in their careers and enhances their overall well-being. Discover the benefits of lifelong learning and how you can incorporate it into your life.',
  //   },
  //   {
  //     id: 2,
  //     image: 'https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
  //     title: 'Effective Study Techniques for Students',
  //     description:
  //       'Good study habits and techniques can significantly improve students\' learning outcomes. Discover effective study techniques that can help you maximize your study time, enhance your understanding of the material, and boost your academic performance. From time management strategies to active learning methods, explore a range of study techniques that can make a difference in your educational journey.',
  //   },
  //   {
  //     id: 3,
  //     image: 'https://images.unsplash.com/photo-1589104760192-ccab0ce0d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
  //     title: 'Effective Study Techniques for Students',
  //     description:
  //       'Good study habits and techniques can significantly improve students\' learning outcomes. Discover effective study techniques that can help you maximize your study time, enhance your understanding of the material, and boost your academic performance. From time management strategies to active learning methods, explore a range of study techniques that can make a difference in your educational journey.',
  //   },
  //   // Add more blog objects as needed
  // ];

  const COURSES = [
    {
      id: 1,
      image: python,
      title: "Python Development",
      originalPrice: "2500",
      discountedPrice: "1490",
      description:
        "Dive into the world of coding mastery with our Python Development Course. From building applications to automating tasks, you'll grasp Python's versatility. Through hands-on projects, you'll unlock the power of this language in just 30 days. Get ready to code your way to innovation!",
    },
    {
      id: 2,
      image: web,
      title: "Web Development",
      originalPrice: "2000",
      discountedPrice: "1290",
      description:
        "Unleash your creativity and shape the digital landscape with our Web Development Course. Learn to craft responsive, user-friendly websites using HTML, CSS, and JavaScript. With three immersive projects each month, you'll be designing your web success story in just 30 days!",
    },

    {
      id: 3,
      image: android,
      title: "Android Development",
      originalPrice: "2000",
      discountedPrice: "1290",
      description:
        "Join the ranks of app creators with our Android Development Course. Discover the art of building Android applications that captivate users. Through a series of real-world projects, you'll master the intricacies of app design, development, and deployment in just 30 days.",
    },
    {
      id: 4,
      image: iot,
      title: "IOT",
      originalPrice: "2000",
      discountedPrice: "1290",
      description:
        "Immerse yourself in the Internet of Things (IoT) realm and shape the future of connectivity. In our IoT Course, you'll learn to build smart devices that communicate and interact seamlessly. With hands-on projects, you'll navigate the world of sensors, actuators, and data streams, all within 30 days.",
    },
    {
      id: 5,
      image: industrial_automation,
      title: "Industrial Automation",
      originalPrice: "2000",
      discountedPrice: "1290",
      description:
        "Transform industries through automation expertise in just 30 days. Our Industrial Automation Course equips you with the skills to design, program, and manage automated systems. Through practical projects, you'll become a force driving efficiency and innovation in industrial processes."
    },
    // ... (add more course objects as needed)
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
    <div className="App md:max-w-[1920px] md:mx-auto " data-scroll-container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />

          <div className="md:px-10 px-2 bg-[#F3F3F3]">
            <Numbers />
            <TitleBlock
              title="SUCCESS STORIES"
              subtitle="Companies Where Our Students Shine"
            />
            <LogoSlider images={companies} />

            <TitleBlock
              subtitle="Hear from People Like You"
            />
            <div className=" py-8 md:ml-10">

              <ScrollingCarousel>

                {testimonials.map((testimonials) => (
                  <TestimonialBlock key={testimonials.id}
                    testimonial={testimonials.testimonialText}
                    testimonialImage={testimonials.testimonialImage}
                    tname={testimonials.tname}
                    title={testimonials.title} />
                ))}

              </ScrollingCarousel>

            </div>

            <TitleBlock
              title="PARTNERED WITH THE BEST"
              subtitle="Where Our Mentors Come From"
            />
            <LogoSlider images={mentors} />

            <TitleBlock
              title="CHOOSE SOURCE CATALYST BECAUSE..."
              subtitle="Unlock Your Full Potential with Us" />

            <div className="container mx-auto py-8">
              <div className="flex flex-wrap justify-center">
                {why.map((item) => (
                  <Card key={item.id} data={item} />
                ))}
              </div>
            </div>
            {/* <TitleBlock
              title="DISCOVER YOUR POTENTIAL"
              subtitle="Stand Out From The Crowd" />
            <div className="container mx-auto py-8 ">
              <div className="flex justify-center">
                <ProfileCard
                  name="Rahul Gupta"
                  degree="BTech Final Year Student"
                  photoSrc={testimonialImage}

                />
              </div>
            </div>

            <div className="text-center p-10 text-lg">
              Got a <span className="text-blue-500">free </span>profile on Source Catalyst? Then you're already ahead. We make you <span className="text-blue-500">stand out</span>, opening doors to <span className="text-blue-500">growth opportunities</span> you won't find elsewhere. Simply put, being here is a game-changer for your career. Don't miss out.
            </div> */}

            <TitleBlock
              title="EXPERT ADVISORS"
              subtitle="Meet the Innovators Guiding Our Path" />
            <div className="mb-20 md:m-10">
              <Advisors advice={advice} imageSrc={prasad} aname={aname} title={post} logoSrc={ciba} />
            </div>
            <TitleBlock
              title="FAQ CORNER"
              subtitle="Your Questions, Answered" />
            <div className="container mx-auto py-8` mt-10">
              {faq.map((faq, id) => (
                <QuestionBox key={id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            <TitleBlock
              title="KNOWLEDGE CENTER"
              subtitle="Read, Learn, and Grow" />
            <div >
              {/* <ScrollingCarousel >
              {blogs.map((blog) => (
                <BlockImage key={blog.id} blogData={blog} />
              ))} 
              
              </ScrollingCarousel> */}


            </div>
            <div className=" flex">
            <ScrollingCarousel >
              {blogs.map((blog) => (
                <Blog key={blog.id} blogData={blog} />
              ))}
               </ScrollingCarousel>
            </div>
           
            {/*  <div className="p-5">

              <ScrollingCarousel >
                {COURSES.map((course) => (
                  <ProgramCard
                    key={course.id}
                    image={course.image}
                    title={course.title}
                    originalPrice={course.originalPrice}
                    discountedPrice={course.discountedPrice}
                    description={course.description}
                  />
                ))}
         </ScrollingCarousel>
            </div> 
            
            <WhySC />
            <TitleBlock
              title="Our App"
              subtitle="Your Gateway to Seamless Learning and Professional Growth"
            />
            <Image />

            <TitleBlock title="Timeline" />
            <Timeline />
            <TitleBlock
              title="Internship Listings"
              subtitle="Discover the Best Internships Aligned with Your Skills"
            />
            <Bubbles className="text-4xl" />

            <TitleBlock
              title="Blogs"
              subtitle="Handpicked blogs for the curious minds."
            />
            <div className="md:flex md:flex-row md:justify-center">
              {blogs.map((blog) => (
                <BlogItem
                  className="flex justify-start"
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                />
              ))}
            </div> */}
            {/* <FooterWithLogo/> */}

          </div>
          <Foooter />
        </>

      )}

      {/* <Register /> */}
    </div>

  );
}



export default App;


