import { useRef, useId, useMemo, useState, useEffect } from "react"
import { Input } from "../components/forms/Input"

function App() {

    const ref = useRef()
    console.log('App', ref)

    return <div>
        <Input ref={ref} label='prefix' />
    </div>

}

export default App
