import { Fragment } from "react"
import HeadeerComponent from "./components/header-component"
import TextAreaComponent from "./components/inner-components/TextAreaComponent"
import TaskComponent from "./components/task-component"


function App() {

  return (
    <Fragment>
      <HeadeerComponent/>
      <TaskComponent/>
    </Fragment>
  )
}

export default App
