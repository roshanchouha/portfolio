import React from "react";
import Project from "./component/Project";
import img from "./image/timer.avif";
import grocery from "./image/online grocery.avif";
import examForge from "./image/test.jpg";
import todo from "./image/todolist.png";
import  Menus  from './component/Menu'

const Portfolio = () => {
  return (
    <>
     <div><Menus className='Menu3'  /></div>
      <div id="Portfolio" className="  container  col-11  min-vh-100 ">
      
        <h5 className="text-center   text-primary">My Portfolio</h5>
        <h1 className="text-center">Recent Work</h1>
        <div className="Projects">
          <Project
            className="projectone"
            image={examForge}
            title="ExamForge"
            about="ExamForge is a mock test platform and a comprehensive project seamlessly integrating MongoDB, Express.js, React.js, and Node.js. Designed for efficient and realistic exam simulations, it offers a user-friendly interface and robust backend, ensuring a seamless and responsive testing experience."
            link="https://www.linkedin.com/feed/update/urn:li:activity:7133523866089312256/"
          />
          <Project
            className="project2"
            image={todo}
            title="Todo-list"
           about="The MERN Todo List project is a dynamic web application that leverages the power of MongoDB, Express.js, React.js, and Node.js to create a seamless and efficient task management system. Users can easily add, edit, and mark tasks as completed, while the application ensures real-time updates and a smooth user experience."
           link="https://www.linkedin.com/feed/update/urn:li:activity:7117449103474647040/"
          />
          <Project
            className="project3"
            image={img}
            title="Timer and Stopwatch"
            about="The Stopwatch and Timer project is a software application that provides users with a digital stopwatch and timer 
functionality. It allows users to measure elapsed time accurately using a stopwatch feature and set countdown timers 
for various purposes.
"           
            link="https://www.linkedin.com/feed/update/urn:li:activity:7058495818135142400/"
          />
          <Project
            className="project3"
            image={grocery}
            title="Online Grocery Platform"
            about="Online Grocery Platform is a Platform that aims to provide a convenient and efficient way for users to purchase groceries 
online. The platform serves as a marketplace connecting various vendors . Local vendors can easily register their shop and 
bring their shop online. "
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
