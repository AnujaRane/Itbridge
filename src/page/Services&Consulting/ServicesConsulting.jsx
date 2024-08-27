import React from 'react'
import { Footer, Header } from '../../components'
import img1 from '../../assets/tech1.jpg'
import img2 from '../../assets/tech2.jpg'
import img3 from '../../assets/tech3.jpg'
import './ServicesConsulting.css';

const ServicesConsulting = () => {
  return (
         <>
         <Header />
         <div className="servicePage1">
           <div className="servicePage1R" style={{marginLeft: '7%'}}>Home / IT Services & Consulting</div>
           <div className="servicePage1L">
             <div className="servicePage1L1">IT Services & </div>
             <div className="servicePage1L2">Consulting</div>
           </div>
         </div>

         <div className="emp-container">
         <h5>IT services refer to the application of technical expertise and support to manage and maintain various aspects of information technology within an organization. IT services can be provided by internal IT departments within a company or outsourced to third–party service providers. These services cover a wide range of activities and support functions related to technology infrastructure, software applications, and data management.</h5>

         <img src={img1} alt="not found" />
             <p><span>Technical Support:</span> Providing assistance and troubleshooting for hardware, software, and network–related issues. This includes help desk support, remote assistance, and on–site repairs.<br /><br />      


<span>Data Management:</span>Managing and protecting data throughout its lifecycle. This includes data backup and recovery, data storage solutions, database management, and data security measures.
<br /><br />

<span>Cloud Computing:</span>Assisting with the adoption and management of cloud–based services, such as infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). This includes cloud architecture design, migration, and ongoing support.
</p>

         </div>
          {/* second section */}
        <section>
        <div className="second1">
        <p><span>Cybersecurity:</span> Implementing measures to protect computer systems, networks, and data from unauthorized access, data breaches, and other cyber threats. This involves security audits, vulnerability assessments, firewall management, and incident response.<br />
        <span>Software Development:</span>Designing, developing, and maintaining software applications tailored to specific business needs. This includes web development, mobile app development, and custom software solutions.<br />
        <span>It Consulting:</span>Providing strategic advice and guidance on IT–related matters, including technology selection, system upgrades, digital transformation, and IT project management.
        </p>
            <img src={img2} alt="not found" />
        </div>
    </section>
  
    {/* third section */}
    <section>
    <div className="third1" style={{background: 'none'}}>
        <p><span>IT Infrastructure Management:</span> Managing and maintaining the organization’s IT infrastructure, including servers, storage systems, networking equipment, and data centers. This involves capacity planning, performance monitoring, and hardware/software upgrades.<br />
       <span>IT Training and Education:</span> Providing training programs and workshops to enhance employees’ IT skills and knowledge, ensuring they can effectively use and leverage technology in their roles.</p>
        <img src={img3} alt="not found" />
    </div>
    </section>
<Footer />
         
</>
  )
}

export default ServicesConsulting;
