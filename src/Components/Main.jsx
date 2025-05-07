import SpecialContainer from "./SpecialContainer"
import SpringContainer from "./SpringContainer"
import Banner from "./main-banner"
import Question from "./Question"

function Component() {
  return (
    <main className="main-container">
    <SpecialContainer/>
    <SpringContainer/>
    <Banner/>
    <Question/>
    </main>
  )
}

export default Component
