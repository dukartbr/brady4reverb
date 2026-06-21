import { useState } from 'react';
import './App.css'
import Dial from './Dial'
import InfoPanel from './InfoPanel'


export interface Dial {
  title: string,
  position: number
}

export interface PanelItem {
	title: string,
	description: string
	years?: number,
	id: number
}

const technicalSkills: PanelItem[] = [
	{
		id: 0,
		title: 'Javascript/Typescript',
		description: `Javascript & Typescript are the languages I have the most experience with. From writing my first 'hello-world' script to creating full stack applications, I've loved every moment of working with JavaScript. I gained experience working with Typescript during my time at Bushel where I really learned to appreciate its value for rapidly buidling and debugging.  Almost always, I reach for JavaScript first as an initial solution when problem solving in code; it's combinitation of simplicity and power made it a perfect first programming language for me to master`,
		years: 7,
	},
	{
		id: 1,
		title: 'React/Vue',
		description: `React & Vue are the two main front-end frameworks I have extensive experience with. During my four years at Bushel, I was involved in planning, desigining, building, and maintaing a proprietary React application that utilized the Chakra UI framework. During the past two and half years however, I've been working on Razor Tracking's Vue based application that uses a mix of front-end libraries as well as helping to transition the application from Vue to the latest version of React.`,
		years: 6,
	},
	{
		id: 2,
		title: 'C#/ASP.NET',
		description: `During my time at Razor Tracking, I've gained experience with different versions of ASP.NET as ASP.NET Core, working in an MVC architecture. I've primarily been responsibile for creating new endpoints for our front end application to request from, and writing any necessary backend logic for data transformation.`,
		years: 2.5,
	},
	{
		id: 3,
		title: 'SQL',
		description: `SQL is currently my favorite language to work. Like most engineers, I find joy in seeing how well I can optimize a query. Like .NET & C#, I've gained most of my knowledge and experience with SQL at Razor Tracking where I use it every day, mostly for debugging and data gathering but occassionally creating and updating tables and schemas`,
		years: 3,
	},
	{
		id: 4,
		title: 'HTML/CSS',
		description: `HTML & CSS are where I started with basic web development. While at college, I took a multi-media course that taught me the basics of all the Adobe products, including Dreamweaver (Thank goodness those days are behind me and I use VS Code like the rest of the world). While I'm comfortable building applications with almost any library or framework, when building small applications I utilize bare-bones HTML and CSS as they are much more powerful than most would believe.`,
		years: 9,
	},
	{
		id: 5,
		title: 'Python',
		description: `Python is a language I'm currently learning in my free time and looking for any opportunity to use it more. I've built some personal terminal apps that get data an API request and update local .txt or SQL files`,
		years: 1,
	},
	{
		id: 6,
		title: 'GraphQL',
		description: `I've taken a short GraphQL course and really enjoyed how it felt more modern and understandable than SQL. I am, admittedly, more limited in my experience in this but as a fast learner and engineer who's passionate about not only creating a successful and secure product, but also improving the lives of musicians, I look forward to dedicating my time to mastering this tool.`,
		years: 0.5,
	},
]

function App() {
  const [skillsDial, setSkillsDial] = useState(0)
  const [experienceDial, setExperienceDial] = useState(0)
  const [extrasDial, setExtrasDial] = useState(0)

  return (
    <div id="body">
      <InfoPanel position={skillsDial} items={technicalSkills} />
      <div id="container">
        <div id="bigMuff">
          <div className="dialTitle">
            Dial the Knobs!
          </div>
          <div id="dialsContainer">
          <Dial title="Skills" position={skillsDial} setPosition={setSkillsDial} />
          <Dial title="Experience" position={experienceDial} setPosition={setExperienceDial} />
          <Dial title="Passions" position={extrasDial} setPosition={setExtrasDial} />
          </div>
          <div id="toggleContainer">
            <p style={{borderBottom: '2px solid #000000'}}>Experience</p>
            <p>Passions</p>
          </div>
          <div id="titleContainer">
            <div id="light"></div>
            <img src="/logo.png" alt="reverb_logo" id="reverbLogo" />
            <div id="title">
              <div id="name">Brady Dukart</div>
              <div id="logo">Reverb's Best New Software Engineer</div>
            </div>
          </div>
          <div id="bottomContainer">
            <div id="activateButton"></div>
            <div className="dialTitle">
              Stomp to Connect!
            </div>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
    </div>
  )
}

export default App
