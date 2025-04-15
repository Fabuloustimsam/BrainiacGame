import React from "react";
import Navbar from "../components/landingPage/navComponents/navbar";
import Landing from "../components/landingPage/bodyComponents/landing";
import Variety from "../components/landingPage/landingVar/variety";
import VarOne from "../components/landingPage/landingVarOne/varOne";
import GrannySec from "../components/landingPage/GrannySection/grannySec";
import SemiFooter from "../components/landingPage/semiFooter/semiFooter";
import Footer from "../components/landingPage/footer/footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Landing />
      <Variety />
      <VarOne />
      <GrannySec />
      <SemiFooter />
      <Footer />
    </>
  );
}
