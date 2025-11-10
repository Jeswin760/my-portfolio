import React from 'react'
import './Lan.css'
import {
  SiJavascript, SiPhp, SiFigma, SiPython, SiMysql, SiReact, SiReacthookform,
  SiRaspberrypi, SiHtml5, SiCss3, SiTailwindcss, SiMongodb, SiWordpress,
  SiNodedotjs
} from 'react-icons/si';
const Lan = () => {
  return (
    <div id="lan">
      <h1 className='my'>Well Know<span className='lan'>Technologies</span></h1>
      <div className='iconname' style={{ display: 'flex', flexWrap: 'wrap', gap: '146px', fontSize: '40px', justifyContent:'center' }}>
       <SiJavascript size={40} color="#f0db4f" title="JavaScript" />
       <SiPhp size={40} color="#8892BF" title="PHP" />
        <SiFigma color="#F24E1E" title="Figma" />
       <SiPython color="#3776AB" title="Python" />
       <SiMysql color="#00758F" title="MySQL" />
       <SiReact color="#61DBFB" title="React.js" />
    </div>
    <div className="iconnames">
        <h4>JavaScript</h4>
        <h4>PHP</h4>
        <h4>Figma</h4>
        <h4>Python</h4>
        <h4>MySQL</h4>
        <h4>React</h4>
    </div>
    <div className='iconname1' style={{ display: 'flex', flexWrap: 'wrap', gap: '146px', fontSize: '40px', justifyContent:'center' }}>
       {/*<SiRaspberrypi color="#C51A4A" title="Raspberry Pi" />*/}
       <SiNodedotjs color="#47A248" title="Node" />
       <SiHtml5 color="#E34C26" title="HTML" />
       <SiCss3 color="#264de4" title="CSS" />
       <SiTailwindcss color="#38B2AC" title="Tailwind CSS" />
       <SiMongodb color="#47A248" title="MongoDB" />
       <SiWordpress color="#21759B" title="WordPress" />
    </div>
        <div className="iconnames1">
        {/*<h4>Node</h4>*/}
        <h4>NodeJS</h4>
        <h4 className='ht'>HTML5</h4>
        <h4 className='cs'>Style Sheet</h4>
        <h4>Tailwind CSS</h4>
        <h4>MongoDB</h4>
        <h4>WordPress</h4>
    </div>
    </div>
  )
}

export default Lan
