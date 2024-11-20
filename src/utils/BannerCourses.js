import Laptop from "../assets/images/Laptop.webp";
import Swiggy from "../assets/images/swiggy.jpg";
import YouTube from "../assets/images/YouTube.svg";
import React from "../assets/images/React.png";
import Redux from "../assets/images/ReactRedux.png";
import ReactRedux from "../assets/images/ReduxToolkit.gif";
import Debounce from "../assets/images/debounce-button.png";
import Hoisting from "../assets/images/Hoisting.png";
import Closure from "../assets/images/Closure.webp";
import Iterate from "../assets/images/Iterate.jpg";
import TypeScript from "../assets/images/TypeScript.png";
import ECommerce from "../assets/images/ECommerce.png";
import RESTAPI from "../assets/images/RESTAPI.jpg";
import GraphQL from "../assets/images/GraphQL.png";
import BlinkIt from "../assets/images/BlinkIt.svg";

export const BannerCourses = {
  heading: "Browse All Courses",
  description:
    "If you already know what you're looking for, BeOnSchool is divided into various courses ranging from beginner to advanced.",
  categories: [
    "react",
    "redux",
    "javascript",
    "typescript",
    "php",
    "laravel",
    "mysql",
    "api",
    "graphql",
  ],
  courses: {
    react: {
      heading: "Course related to React JS",
      content: [
        {
          id: 1,
          title: "React Js",
          description:
            "Covering Basic to Advanced level - React JS Functional Components, JSX, Props vs State, Map vs Filter vs Reduce, APIs Usage, React Hooks, React Router, HOC, Controlled & Uncontrolled Components.",
          thumbnail: Laptop,
          tags: ["js", "react", "api"],
          price: 4999.0,
          level: "intermediate",
        },
        {
          id: 2,
          title: "React, TypeScript & Tailwind CSS - Course for Beginner",
          description:
            "Developing a React JS project using React JS with TypeScript and Tailwind CSS for Beginner tutorials.",
          thumbnail: Laptop,
          tags: ["js", "react", "typescript", "tailwindcss"],
          price: 4999.0,
          level: "beginner",
        },
        {
          id: 3,
          title: "React JS | Swiggy Web App Clone",
          description:
            "Developing Swiggy web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: Laptop,
          tags: ["js", "react", "typescript", "tailwindcss", "redux", "api"],
          price: 5999.0,
          level: "intermediate",
        },
        {
          id: 4,
          title: "React JS | YouTube Web App Clone",
          description:
            "Developing YouTube web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: Laptop,
          tags: ["js", "react", "typescript", "tailwindcss", "redux", "api"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 25,
          title: "React JS | Frontend System Design | Networking | REST APIs",
          description:
            "Uncover the principles of REST APIs, mastering the art of building robust and scalable interfaces for web applications.",
          thumbnail: Laptop,
          tags: ["js", "react", "api"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 26,
          title: "React JS | Frontend System Design | Networking | GraphQL",
          description:
            "Explore the power of GraphQL, enabling efficient data querying and manipulation for modern web applications.",
          thumbnail: Laptop,
          tags: ["js", "react", "graphql"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 28,
          title:
            "BlinkIt Clone | Full-Stack Development | PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management",
          description:
            "Built the powerful app: BlinkIt Clone with the tech stack of PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management. Dive Deep into the web networking",
          thumbnail: Laptop,
          tags: [
            "js",
            "react",
            "redux",
            "typescript",
            "php",
            "laravel",
            "mysql",
            "graphql",
          ],
          price: 6999.0,
          level: "advanced",
        },
      ],
    },
    redux: {
      heading: "Course related to React Redux",
      content: [
        {
          id: 3,
          title: "React JS | Swiggy Web App Clone",
          description:
            "Developing Swiggy web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: Laptop,
          tags: ["js", "react", "typescript", "tailwindcss", "redux", "api"],
          price: 5999.0,
          level: "intermediate",
        },
        {
          id: 4,
          title: "React JS | YouTube Web App Clone",
          description:
            "Developing YouTube web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: Laptop,
          tags: ["js", "react", "typescript", "tailwindcss", "redux", "api"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 6,
          title: "React Redux Crash Course | Absolute Beginner Course",
          description:
            "This course covering the overall React Redux from basic to advanced, What id React Redux? When to use and when not? Understanding Data Flow React. Props Drilling. Why do we need Context API",
          thumbnail: Laptop,
          tags: ["js", "react", "redux"],
          price: 3999.0,
          level: "beginner",
        },
        {
          id: 7,
          title: "Redux Toolkit | Complete Course",
          description:
            "How to use Redux Toolkit to manage state in a scalable and efficient way. Redux Toolkit simplifies state management in React apps by reducing boilerplate and offering a powerful",
          thumbnail: Laptop,
          tags: ["js", "react", "redux"],
          price: 5999.0,
          level: "intermediate",
        },
        {
          id: 28,
          title:
            "BlinkIt Clone | Full-Stack Development | PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management",
          description:
            "Built the powerful app: BlinkIt Clone with the tech stack of PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management. Dive Deep into the web networking",
          thumbnail: Laptop,
          tags: [
            "js",
            "react",
            "redux",
            "typescript",
            "php",
            "laravel",
            "mysql",
            "graphql",
          ],
          price: 6999.0,
          level: "advanced",
        },
      ],
    },
    javascript: {
      heading: "Course related to JavaScript",
      content: [
        {
          id: 1,
          title: "React Js",
          description:
            "Covering Basic to Advanced level - React JS Functional Components, JSX, Props vs State, Map vs Filter vs Reduce, APIs Usage, React Hooks, React Router, HOC, Controlled & Uncontrolled Components.",
          thumbnail: React,
          tags: ["js", "react", "api"],
          price: 4999.0,
          level: "intermediate",
        },
        {
          id: 3,
          title: "React JS | Swiggy Web App Clone",
          description:
            "Developing Swiggy web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: Swiggy,
          tags: ["js", "react", "typescript", "redux", "api"],
          price: 5999.0,
          level: "intermediate",
        },
        {
          id: 4,
          title: "React JS | YouTube Web App Clone",
          description:
            "Developing YouTube web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: YouTube,
          tags: ["js", "react", "typescript", "redux", "api"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 6,
          title: "React Redux Crash Course | Absolute Beginner Course",
          description:
            "This course covering the overall React Redux from basic to advanced, What id React Redux? When to use and when not? Understanding Data Flow React. Props Drilling. Why do we need Context API",
          thumbnail: ReactRedux,
          tags: ["js", "react", "redux"],
          price: 3999.0,
          level: "beginner",
        },
        {
          id: 7,
          title: "Redux Toolkit | Complete Course",
          description:
            "How to use Redux Toolkit to manage state in a scalable and efficient way. Redux Toolkit simplifies state management in React apps by reducing boilerplate and offering a powerful",
          thumbnail: Redux,
          tags: ["js", "react", "redux"],
          price: 5999.0,
          level: "intermediate",
        },
        {
          id: 8,
          title: "Debouncing in JavaScript | Flipkart UI",
          description:
            "Debouncing is not just an important interview question, but it's also very useful to improve the performance of large scale web application.",
          thumbnail: Debounce,
          tags: ["js"],
          price: 2999.0,
          level: "advanced",
        },
        {
          id: 9,
          title: "Hoisting in JavaScript | Variable & Function",
          description:
            "Hoisting in JavaScript is the most famous interview question and it's also one of the most misunderstood concepts in JS.",
          thumbnail: Hoisting,
          tags: ["js"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 10,
          title: "Closure in JavaScript",
          description:
            "Closure in JavaScript is the most important topic for interview. Even many senior frontend developers don't understand this concept properly.",
          thumbnail: Closure,
          tags: ["js"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 11,
          title: "Map, Filter & Reduce in JavaScript",
          description:
            "Map, Filter & Reduce array function are the most popular Higher-Order Functions in JavaScript.",
          thumbnail: Iterate,
          tags: ["js"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 12,
          title: "Learn TypeScript The Right Way",
          description:
            "Learning the TS the right way, we dive deep into the TS along with the JS core concept, and the fundamental of TS",
          thumbnail: TypeScript,
          tags: ["js", "typescript"],
          price: 2999.0,
          level: "beginner",
        },
        {
          id: 16,
          title:
            "E-Commerce Project with JavaScript, PHP, MySQL and Tailwind CSS",
          description:
            "Learning the PHP the right way, we dive deep into the PHP OOP's concept, and the fundamental of PHP OOP's",
          thumbnail: ECommerce,
          tags: ["php", "mysql", "js"],
          price: 1999.0,
          level: "beginner",
        },
        {
          id: 25,
          title: "REST APIs | React JS | Frontend System Design | Networking",
          description:
            "Uncover the principles of REST APIs, mastering the art of building robust and scalable interfaces for web applications.",
          thumbnail: RESTAPI,
          tags: ["js", "react", "api"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 26,
          title: "GraphQL | React JS | Frontend System Design | Networking",
          description:
            "Explore the power of GraphQL, enabling efficient data querying and manipulation for modern web applications.",
          thumbnail: GraphQL,
          tags: ["js", "react", "graphql"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 28,
          title:
            "BlinkIt Clone | Full-Stack Development | PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management",
          description:
            "Built the powerful app: BlinkIt Clone with the tech stack of PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management. Dive Deep into the web networking",
          thumbnail: BlinkIt,
          tags: [
            "js",
            "react",
            "redux",
            "typescript",
            "php",
            "laravel",
            "mysql",
            "graphql",
          ],
          price: 6999.0,
          level: "advanced",
        },
      ],
    },
    typescript: {
      heading: "Course related to TypeScript",
      content: [
        {
          id: 2,
          title: "React, TypeScript & Tailwind CSS - Course for Beginner",
          description:
            "Developing a React JS project using React JS with TypeScript and Tailwind CSS for Beginner tutorials.",
          thumbnail: "",
          tags: ["js", "react", "typescript", "tailwindcss"],
          price: 4999.0,
          level: "beginner",
        },
        {
          id: 3,
          title: "React JS | Swiggy Web App Clone",
          description:
            "Developing Swiggy web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: "",
          tags: ["js", "react", "typescript", "tailwindcss", "redux", "api"],
          price: 5999.0,
          level: "intermediate",
        },
        {
          id: 4,
          title: "React JS | YouTube Web App Clone",
          description:
            "Developing YouTube web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: "",
          tags: ["js", "react", "typescript", "tailwindcss", "redux", "api"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 11,
          title: "Learn TypeScript | Full Course",
          description:
            "Learn how to program with TypeScript in this full course for beginner",
          thumbnail: "",
          tags: ["js", "typescript"],
          price: 2999.0,
          level: "beginner",
        },
        {
          id: 12,
          title: "Learn TypeScript The Right Way",
          description:
            "Learning the TS the right way, we dive deep into the TS along with the JS core concept, and the fundamental of TS",
          thumbnail: "",
          tags: ["js", "typescript"],
          price: 2999.0,
          level: "beginner",
        },
        {
          id: 28,
          title:
            "BlinkIt Clone | Full-Stack Development | PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management",
          description:
            "Built the powerful app: BlinkIt Clone with the tech stack of PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management. Dive Deep into the web networking",
          thumbnail: "",
          tags: [
            "js",
            "react",
            "redux",
            "typescript",
            "php",
            "laravel",
            "mysql",
            "graphql",
          ],
          price: 6999.0,
          level: "advanced",
        },
      ],
    },
    php: {
      heading: "Course related to PHP",
      content: [
        {
          id: 13,
          title: "Learn PHP The Right Way | Basic Foundation",
          description:
            "Learning the PHP the right way, we dive deep into the PHP basic concept, and the fundamental of PHP",
          thumbnail: "",
          tags: ["php"],
          price: 1999.0,
          level: "beginner",
        },
        {
          id: 14,
          title: "Learn PHP The Right Way | Object Oriented Programming",
          description:
            "Learning the PHP the right way, we dive deep into the PHP OOP's concept, and the fundamental of PHP OOP's",
          thumbnail: "",
          tags: ["php", "mysql"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 15,
          title: "MySQL for PHP | Full PHP 8 Course",
          description:
            "MySQL to work on websites, web apps & the projects. Learn how to query MySQL as well as in PHP",
          thumbnail: "",
          tags: ["php", "mysql"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 16,
          title:
            "E-Commerce Project with JavaScript, PHP, MySQL and Tailwind CSS",
          description:
            "Learning the PHP the right way, we dive deep into the PHP OOP's concept, and the fundamental of PHP OOP's",
          thumbnail: "",
          tags: ["php", "mysql", "js", "tailwindcss"],
          price: 1999.0,
          level: "beginner",
        },
        {
          id: 17,
          title: "Learn Laravel The Right Way | Absolute Beginner Course",
          description:
            "Learning the Laravel the right way, covering Laravel project setup, Folder Structure, and more",
          thumbnail: "",
          tags: ["php", "mysql", "laravel"],
          price: 2999.0,
          level: "beginner",
        },
        {
          id: 18,
          title: "Laravel 11 For Beginners: Your First Project",
          description:
            "This is a quick intro to the Laravel framework (version 11), from a very practical point of view - we will just create our first small project of viewing and managing the blog.",
          thumbnail: "",
          tags: ["php", "mysql", "laravel"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 19,
          title: "Laravel 11 Eloquent: The Expert Level",
          description:
            "The no.1 topic of Laravel-related questions I get is about Eloquent. How to query X? What's the best structure of a relationship? How to customize X in Models? etc.",
          thumbnail: "",
          tags: ["php", "mysql", "laravel"],
          price: 2999.0,
          level: "advanced",
        },
        {
          id: 27,
          title: "GraphQL with Laravel Lighthouse",
          description:
            "Explore the power of GraphQL, enabling efficient data querying and manipulation for modern web applications.",
          thumbnail: "",
          tags: ["php", "laravel", "mysql", "graphql"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 28,
          title:
            "BlinkIt Clone | Full-Stack Development | PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management",
          description:
            "Built the powerful app: BlinkIt Clone with the tech stack of PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management. Dive Deep into the web networking",
          thumbnail: "",
          tags: [
            "js",
            "react",
            "redux",
            "typescript",
            "php",
            "laravel",
            "mysql",
            "graphql",
          ],
          price: 6999.0,
          level: "advanced",
        },
      ],
    },
    laravel: {
      heading: "Course related to Laravel",
      content: [
        {
          id: 17,
          title: "Learn Laravel The Right Way | Absolute Beginner Course",
          description:
            "Learning the Laravel the right way, covering Laravel project setup, Folder Structure, and more",
          thumbnail: "",
          tags: ["php", "mysql", "laravel"],
          price: 2999.0,
          level: "beginner",
        },
        {
          id: 18,
          title: "Laravel 11 For Beginners: Your First Project",
          description:
            "This is a quick intro to the Laravel framework (version 11), from a very practical point of view - we will just create our first small project of viewing and managing the blog.",
          thumbnail: "",
          tags: ["php", "mysql", "laravel"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 19,
          title: "Laravel 11 Eloquent: The Expert Level",
          description:
            "The no.1 topic of Laravel-related questions I get is about Eloquent. How to query X? What's the best structure of a relationship? How to customize X in Models? etc.",
          thumbnail: "",
          tags: ["php", "mysql", "laravel"],
          price: 2999.0,
          level: "advanced",
        },
        {
          id: 23,
          title: "Laravel Building APIs for Hotel Booking Management System",
          description:
            "The no.1 topic of Laravel-related questions I get is about Eloquent. How to query X? What's the best structure of a relationship? How to customize X in Models? etc.",
          thumbnail: "",
          tags: ["php", "mysql", "laravel", "api"],
          price: 2999.0,
          level: "advanced",
        },
        {
          id: 27,
          title: "GraphQL with Laravel Lighthouse",
          description:
            "Explore the power of GraphQL, enabling efficient data querying and manipulation for modern web applications.",
          thumbnail: "",
          tags: ["php", "laravel", "mysql", "graphql"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 28,
          title:
            "BlinkIt Clone | Full-Stack Development | PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management",
          description:
            "Built the powerful app: BlinkIt Clone with the tech stack of PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management. Dive Deep into the web networking",
          thumbnail: "",
          tags: [
            "js",
            "react",
            "redux",
            "typescript",
            "php",
            "laravel",
            "mysql",
            "graphql",
          ],
          price: 6999.0,
          level: "advanced",
        },
      ],
    },
    mysql: {
      heading: "Course related to Mysql",
      content: [
        {
          id: 14,
          title: "Learn PHP The Right Way | Object Oriented Programming",
          description:
            "Learning the PHP the right way, we dive deep into the PHP OOP's concept, and the fundamental of PHP OOP's",
          thumbnail: "",
          tags: ["php", "mysql"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 15,
          title: "MySQL for PHP | Full PHP 8 Course",
          description:
            "MySQL to work on websites, web apps & the projects. Learn how to query MySQL as well as in PHP",
          thumbnail: "",
          tags: ["php", "mysql"],
          price: 2999.0,
          level: "intermediate",
        },
        {
          id: 16,
          title:
            "E-Commerce Project with JavaScript, PHP, MySQL and Tailwind CSS",
          description:
            "Learning the PHP the right way, we dive deep into the PHP OOP's concept, and the fundamental of PHP OOP's",
          thumbnail: "",
          tags: ["php", "mysql", "js", "tailwindcss"],
          price: 1999.0,
          level: "beginner",
        },
        {
          id: 20,
          title: "MySQL is Easy 😎 | Absolute Beginner Course",
          description:
            "MySQL is Easy. Learn how to query MySQL, CRUD operation in MYSQL",
          thumbnail: "",
          tags: ["mysql"],
          price: 1999.0,
          level: "beginner",
        },
        {
          id: 21,
          title: "MySQL is Easy 😎 | JOIN in MySQL",
          description:
            "MySQL is Easy. Learn INNER JOIN, LEFT JOIN & RIGHT JOIN in MySQL?",
          thumbnail: "",
          tags: ["mysql"],
          price: 1999.0,
          level: "intermediate",
        },
        {
          id: 22,
          title: "MySQL is Easy 😎 | Trigger in MySQL",
          description: "MySQL is Easy. Learn what is Trigger and how to use?",
          thumbnail: "",
          tags: ["mysql"],
          price: 1999.0,
          level: "advanced",
        },
        {
          id: 27,
          title: "GraphQL with Laravel Lighthouse",
          description:
            "Explore the power of GraphQL, enabling efficient data querying and manipulation for modern web applications.",
          thumbnail: "",
          tags: ["php", "laravel", "mysql", "graphql"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 28,
          title:
            "BlinkIt Clone | Full-Stack Development | PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management",
          description:
            "Built the powerful app: BlinkIt Clone with the tech stack of PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management. Dive Deep into the web networking",
          thumbnail: "",
          tags: [
            "js",
            "react",
            "redux",
            "typescript",
            "php",
            "laravel",
            "mysql",
            "graphql",
          ],
          price: 6999.0,
          level: "advanced",
        },
      ],
    },
    api: {
      heading: "Course related to RESTful APIs",
      content: [
        {
          id: 1,
          title: "React Js",
          description:
            "Covering Basic to Advanced level - React JS Functional Components, JSX, Props vs State, Map vs Filter vs Reduce, APIs Usage, React Hooks, React Router, HOC, Controlled & Uncontrolled Components.",
          thumbnail: "",
          tags: ["js", "react", "api"],
          price: 4999.0,
          level: "intermediate",
        },
        {
          id: 3,
          title: "React JS | Swiggy Web App Clone",
          description:
            "Developing Swiggy web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: "",
          tags: ["js", "react", "typescript", "tailwindcss", "redux", "api"],
          price: 5999.0,
          level: "intermediate",
        },

        {
          id: 4,
          title: "React JS | YouTube Web App Clone",
          description:
            "Developing YouTube web app clone using React JS with TypeScript, Tailwind CSS, React Redux, React Router and more. In this project implementing React JS advanced concept like Higher Order Components, APIs integration, Controlled & Uncontrolled Components, and more",
          thumbnail: "",
          tags: ["js", "react", "typescript", "tailwindcss", "redux", "api"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 23,
          title: "Laravel Building APIs for Hotel Booking Management System",
          description:
            "The no.1 topic of Laravel-related questions I get is about Eloquent. How to query X? What's the best structure of a relationship? How to customize X in Models? etc.",
          thumbnail: "",
          tags: ["php", "mysql", "laravel", "api"],
          price: 2999.0,
          level: "advanced",
        },
        {
          id: 24,
          title: "Laravel Building APIs for Hotel Booking Management System",
          description:
            "The no.1 topic of Laravel-related questions I get is about Eloquent. How to query X? What's the best structure of a relationship? How to customize X in Models? etc.",
          thumbnail: "",
          tags: ["php", "mysql", "laravel", "api"],
          price: 2999.0,
          level: "advanced",
        },
        {
          id: 25,
          title: "React JS | Frontend System Design | Networking | REST APIs",
          description:
            "Uncover the principles of REST APIs, mastering the art of building robust and scalable interfaces for web applications.",
          thumbnail: "",
          tags: ["js", "react", "api"],
          price: 5999.0,
          level: "advanced",
        },
      ],
    },
    graphql: {
      heading: "Course related to GraphQL",
      content: [
        {
          id: 26,
          title: "React JS | Frontend System Design | Networking | GraphQL",
          description:
            "Explore the power of GraphQL, enabling efficient data querying and manipulation for modern web applications.",
          thumbnail: "",
          tags: ["js", "react", "graphql"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 27,
          title: "GraphQL with Laravel Lighthouse",
          description:
            "Explore the power of GraphQL, enabling efficient data querying and manipulation for modern web applications.",
          thumbnail: "",
          tags: ["php", "laravel", "mysql", "graphql"],
          price: 5999.0,
          level: "advanced",
        },
        {
          id: 28,
          title:
            "BlinkIt Clone | Full-Stack Development | PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management",
          description:
            "Built the powerful app: BlinkIt Clone with the tech stack of PHP Laravel with GraphQL, React JS as Frontend, MySQL as Database Management. Dive Deep into the web networking",
          thumbnail: "",
          tags: [
            "js",
            "react",
            "redux",
            "typescript",
            "php",
            "laravel",
            "mysql",
            "graphql",
          ],
          price: 6999.0,
          level: "advanced",
        },
      ],
    },
  },
};
