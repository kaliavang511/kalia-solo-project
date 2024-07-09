import './AboutPage.css';
function AboutPage() {
  return (
   <div> 
    <div className="container"> 
    <h1>Welcome to Legacy </h1>
    <p>
  This app offers a modern way
  to memorialize loved ones by using QR codes on gravestones. These codes link to personalized
  tribute pages, filled with cherished memories, photos, and stories. Our goal is to help families
  honor and celebrate their loved ones' lives in a heartfelt and meaningful way, keeping their memories
  alive for future generations.
</p>
<div>
  <img className='aboutImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44M9zoYIzSnXWcJCbX8I7vXKgt7ODZKlxMg&s'/>
</div>
<div>
<h2 className='aboutPageH2'>Future Developments</h2>
  <ul>
    <li>Ability to upload images and videos instead of using URL links</li>
    <li>Enhanced tools for customizing tribute pages</li>
    <li>Visitor comments feature</li>
    <li>Option to send flowers to loved one's resting place</li>
  </ul>

  <h2 className='aboutPageH2'>Technologies Used</h2>
  <ul>
   <li> React </li> 
   <li> Redux-Saga </li> 
   <li> Bootstrap </li> 
   <li> CSS</li> 
   <li> Node.js</li> 
   <li> Express </li> 
    <li> SQL </li> 
  </ul>
</div>
</div>
  </div>
    
  );
}

export default AboutPage;
