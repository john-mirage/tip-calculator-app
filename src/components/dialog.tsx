import Form from '@components/form'
import Result from '@components/result'
import { useState } from 'react'

function Dialog() {
    const [ bill, setBill ] = useState(0)
    const [ tip, setTip ] = useState(0)
    const [ people, setPeople ] = useState(1)

    function resetForm() {
        if (bill > 0) setBill(0)
        if (tip > 0) setTip(0)
        if (people > 1) setPeople(1)
    }

    return (
        <main className="w-full min-h-dialog bg-white rounded-t-3xl px-6 pt-6 pb-12">
            <Form
                bill={ bill }
                tip={ tip }
                people={ people }
                setBill={ setBill }
                setTip={ setTip }
                setPeople={ setPeople }
            />
            <Result
                bill={ bill }
                tip={ tip }
                people={ people }
                resetForm={ resetForm }
            />
        </main>
    )
}

export default Dialog