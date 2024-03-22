import './styles/style.css'
import './script/main'
import projectInfo from "./json/projectsInfo.json";
import githubImg from './assets/imgs/icons/github.svg'
import instagramImg from './assets/imgs/icons/instagram.svg'
import ptbrTranslate from './json/pageInfoPTBR.json'
import enTranslate from './json/pageInfoEN.json'


function App() {

  const userLanguage = navigator.language 
  console.log(userLanguage)
  const infos = userLanguage == "pt-BR" ? ptbrTranslate : enTranslate

  return (
    <>
      <section id='land' className='visible'>
        <h1>Gustavo F. <br/> Silva</h1>
        <aside>
          <p>Frontend/Mobile Developer</p>
          <a href="/GustavoSilva_CV.pdf" download={true}>
            {infos.Curriculum}
          </a>
        </aside>
      </section>

      <section id='about'>
        <h2>{infos.AboutTitle}</h2>
        <p>{infos.AboutText} <a href="https://github.com/gustavofdasilva" target="_blank">github</a>.</p>

        <h3>{infos.Languages}</h3>
            <ul>
                <li>{infos.LanguagesText[0].text}</li>
                <li>{infos.LanguagesText[1].text}</li>
            </ul>
        
        <h3>{infos.Skills}</h3>
          <p className="list-title">{infos.SkillsText[0].text}</p>    
            <ul>    
                <li>{infos.SkillsText[2].text}</li>
                <li>{infos.SkillsText[3].text}</li>
                <li>{infos.SkillsText[4].text}</li>
                <li>{infos.SkillsText[5].text}</li>
                <li>...</li>
            </ul>

          <p className="list-title">{infos.SkillsText[6].text}</p>    
            <ul>    
                <li>{infos.SkillsText[7].text}</li>
                <li>{infos.SkillsText[8].text}</li>
                <li>{infos.SkillsText[9].text}</li>
                <li>...</li>
            </ul>

          <p className="list-title">{infos.SkillsText[10].text}</p>
            <ul>
                <li>{infos.SkillsText[11].text}</li>
                <li>{infos.SkillsText[12].text}</li>
                <li>{infos.SkillsText[13].text}</li>
                <li>{infos.SkillsText[14].text}</li>
                <li>...</li>
            </ul>
        <h3>{infos.Techs}</h3>
            <ul>
                <li>{infos.TechsText[0].text}</li>
                <li>{infos.TechsText[1].text}</li>
                <li>{infos.TechsText[2].text}</li>
                <li>{infos.TechsText[3].text}</li>
                <li>{infos.TechsText[4].text}</li>
                <li>{infos.TechsText[5].text}</li>
                <li>{infos.TechsText[6].text}</li>
                <li>{infos.TechsText[7].text}</li>
            </ul>
      </section>

      <section className="projects">
        <h2>{infos.Projects}</h2>
        {projectInfo.map((element)=>{
          return(
            <a key={projectInfo.indexOf(element)} href={element.link} className='project' target='_blank'>
              <div className='project'>
                <div style={{backgroundImage:`url(${element.img})`}} ></div>
                <div>
                  <h3>{userLanguage == 'pt-BR' ? element.title.ptbr: element.title.en}</h3>
                  <p>{userLanguage == 'pt-BR' ? element.desc.ptbr:element.desc.en}</p>
                  <p className={element.status}>{element.status == "completed"?"Completo":"Em progresso"}</p>
                </div>
              </div>
            </a>
          )
        })}
      </section>

      <footer>
        <div>
          <a href="https://github.com/gustavofdasilva" target="_blank"><img src={githubImg} alt="github"/></a>
          <a href="https://www.instagram.com/_guuzz_/" target="_blank"><img src={instagramImg} alt="instagram"/></a>  
        </div>
        <p>Email: gustavofsilvas@gmail.com</p>
      </footer>
      
    </>
  )
}


export default App
