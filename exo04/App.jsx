import { useRef, useState, useEffect } from "react"
import { Input } from "../components/forms/Input"

function App() {

    const prefixRef = useRef(null)
    const [prefix, setPrefix] = useState('')
    prefixRef.current = prefix

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(prefixRef.current)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, []);

    return <div>
        <Input label='prefix' value={prefix} onChange={setPrefix} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sapiente odio exercitationem natus, nihil assumenda molestias nisi saepe cupiditate nulla vitae.

    </div>

}

export default App
