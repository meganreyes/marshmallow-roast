/**
 * This React app serves as a very thin “wrapper” around what is otherwise pure three.js code.
 * Although various “React three.js components” are available, these can get complicated and
 * possibly overly opinionated for beginners. We take the approach here of separating React and
 * three.js code from each other as much as possible.
 */

import { useState, useEffect, useRef } from 'react'


import './App.css'

import { createDemoUniverse } from './universes/demo-universe'

const DEFAULT_FIELD_OF_VIEW = 75
const DEFAULT_NEAR_PLANE = 0.1
const DEFAULT_FAR_PLANE = 1000

const DEFAULT_DISTANCE_FROM_ORIGIN = 5


const App = () => {

  const [universe, setUniverse] = useState(null)

  const viewport = useRef()

  useEffect(() => {
    const viewportElement = viewport?.current
    if (!viewportElement) {
      return
    }

    const universe = createDemoUniverse({
      fieldOfView: DEFAULT_FIELD_OF_VIEW,
      width: window.innerWidth,
      height: window.innerHeight,
      nearPlane: DEFAULT_NEAR_PLANE,
      farPlane: DEFAULT_FAR_PLANE
    })


    const { camera, renderer } = universe
    camera.position.z = DEFAULT_DISTANCE_FROM_ORIGIN
    camera.position.z+=20;
    camera.position.x+=0;
    camera.position.y+=10;

    // Development note: three.js does not know that React exists. It is thus necessary to add
    // three.js’s element manually. However, this also means that the usual auto-loading behavior
    // of a React app may result in multiple copies of this element: because the previous element
    // isn’t under React’s control, it may continue to sit there even after the app’s code has
    // changed. As a result, always try to _reload the page_ if the 3D viewport does not seem to
    // update as expected.
    //
    // In addition, if the React portion of the app gets overly complicated, the rendering cycle
    // may start to interfere with this manual addition. Use this playground for applications that
    // are primarily three.js code, with React providing just basic event handling and UI.
    viewportElement.innerHTML = '' // Cheapo clearing of prior children.
    viewportElement.appendChild(renderer.domElement)

    universe.animate()
    setUniverse(universe)
  }, [viewport])

  const handleMouseDoubleClick = event => {
    universe.cast.person.getNewMarshmellow()
  }

  return (
    <section className="App">
      <header></header>
      <main ref={viewport} onDoubleClick={handleMouseDoubleClick} >
      <section>
      </section>
      </main>
    </section>
  )
}

export default App
