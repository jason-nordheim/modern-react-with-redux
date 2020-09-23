
import React, { useState } from 'react'

export default function App() {
    const [langauge, setLanguage] = useState('ru') // default to russian 
    const [text, setText] = useState('') 

    return (
        <div className="app">
            {/* field to display text */}
            {/* dropdown to display menus */}
            {/* translated text  */}
        </div>
    )
}