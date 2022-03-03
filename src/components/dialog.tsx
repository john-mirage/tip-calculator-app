import Form from '@components/form'
import Result from '@components/result'
import { useState } from 'react'

function Dialog() {
    const [ totalTip, setTotalTip ] = useState(0)
    const [ total, setTotal ] = useState(0)

    return (
        <main className="w-full min-h-dialog bg-white rounded-t-3xl px-6 pt-6 pb-12">
            <Form
                setTotalTip={ setTotalTip }
                setTotal={ setTotal }
            />
            <Result
                totalTip={ totalTip }
                total={ total }
            />
        </main>
    )
}

export default Dialog