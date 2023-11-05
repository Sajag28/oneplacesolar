import React from 'react'
import Servicecard from './Servicecard';

const ServicePage = () => {
  return (
    <>
      <h1 className="text-3xl text-center mt-24">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 my-8">
        <Servicecard title={"Solar Permit Designs"} imagesrc={"https://imgur.com/HtZ3GEG.png"} description={"We are one of the leading company in designing solar permit plans. Our permit package includes a site plan of the property, a detailed schematic of the proposed solar panel layout, single-line & three-line diagrams for electrical layout & calculations, warning labels, and tech sheets.We provide both Residential & Commercial system permit designs within 6 hours turn around time. Our teams are well aware of National Electric Codes (NEC) and other applicable codes for various AHJs and Home Owner Association (HOA) requirements. We are pretty swift in adapting codes changes and any custom requirements from customer, installer and/or EPCs."} />
        <Servicecard title={"Solar Sales Proposals"} imagesrc={"https://imgur.com/TMLf58Z.png"} description={" Our solar proposals let you educate your customers about solar and quickly configure your solar estimate. We provide both Residential & Commercial system sales proposals within 2 hours turn around time. We highlight production estimate, pricing, return on investment, financing, incentives, Installation overview, Hardware and specification of the system etc. in our detailed sales proposals."} />
        <Servicecard title={"Solar Preliminary Designs"} imagesrc={"https://imgur.com/Malj6Eg.png"} description={"Our preliminary design and production analysis reports will help customers to calculate the Annual Production and Shading, and ensure they will be receiving optimal power production. We provide both Residential & Commercial system preliminary designs within 2 hours turn around time. We use AuroraSolar, Helioscope & Scanifly integrated, web based application to simulate the physical layout, power production, offsets and design of your recommended system based on your current information and goals.  "} />
        <Servicecard title={"Engineering Stamps"} imagesrc={"https://imgur.com/zHgtlr5.png"} description={" Our highly experienced professional engineers can help you with permitting, building department review and Professional Engineer Certification as per NEC, NESC, NFPA 70E, IEEE, ANSI and NEMA standards.Our Professional Engineer can review, Sign and Stamp Engineering Plan Sets & provide Reports & Calculations Permit Compliance Letters & Calculations, Power System Studies. We offer in-house Structural & Electrical engineering services for both Residential and Commercial projects within 6-24 Hours."} />
        <Servicecard title={"As-Built Drawings"} imagesrc={"https://imgur.com/xpiOySb.png"} description={" Our As Built prelim & permit plan shows the actual installed solar system based on the post installation pictures. We provide As Built Drawings, final prelim & permit designs within 6 hours turn around time. Also, we get them approved by our in house engineering services team. "} />
        <Servicecard title={"Interconnection, Permitting, Monitoring & PTO Applications"} imagesrc={"https://imgur.com/3whlq0u.png"} description={" Our Solar Consultant team help you in further process after engineering stamp, Whether they are submitting interconnection, permitting, monitoring & permission to operate(PTO) applications. We assist in getting permit plan approval from the Utility & AHJ as quick as possible."} />
      </div>
    </>
  )
}

export default ServicePage;
