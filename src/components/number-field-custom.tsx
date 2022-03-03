import { useNumberField } from '@react-aria/numberfield'
import { useNumberFieldState } from '@react-stately/numberfield'
import { useLocale } from '@react-aria/i18n'
import { useRef } from 'react'

function NumberFieldCustom(props) {
    let { locale } = useLocale();
    let state = useNumberFieldState({...props, locale});
    let inputRef = useRef();
    let { groupProps, inputProps } = useNumberField(props, state, inputRef);

    return (
        <div className="grid grid-cols-2 gap-4 w-full h-auto -mt-14 mb-8 xl:grid-cols-3" {...groupProps}>
            <input className="col-start-2 block w-custom-field h-14 bg-light-grayish-cyan-alt rounded-lg px-6 text-right text-very-dark-cyan text-2xl font-bold outline-strong-cyan transition-[outline] placeholder:text-dark-grayish-cyan xl:col-start-3" {...inputProps} ref={inputRef} />
        </div>
    );
}

export default NumberFieldCustom