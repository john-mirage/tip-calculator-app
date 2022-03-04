import Button from '@components/button'

interface Props {
    bill: number;
    tip: number;
    people: number;
    resetForm: any;
}

function Result({
    bill,
    tip,
    people,
    resetForm
}: Props) {
    const numberFormater = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
    const tipPerPerson = (bill * tip) / people
    const totalPerPerson = ((bill * tip) + bill) / people

    return (
        <div className="w-full h-auto pt-10 px-6 pb-6 bg-very-dark-cyan rounded-2xl lg:flex lg:flex-col lg:justify-start items-start lg:ml-6 lg:p-12">

            <div className="flex flex-col w-full h-auto mb-6 2xs:flex-row 2xs:justify-between 2xs:items-center">
                <div className="flex flex-col justify-center items-center w-full h-auto mb-2 2xs:mb-0 2xs:justify-start 2xs:items-start">
                    <h3 className="text-white text-base font-bold mb-0.5">Tip Amount</h3>
                    <p className="text-dark-grayish-cyan-alt text-sm font-bold">/ person</p>
                </div>
                <p className="text-strong-cyan text-center text-3xl font-bold 2xs:text-right">{ numberFormater.format(tipPerPerson) }</p>
            </div>

            <div className="flex flex-col w-full h-auto mb-8 2xs:flex-row 2xs:justify-between 2xs:items-center">
                <div className="flex flex-col justify-center items-center w-full h-auto mb-2 2xs:mb-0 2xs:justify-start 2xs:items-start">
                    <h3 className="text-white text-base font-bold mb-0.5">Total</h3>
                    <p className="text-dark-grayish-cyan-alt text-sm font-bold">/ person</p>
                </div>
                <p className="text-strong-cyan text-center text-3xl font-bold 2xs:text-right">{ numberFormater.format(totalPerPerson) }</p>
            </div>

            <Button onPress={ resetForm }>reset</Button>
        </div>
    )
}

export default Result