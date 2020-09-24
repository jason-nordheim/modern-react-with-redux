import React, { useState, useEffect } from "react"
import axios from "axios";

const doTranslation = async (input, langaugeCode, cancelToken) => {
    try {
        const { data } = await axios.post(
            "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA",
            { q: input, target: langaugeCode },
            { cancelToken: cancelToken.token })

        return data.data.tranlations[0].translatedText 
    } catch (err) {
        return ""
    }
}

export default ({ langauge, text }) => {
    const [translated, setTranslated] = useState("");

    useEffect(() => {
        /* make sure we have something to translate */
        if (!text) return 

        /* create cancelation token */
        const cancelationToken = axios.CancelToken.source() 

        doTranslation(text, langauge, cancelationToken)
            .then(setTranslated)

        return () => {
            try { cancelationToken.cancel() }
            catch (err) {}
        }
    }, [text, langauge])

    return (
        <div className="translate">
            <label>Output</label>
            <h1>{translated}</h1>
        </div>
    )
}