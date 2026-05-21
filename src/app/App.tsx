import { useEffect } from 'react'

function App() {
    // api test
    useEffect(() => {
        fetch('/api/ping')
            .then((res) => res.json())
            .then((data) => console.log(data))
    })
    return <div>Hello, world!</div>
}

export default App
