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
        <main className="w-full min-h-dialog max-w-dialog mx-auto bg-white rounded-t-3xl px-8 py-9 dialog:min-h-0 dialog:rounded-3xl dialog:flex dialog:flex-row dialog:pl-12 dialog:pb-8 dialog:pr-8 dialog:pt-8">
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