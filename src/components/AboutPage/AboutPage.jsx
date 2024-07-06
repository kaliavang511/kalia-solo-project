import './AboutPage.css';
function AboutPage() {
  return (
   <div> 
    <div className="container"> 
    <h1>Welcome to Legacy </h1>
    <p>
  This app was inspired by the loss of my beloved father, it offers a modern way
  to memorialize loved ones using QR codes on headstones. These codes link to personalized
  tribute pages, filled with cherished memories, photos, and stories. Our goal is to help families
  honor and celebrate their loved ones' lives in a heartfelt and meaningful way, keeping their memories
  alive for future generations.
</p>
<div>
  <img className='aboutImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44M9zoYIzSnXWcJCbX8I7vXKgt7ODZKlxMg&s'/>
</div>
</div>
  </div>
    
  );
}

export default AboutPage;
