import Form from '@components/form'
import Result from '@components/result'

function Dialog() {
    return (
        <main className="w-full min-h-dialog bg-white rounded-t-3xl p-6">
            <Form />
            <Result />
        </main>
    )
}

export default Dialog