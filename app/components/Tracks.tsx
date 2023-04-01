import bio from '../../public/bio.jpg';
import web from "../../public/web.jpg";
import cloud from "../../public/cloud.jpg";
import iot from "../../public/iot.jpg";
import automation from "../../public/automation.jpg";
import ai from '../../public/ai.jpg'
import Image from 'next/image';
import { useState } from 'react';

export const programsData =  [
    {
                id: 'web',
                heading1:'1- Web 3.0 (Blockchain) and Metaverse Specialization',
                text1:'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.' ,
                heading2:'Quarter IV',
                text2: 'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
                heading3:'Quarter V',
                text3:'MV-361: Developing Planet-Scale and Augmented Metaverse Experiences' ,
                img: <Image src={web} alt={'web 3.0'}></Image> 
            },
            {
                id: 'ai',
                heading1:'2- Artificial Intelligence (AI) and Deep Learning Specialization',
                text1:'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.' ,
                heading2:'Quarter IV',
                text2: 'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
                heading3:'Quarter V',
                text3:'AI-361: Deep Learning and MLOps' ,
                img: <Image src={ai} alt={'AI'}></Image>
            },
            {
                id: 'cloud',
                heading1:'3- Cloud-Native Computing Specialization',
                text1:'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. ' ,
                heading2:'Quarter IV',
                text2: 'CN-351: Certified Kubernetes Application Developer (CKAD)',
                heading3:'Quarter V',
                text3:'CN-361: Developing Multi-Cloud APIs using CDK for Terraform' ,
                img: <Image src={cloud} alt={'Cloud'}></Image>
            },
            {
                id: 'iot',
                heading1:'4- Ambient Computing and IoT Specialization',
                text1:'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.' ,
                heading2:'Quarter IV',
                text2: 'AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices',
                heading3:'Quarter V',
                text3:'AC-361: Embedded Programming using C and Rust' ,
                img: <Image src={iot} alt={'Automation'}></Image>
            },
            {
                id: 'bio',
                heading1:'5- Genomics and Bioinformatics Specialization',
                text1:'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.' ,
                heading2:'Quarter IV',
                text2: 'Bio-351: Python for Biologists',
                heading3:'Quarter V',
                text3:'Bio-361: Bioinformatics with Python' ,
                img: <Image src={bio} alt={'Bioinformatics'}></Image>
            },
            {
                id: 'automation',
                heading1:'6- Network Programmability and Automation Specialization',
                text1:'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.' ,
                heading2:'Quarter IV',
                text2: 'NPA-351: CCNA 200-301 Certification',
                heading3:'Quarter V',
                text3:'NPA-361: Network Programmability and Automation' ,
                img: <Image src={automation} alt={'Bioinformatics'}></Image>
            }
]



const Tracks =() =>{
    const [selectedItem, setSelectedItem] = useState('web')
    const selectedItemData = programsData.find((item) => item.id === selectedItem)  

    return(
        <section className="max-w-screen-xl mx-auto my-auto">
            <h2 className="text-5xl font-bold mt-4 sticky">
               Specialised Tracks 
            </h2>
            <div className="mt-10 flex gap-x-6 gap-y-8 mb-10">
                <div className="shadow-2xl rounded-xl border-blue-600 py-8 px-8 h-screen">
                    <div className="max-w-screen-md sticky top-0 self-start">

                
                <h4 className="font-bold text-xl my-3">{selectedItemData?.heading1}</h4>
                <p className="text-slate-700">{selectedItemData?.text1}</p>
                <div className='flex gap-6'>
                    <div className='basis-1/2 mt-16'>
                        <h3 className='font-bold text-sm'>{selectedItemData?.heading2}</h3>
                        <p>{selectedItemData?.text2}</p>
                    </div>
                    <div className='basis-1/2 mt-16'>
                    <h3 className='font-bold text-sm'>{selectedItemData?.heading3}</h3>
                        <p>{selectedItemData?.text3}</p>
                    </div>

                </div>
                </div></div>
            
            <div className="basis-4/12 mx-4">
                {programsData.map((elem) => 
                <div key={elem.id} onClick={() => setSelectedItem(elem.id)} className="rounded-xl shadow-sm flex items-start gap-x-4 cursor-pointer">
                    <div className='w-32 h-32'>
                <div className="w-32 h-32 space-y-28 ">
                    {elem.img}
                </div>
                </div>
                <div>
                    <h3>{elem.heading1}</h3>

                </div>
                </div>
                
                
                )}</div>
            </div>

        </section>
    )
}
export default Tracks