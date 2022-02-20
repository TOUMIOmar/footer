import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
      <>
      <div className='disp-footer'>
        <div className='menu'>
                <h1>Menu</h1>
                <ul className='liii'>
                    <li>Bellini Gammarth</li>
                    <li>Gallery</li>
                    <li>Reservation</li>
                    <li>Contact Us</li>
                </ul>
        </div>

        <div>
            <h1>SUIVEZ-NOUS</h1>
                <p>Suivez-nous sur tous nos réseaux sociaux et recevez les dernières nouvelles sur :</p>
                <div className='reseaux'>
                <a href='/'><img src='./face.png'></img></a>
                <a href='/'><img src='./insta.png'></img></a>
                <a href='/'><img src='./yout.png'></img></a>
               
                
                </div>
        </div>
                
        <div>
                <h1>CONTACTEZ NOUS</h1>
                <div className='tog'>
                <a href='/'><img src='./maiil.png'></img></a>
                <p>info@bellinigammarth.com</p>
                </div>
                <div className='tog'> 
                <a href='/'><img src='./pho.png'></img></a>
                <p>+21656050500</p>
                </div>
               <div className='tog'>
               <a href='/'><img src='./hor.png'></img></a>
               <p>Du Mercredi au Dimanche | Lounge : à partir de 17h:00, Restaurant : Actuellement fermé</p>
               </div>

                
        </div>



        <div>
            <h1>ADRESSE</h1>
            <div className='tog'>
            <a href='/'><img src='./point.png'></img></a>
            <p>Route express de Gammarth, à proximité de l'hôtel Le Palace Gammarth Tunis, 1057</p>
            </div>
            
        </div>
    </div>
    <div className='copy'>
        <center>
        <p>© 2022 BY GOMYCODE</p>
        </center>
    
    </div>
      </>
    

    
  )
}

export default Footer