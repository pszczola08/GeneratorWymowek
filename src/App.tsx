import './App.css'
import {Form} from "./components/Form.tsx";
import {Excuse} from "./components/Excuse.tsx";
import { useState } from 'react';
import { ExcuseData } from './Interfaces/ExcuseData.tsx';
import { ExcuseList } from './components/ExcuseList.tsx';
import { getExcuses } from './functions/getExcuses.tsx';

function App() {
    const [ excuse, setExcuse ] = useState<ExcuseData | null>(null)

    const handleFormSubmit = (data: ExcuseData) => {
        setExcuse(data)
    }

    const ExcuseArray: String[] | undefined = getExcuses()

    return (
        <>
            <Form onSubmit={ handleFormSubmit } />
            {excuse && <Excuse {...excuse} />}
            <ExcuseList excuseArray={ExcuseArray} />
        </>
    )
}

export default App
