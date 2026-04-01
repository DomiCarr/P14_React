import { useState } from "react";
import { Input } from "../components/forms/Input"

function App() {

    const [name, setName] = useState('')

    return <div className="container my-2 vstack gap-2">
        <div>
            <Input label="Prenom" onChange={setName} value={name} />
            <div>
                {name.toUpperCase()}
            </div>
        </div>
        <Info />
    </div>

    function Info() {
        return <div className="alert alert-info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cum, laudantium aliquam.
            Tempora corporis delectus quidem labore nulla eligendi, dolor cum!
        </div>
    }

}

export default App