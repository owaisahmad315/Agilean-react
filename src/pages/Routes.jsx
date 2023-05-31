import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Home,HelpUs,PreferUs,Ensure,Intelligent,Operation,
    HyperAutomation,Internet,AIEngineering,Cybersecurity,Privacy,
    TotalExperience} from './pages'    

const routes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" exact element={<Home />} />
        {/* {navlinks.map((menu)=>(
        ))} */}

        {/* {navlinks.map((menu)=>(
          <Route key={menu.path} path={menu.path}
          element={<DropDownItem menu={menu} />}/>
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
     </Routes>
    </div>
  )
}

export default routes