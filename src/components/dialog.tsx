import Form from '@components/form'
import Result from '@components/result'

function Dialog() {
    return (
        <main className="w-full min-h-dialog bg-white rounded-t-3xl px-6 pt-6 pb-12">
            <Form />
            <Result />
        </main>
    )
}

export default Dialog