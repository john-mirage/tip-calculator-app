interface Props {
    totalTip: number;
    total: number;
}

function Result({ totalTip, total }: Props) {
    const formatedTotalTip = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(totalTip);
    const formatedTotal = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(total);

    return (
        <div className="w-full h-auto pt-10 px-6 pb-6 bg-very-dark-cyan rounded-2xl lg:flex lg:flex-col lg:justify-start items-start lg:ml-6 lg:p-12">
            <div className="flex flex-row justify-between items-center w-full h-auto mb-6">
                <div className="w-auto h-auto">
                    <h3 className="text-white text-base font-bold mb-0.5">Tip Amount</h3>
                    <p className="text-dark-grayish-cyan-alt text-sm font-bold">/ person</p>
                </div>
                <p className="text-strong-cyan text-3xl font-bold">{ formatedTotalTip }</p>
            </div>

            <div className="flex flex-row justify-between items-center w-full h-auto mb-8">
                <div className="w-auto h-auto">
                    <h3 className="text-white text-base font-bold mb-0.5">Total</h3>
                    <p className="text-dark-grayish-cyan-alt text-sm font-bold">/ person</p>
                </div>
                <p className="text-strong-cyan text-3xl font-bold">{ formatedTotal }</p>
            </div>

            <button className="group relative block w-full h-14 bg-strong-cyan rounded-lg text-2xl uppercase font-bold text-very-dark-cyan overflow-hidden transition-colors hover:bg-light-grayish-cyan lg:mt-auto">reset</button>
        </div>
    )
}

export default Result