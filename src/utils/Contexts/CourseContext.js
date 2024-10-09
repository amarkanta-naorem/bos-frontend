import { createContext, useEffect, useState } from "react";
import { BEONSCHOOL } from "../common/common";

export const CourseContext = createContext(); // Create the course context

// Course Provider component to wrap around the relevant components
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourseData();
  }, []);

  const getCourseData = async () => {
    const api = await fetch(`${BEONSCHOOL}/api/course`);
    const json = await api.json();
    setCourses(json?.data);
  };

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};