import React from 'react'
import Navbar from './landingPage/navComponents/navbar' 
import Landing from './landingPage/bodyComponents/landing'
import Variety from './landingPage/landingVar/variety'
import VarOne from './landingPage/landingVarOne/varOne'
import GrannySec from './landingPage/GrannySection/grannySec'
import SemiFooter from './landingPage/semiFooter/semiFooter'

export default function page() {
  return (
    <>
    <Navbar />
    <Landing />
    <Variety />
    <VarOne />
    <GrannySec />
    <SemiFooter />

    </>
  ) 
}

