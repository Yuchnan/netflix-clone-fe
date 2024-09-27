import DefaultLayout from "@layouts/DefaultLayout"
import Footer from "@mods/LandingPage/Footer"
import Jumbotron from "@mods/LandingPage/Jumbotron"
import SectionEnjoy from "@mods/LandingPage/SectionContent/SectionEnjoy"
import SectionDownload from "@mods/LandingPage/SectionContent/SectionDownload"
import SectionFAQ from "@mods/LandingPage/SectionContent/SectionFAQ"
import SectionProfile from "@mods/LandingPage/SectionContent/SectionProfile"
import SectionWatch from "@mods/LandingPage/SectionContent/SectionWatch"


function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron/>
      <SectionEnjoy/>
      <SectionDownload/>
      <SectionWatch/>
      <SectionProfile/>
      <SectionFAQ/>
      <Footer/>
    </DefaultLayout>
  )
}

export default Landing