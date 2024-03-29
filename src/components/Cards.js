import React, { useState } from 'react';
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  const [likedCourses ,setLikedCoures] = useState([]);

  function getCourses(){
    let allCourses = [];
    Object.values(courses).forEach(array =>{
      array.forEach(courseData=>{
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => (
          <Card 
            key={course.id} 
            course={course}
            likedCourses={likedCourses}
            setLikedCoures={setLikedCoures} // Corrected here
          />
        ))
      }
    </div>
  )
}

export default Cards;