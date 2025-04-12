import { useState } from "react";
import * as React from "react";
import { ExcuseData } from "../Interfaces/ExcuseData";

export function Form({ onSubmit }: { onSubmit: (data: ExcuseData) => void}) {
    const [formData, setFormData] = useState({
        name: "",
        reason: "",
        credibility_level: 1,
        creativity_level: 1,
        date: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: name.includes("level") ? Number(value) : value
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            Nazwisko Nauczyciela:
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            /> <br />

            Powód Wymówki:
            <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
            >
                <option hidden>--- WYBIERZ ---</option>
                <option>Brak Pracy Domowej</option>
                <option>Spóźnienie</option>
                <option>Nieobecność</option>
                <option>Brak Odpowiedzi na Maile</option>
            </select> <br />

            Poziom Wiarygodności:
            <input
                type="range"
                min="1"
                max="5"
                name="credibility_level"
                value={formData.credibility_level}
                onChange={handleChange}
            /> <br />

            Poziom Kreatywności:
            <input
                type="range"
                min="1"
                max="5"
                name="creativity_level"
                value={formData.creativity_level}
                onChange={handleChange}
            /> <br />

            Data Zdarzenia:
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            /> <br />

            <button type="submit">Generuj!</button>
        </form>
    )
}