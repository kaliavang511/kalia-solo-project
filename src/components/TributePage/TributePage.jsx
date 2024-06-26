import { useDispatch, useSelector } from "react-redux"

function TributePage(){
const tributeItems = useSelector((store)=>store.tributeReducer)





return (
 <div>
    {/* <h1>Jude Moua Vang</h1>
    <img src='https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/296230310_3171171266482371_6744198895546968568_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LZjCbsumAxgQ7kNvgH0CEdf&_nc_ht=scontent-msp1-1.xx&oh=00_AYCiqvmDd0qzVwxNUJIaftl-le8EvwDhn4DWTQ69SiPbbQ&oe=6680C602'> 
    </img>
    <p> Our beloved father was loved by lots of people. He was kind hearted, alwyas willing to help others.</p> */}
{/* 
    <p>
      {tributeItems.map((item)=>(
         <li key={item.id}>{item.first_name}{item.middle_name}{item.last_name}
         {item.obituary}{item.image}{item.video}{item.date_of_birth}{item.date_of_death}

         </li>

      ))}
    </p> */}
 </div>
)
}


export default TributePage