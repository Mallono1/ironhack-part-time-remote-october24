import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ServiceCard from './components/ServiceCard/ServiceCard'
import serviceOne from './assets/service1.png'
import serviceTwo from './assets/service2.png'
import serviceThree from './assets/service3.png'
import serviceFour from './assets/service4.png'
import './App.css'

function App() {
  return (
      <div className="App">
       {/* <Navbar />
       <Hero /> */}
       <div className='services'>
        <ServiceCard alt={"service_one_image"} url={serviceOne} title={"Calculated Weather"} content={"Built Wicket longer admire do barton vanity itself do in it."}/>
        <ServiceCard alt={"service_two_image"} url={serviceTwo} title={"Best Flights"} content={"Built Wicket longer admire do barton vanity itself do in it."}/>
        <ServiceCard alt={"service_three_image"} url={serviceThree} title={"Local Events"} content={"Built Wicket longer admire do barton vanity itself do in it."}/>
        <ServiceCard alt={"service_four_image"} url={serviceFour} title={"Customizations"} content={"Built Wicket longer admire do barton vanity itself do in it."}/>
       </div>
      </div>
  )
}

export default App
