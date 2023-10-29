import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../Styles/book.css"
import pic1 from "../Images/BooKworm.png"
import pic2 from "../Images/book1.jpeg"
import pic3 from "../Images/book2.jpg"
import pic4 from "../Images/book3.jpg"
import pic5 from "../Images/book4.jpg"
import pic6 from "../Images/book5.jpg"
import pic7 from "../Images/book6.jpg"
import pic8 from "../Images/book7.jpg"
import pic9 from "../Images/book8.jpg"

export default function Book() {
  return (
 <>
 <Navbar/>
 <div className='bookbanner'>
<img src={pic1}/>
 </div>
 <div className='bookpagecard'>
  <div className='booktextcards'>
    <div>
    <img src={pic2}/>
    <h4>Run for your life</h4>
    </div>
    <p>With the weekend right around the corner, Homicide Detective Mitch Cannon is looking forward to Saturday night.<br></br> It isn’t often he has a date, and this one will be particularly interesting. His new friend Liza is beautiful, edgy, outspoken, and somewhat odd.<br></br>
But Mitch’s usual Friday-morning phone call to his mom sets the wheels in motion for five days of pure hell.<br></br> Mitch’s sister, Marie, has gone missing without a trace. His date is canceled, and Mitch’s partner, Devon, and Liza also go missing the following night.<br></br> The only clue is a call Mitch gets from someone whose number is blocked, the anonymous speaker saying, “Ticktock, ticktock.”<br></br>
Mitch and the entire Habersham precinct set out on a white-knuckle search to find his sister, partner, and new friend before time runs out and all three are gone forever.<br></br>
Free on Kindle</p>
  </div>
  <div className='booktextcards'>
    <div>
    <img src={pic3}/>
    <h4>The Unsaid Summer</h4>
    </div>
    <p>In 90s California there is no hotter star in pop culture than Brad Pitt. And Bradley Pitt—a Filipino-American teen who shares the star’s name while growing up in Los Angeles—could not feel more different from the handsome actor that exudes confidence and charisma, which are two qualities Bradley is sure he lacks.
As Bradley deals with the complex emotions of life, his therapist instructs him to write letters to his best friend, Sammie. Through these letters, Bradley unveils all that happened the summer that his whole world was changed
How far out of Bradley’s comfort zone was he willing to step? What did he do when he realized who he truly loved, but maybe a moment too late?</p>
  </div>
  <div className='booktextcards'>
    <div>
    <img src={pic4}/>
    <h4>Way of the Viper</h4>
    </div>
    <p> Cade Wilson is a troubled man. The shadows of his past are haunting him, and he knows he must make things right.but he feels so far away from where he started and no closer to where his heart belongs.

As Viper, he was one of three elite warriors trained by a deadly samurai from Japan to fight in the service of their Benefactor, and honor bound to expand and defend their master’s landholdings in the New Mexico Territory.

Then Cade experienced love and a glimpse of the normal life he so desperately wants. But to have love and a family of his own, he must escape the life of eternal servitude.</p>
  </div>
  <div className='booktextcards'>
    <div>
    <img src={pic5}/>
    <h4>Inheritance Revealed</h4>
    </div>
    <p>Arianna Sabini is finishing her dissertation and teaching at a university in New York. She meets James Merden a handsome and sophisticated man researching at the university. It seems like everything in Arianna’s ordered and planned life is falling into place when she is viciously attacked. She awakens and discovers she is a vampire hunter, James is a vampire, and the mythology she teaches is not entirely fiction.
       A group of vampires from her unknown past is hunting her, and with help from Giovanni, a rough</p>
  </div>
  <div className='booktextcards'>
    <div>
    <img src={pic6}/>
    <h4>His Blue Collar Countess</h4>
    </div>
    <p>She needs a fresh start. He has a cash-flow problem. When a new millionaire and a reluctant aristocrat team up, can their hearts learn to beat as one?
Michigan. Lucy Gallagher’s future has come to a standstill. Giving up her plans for college to care for her mom an dthen losing her to cancer, the former history major has nothing left but a dead-end job. But when she unexpectedly wins the lottery, a forgotten dream has her reaching out to a British celebrity historian who 
just inherited a crumbling estate.</p>
  </div>
  <div className='booktextcards'>
    <div>
    <img src={pic7}/>
    <h4>Growing Fangs</h4>
    </div>
    <p>Cora has found herself in a pickle. Namely, she’s dying.
No one can change the hand that fate deals, yet Cora is offered a choice when she reaches the limits of what medicine can do to keep her alive.
Will she defy fate and agree to an attempt to transform her into a vampire?
Will her decision turn her into a dark version of herself? Or will she die?</p>
  </div>
  <div className='booktextcards'>
    <div>
    <img src={pic8}/>
    <h4>Maid’s Daughter & Billionaire</h4>
    </div>
    <p>Lily, a young, untouched woman from the poorer side of town, finds herself in a crisis.
It led to her working for a famous, handsome and wealthy older-man, Jackson Reid.
Things take an unexpected turn when he makes the preposterous proposal for her to be his fake girlfriend for an important gala.</p>
  </div>
  <div className='booktextcards'>
    <div>
    <img src={pic9}/>
    <h4>The Harvesting</h4>
    </div>
    <p>From New York Times bestselling author Melanie Karsak, a thrilling twist on the end of the world. Layla flees to her hometown to protect the one she loves when a pandemic sweeps the globe. But unknown to her, the undead are not the only supernatural beings who have a stake in the end of mankind. Free on Kindle.</p>
  </div>

 </div>
 <Footer/>

 </>
  )
}
