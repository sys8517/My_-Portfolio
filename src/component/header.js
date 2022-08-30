import { useEffect, useState } from "react"

export default function Header(){
    const [languages,setLanguages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/language')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setLanguages(data);
        })
    }, []);
    return (
        <>
        <div className="ok">
        <ul className="list_language">
            {languages.map((lang) => (
                <li key={lang.id}>
                    {lang.name}
                </li>
            ))}
        </ul>
        </div>
        </>
    );
}