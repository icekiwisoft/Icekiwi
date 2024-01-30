import React from 'react'
import Nav from '../../Components/Nav/Nav'
import './Home.scss'
import Heroimg from '../../assets/Heroimg.png'
import AboutImg from '../../assets/aboutimg.png'
import Computer from '../../assets/Computer.png'

const Home = () => {
  return (
    <>
      <div className='main-hero'>
        <Nav />
        <div className=' hero padding-body flex'>
          <div className='hero-left'>
            <h1>Transformez Votre Vision En Réalité  Avec <span>IceKiwi.</span></h1>
            <div className='left-button flex'>
              <button className='button'>Nous Contecter</button>
              <button className='button left-button2'>Nos services</button>
            </div>
          </div>
          <img src={Heroimg} alt="" />
        </div>
        <div className='hero-content'>
          <div className='hero-text'>
            <p>
              Découvrez <span>l&apos;excellence</span> du développement avec IceKiwi,
              votre partenaire innovant pour des solutions <span>numériques de pointe.</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className='about flex padding-body mt mb'>
          <img src={AboutImg} alt="" />
          <div>
            <h2>Qui somme Nous ?</h2>
            <h1>Nous vous accompagnons</h1>
            <p>
              IceKiwi est une startup reunissant plusieur develooperus qui vous propose des solutions digital pour vos probleme..... <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
            </p>
            <button className='button'>Nous Contacter</button>
          </div>
        </div>

        <div className='services flex padding-body mt mb'>
          <div>
            <h2>Nos services</h2>
            <h1>Decouvrez des solution adapte a vos besoins</h1>
            <p>
              Nous vouz poroposons diverces services selon votre
              besoin. <br />
              Nous creeons des applications et des sites sur mezure et
              resonsif addapté a vos besoins en un temps record.
            </p>
          </div>
          <img src={Computer} alt="" />
        </div>

      </div>

    {/* experience time span card */}

      <div className='experience'>
        <div className='experience-card'>
          <div className='experience-card-info'>
            <p className='eperience-number'>10</p>
            <span className='experience-text'>Annee d’experiance</span>
          </div>
          <div className='experience-card-info'>
            <p className='eperience-number'>20</p>
            <span className='experience-text'>Clients Satisfait</span>
          </div>
          <div className='experience-card-info'>
            <p className='eperience-number'>3</p>
            <span className='experience-text'>Membres actif</span>
          </div>
          <div className='experience-card-info'>
            <p className='eperience-number'>4</p>
            <span className='experience-text'>Projets Realisé</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
