import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Carousel.css'; // Custom CSS
import one from '../images/carousel/1.png';
import two from '../images/carousel/2.png';
import three from '../images/carousel/3.png';
import four from '../images/carousel/4.png';
import five from '../images/carousel/5.png';
import Slider from 'react-slick';
import BlockImage from './BlockImage';
import knowledge from '../images/knowlege1.png'

const images = [
  one, two, three, four, five
];

const CustomCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
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

    // {
    //   id: 2,
    //   imageUrl: knowledge,
    //   heading: 'Stay Ahead of the Game',
    //   initialParagraph: 'In today\'s fast-paced and cutthroat business landscape, staying ahead of the competition is not just a choice; it\'s a necessity. Whether you\'re a seasoned professional or just starting your career journey, one thing is clear: the road to success is lined with fierce competition. But fear not! Let\'s take a moment to grasp the challenges posed by the relentless competition in almost every industry. The digital age has ushered in an era of globalization and connectivity, making it easier for businesses and professionals to reach a broader audience. While this has created countless opportunities, it has also intensified competition to unprecedented levels.  Every day, new graduates enter the workforce, armed with the latest knowledge and skills.  Established professionals constantly strive to adapt to changing trends and technologies. In  such an environment, merely treading water won\'t cut it. You need to swim faster and smarter.  To excel in this hyper-competitive environment, you must be committed to continuous  improvement. It\'s about moving beyond your comfort zone and embracing lifelong learning. This is where skill development courses come into play. Having completed a few additional courses provide you with the tools and knowledge necessary to not only survive but thrive in your industry.',
    //   questions: [

    //     {
    //       question: 'Here\'s how skill development courses can help you rise to the top:',
    //       answer: (
    //         <>
    //           <ul className="list-none list-decimal pl-4">
    //             <li><span className="font-medium">Enhancing Core Competencies:</span> Skill development courses allow you to deepen your
    //               expertise in your chosen field. Whether you're a marketer, programmer, designer, or any other
    //               professional, there are courses tailored to your needs. By honing your core competencies, you
    //               become indispensable to your employer or clients.</li>
    //             <li><span className="font-medium">Keeping Abreast of Trends: </span>Industries evolve rapidly, and staying updated is crucial. Skill
    //               development courses often focus on the latest industry trends, ensuring that you remain
    //               relevant. Being knowledgeable about the latest tools and techniques can set you apart from
    //               competitors who are stuck in the past.</li>
    //             <li><span className="font-medium">Diversifying Your Skillset: </span>In today's multidisciplinary world, having a diverse skillset is a
    //               valuable asset. Courses outside your immediate field can broaden your horizons and make you
    //               a more versatile professional. This adaptability can be a game-changer when you encounter
    //               unexpected challenges.</li>
    //             <li><span className="font-medium">Networking Opportunities: </span>Many skill development courses offer opportunities to connect
    //               with peers and industry experts. Networking can open doors to collaborations, mentorship, and
    //               even job offers you wouldn't have found otherwise.</li>
    //             <li><span className="font-medium">Boosting Confidence: </span>Confidence is a significant factor in achieving success. Skill
    //               development courses not only enhance your skills but also boost your self-confidence. This
    //               newfound confidence can be a driving force behind your rise to the top.</li>
    //           </ul>
    //         </>
    //       ),
    //     },

    //     {
    //       question: 'Becoming Part of the Top 1%',
    //       answer:
    //         (
    //           <>
    //             <p>The top 1% are the elite, the crème de la crème of their respective industries. They are the
    //               go-to experts, the innovators, and the trailblazers. To reach this pinnacle, you need to be
    //               exceptional.
    //               Skill development courses are your ticket to joining this exclusive club. By continuously
    //               investing in your education and skills, you're setting yourself on a trajectory that leads to the top.
    //             </p>
    //             <p>Here are some tips to help you get there:</p>
    //             <ul className="list-none list-decimal pl-4">
    //               <li><span className="font-medium">Set Clear Goals: </span>Define your career goals and what you need to achieve them. This clarity
    //                 will guide your choice of skill development courses.</li>
    //               <li><span className="font-medium">Commit to Lifelong Learning: </span>The journey to the top 1% is ongoing. Embrace learning as a
    //                 lifelong endeavor, not just a means to an end.</li>
    //               <li><span className="font-medium">Prioritize Time Management: </span>Balancing work, personal life, and education can be
    //                 challenging. Effective time management is essential to keep moving forward.</li>
    //               <li><span className="font-medium">Seek Feedback: </span>Constructive feedback is invaluable. Don't be afraid to ask for it and use it to
    //                 improve.</li>
    //               <li><span className="font-medium">Stay Humble: </span>Even when you reach the top 1%, remember that there's always more to learn
    //                 and room for growth.</li>
    //             </ul>
    //             <p style={{ paddingTop: '10px' }}>In the relentless competition of today's industries, staying ahead of the game is a continuous
    //               battle. Skill development courses are your allies in this journey. They provide you with the
    //               knowledge, confidence, and adaptability required to not only keep pace but soar ahead.</p>

    //           </>
    //         ),
    //     },
    //   ],
    //   endingParagraph: 'Remember, the top 1% isn\'t reserved for a select few; it\'s a destination reachable by anyone willing to invest in their skills and commit to excellence. So, take that step today. Enroll in that course, invest in yourself, and seize your place at the summit of your industry. The competition may be cutthroat, but with the right skills, you can cut through it and claim your well-deserved spot at the top.',
    // },
    // Add more blog items as needed
  ];
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    // beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Number of slides on desktop

        },
      },],
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="Carousel justify-between items-center ">
      <Slider {...settings}>
        {/* {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} className='rounded-custom' />
          </div>
        ))} */}

        {blogs.map((blog) => (
          <BlockImage key={blog.id} blogData={blog} />
        ))}
      </Slider>
    </div>
  );
};


export default CustomCarousel;
