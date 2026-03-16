import { useMemo, useState, useEffect } from "react"
import { Input } from "../components/forms/Input"

function App() {

  const [firstname, setFirsname] = useState('John')
  const [password, setPassword] = useState('MotDePasse')
  const security = useMemo(() => {
    return passwordSecurity(password)
  }, [password])

  return <div className="container my-3 vstack gap-2">
    <Input
      label="Nom d'utilisateur"
      value={firstname}
      onChange={setFirsname}
    />
    <div>
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      Sécurité : {security}
    </div>
  </div>
}

function passwordSecurity(password) {
  if (password.length < 3) {
    return 'faible'
  } else if (password.length < 6) {
    return 'moyen'
  }
  return 'fort'
}

export default App
