import React from 'react'
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'
import {Navbar,Footer,DropDownItem,ScrollY} from './components'
import {Home,HelpUs,PreferUs,Ensure,Intelligent,Operation,
HyperAutomation,Internet,AIEngineering,Cybersecurity,Privacy,
TotalExperience,CTO,ValidationType,Portfolio} from './pages'
import 'typeface-roboto'



function App() {

  return (
    <>
    <BrowserRouter>
    <div className="bg-[#111] max-w-[1640px] 
 font-sans absolute lg:w-full 
    text-white">
     <Navbar />
     <Routes>
        
        {/* {navlinks.map((menu)=>(
          <Route key={menu.path} path={menu.path}
          element={<DropDownItem menu={menu} />}/>
        ))} */}
        
        <Route path="/" exact element={<Home />} />

        {/* {navlinks.map((menu)=>(
          <Route key={menu.path} path={`${menu.path}/${menu.id}`}
          render={() => <WhyUsPage menu={menu} />}/>
        ))} */}
        <Route  path='/whyus/Howwehelp' element={<HelpUs />} />
        <Route path="/whyus/Whypreferus"  element={<PreferUs />} />
        <Route path="/whyus/Whatweensure"  element={<Ensure />} />
        <Route path="/servicesandsolution/InternetofBehaviors"  element={<Internet />} />
        <Route path="/servicesandsolution/TotalExperience"      element={<TotalExperience />} />
        <Route path="/servicesandsolution/PrivacyEnhancingComputation"  element={<Privacy />} />
        <Route path="/servicesandsolution/AnywhereOperations"   element={<Operation />} />
        <Route path="/servicesandsolution/CybersecurityMesh"    element={<Cybersecurity />} />
        <Route path="/servicesandsolution/IntelligentComposable"element={<Intelligent />} />
        <Route path="/servicesandsolution/AIEngineering"        element={<AIEngineering />} />
        <Route path="/servicesandsolution/HyperAutomation"      element={<HyperAutomation />} />
        <Route path="/programsandoffering/CTO"      element={<CTO />} />
        <Route path="/programsandoffering/ValidationType"      element={<ValidationType />} />
        <Route path="/programsandoffering/Portfolio"      element={<Portfolio />} />
     </Routes>
     <ScrollY />
     <Footer />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
