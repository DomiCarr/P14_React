import { useState } from "react"
import { useIncrement } from "../components/hoocks/useIncrement"
import { useDocumentTitle } from "../components/hoocks/useDocumentTitle"
import { Input } from "../components/forms/Input.jsx"

/**
 * Hoock personnalisés
 *
 * @param {boolean} initial
 */
function useToggle(initial = false) {
    const [state, setState] = useState(initial)
    const toggle = () => setState(v => !v)
    return [state, toggle]
}

function App() {

    const [checked, toggleCheck] = useToggle()
    const { count, increment, decrement } = useIncrement({
        base: 0,
        max: 10,
        min: 0
    })

    const [name, setName] = useState('')

    useDocumentTitle(name ? `Editer ${name}` : null)

    return <div>

        <Input value={name} onChange={setName} label="Nom" />

        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        {checked && 'Je suis coché'}

        Compteur {count}
        <button onClick={increment}>Incrémenter</button>
        <button onClick={decrement}>Decrémenter</button>
    </div>

}

export default App
