
import React, { useState } from 'react'
import Field from './components/Field'
import Translate from './components/Translate'
import Langauges from './components/Langauges'

export default function App() {
    const [langauge, setLanguage] = useState('ru') // default to russian 
    const [text, setText] = useState('') 

    return (
        <div className="app">
            <Field label="English" onChange={setText} value={text} /> 
            <Langauges language={langauge} onLanguageChange={}/> 
            <Translate langauge={langauge} text={text} /> 
        </div>
    )
}