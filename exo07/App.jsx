import { useState } from "react"
import { useIncrement } from "../components/hoocks/useIncrement"
import { useDocumentTitle } from "../components/hoocks/useDocumentTitle"
import { Input } from "../components/forms/Input.jsx"

/**
 * Hoock personnalisés
 *
 * @param {boolean} initial
 */


function App() {

    const { loading, data, errors } = useFecth('https://jsonplaceholder.typicode.com/posts?_limite=10&_delay=2000%27)')

    return <div>

        {loading && <div>Chargement...</div>}
        {data && <div>
            {JSON.stringify(data)}
        </div>}
    </div>

}

export default App
