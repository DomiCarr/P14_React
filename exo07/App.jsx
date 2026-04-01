import { useFecth } from "../components/hoocks/useFetch.js"

/**
 * Hoock personnalisés
 *
 * @param {boolean} initial
 */


function App() {

    const { loading, data, errors } = useFecth('https://jsonplaceholder.typicode.com/posts?_limite=10&_delay=3000%27)')

    return <div>

        {loading && <div>Chargement...</div>}
        {data && <div>
            <ul>
                {data.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul>
        </div>}
    </div>

}

export default App
