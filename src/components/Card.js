import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


const Card = (props) => {
  let course =props.course;
  let likedCourses =props.likedCourses;
  let setLikedCoures =props.setLikedCoures;

 function clickHandler(){
  if(likedCourses.includes(course.id)){
    setLikedCoures((prev)=> prev.filter(cid => cid !== course.id));
    toast.warning("Unliked")
  }
  else{
    if(likedCourses.length === 0){
      setLikedCoures([course.id])
    }
    else{
      setLikedCoures((prev)=> [...prev, course.id])
    }
    toast.success("Liked Successfully")
  }
}
  return (
    <div className='w-[300px] bg-black bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt="url" />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3  grid place-items-center'>
<button onClick={clickHandler}>

{
  likedCourses.includes(course.id)?
  ( <FcLike fontSize="1.45rem"/>) :
  

<FcLikePlaceholder fontSize="1.45rem" />

}
</button>
        </div>
      </div>


      <div className='p-4'>
<p className='text-white font-bold text-lg leading-6'>{course.title}</p>
<p className='mt-2 text-white' >{course.description}
{
  course.description.length>100 ?
  (course.description.substr(0,50)) + "..." :
  (course.description)
}
</p>
      </div>
    </div>
  )
}

export default Card