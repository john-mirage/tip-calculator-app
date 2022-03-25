import { useNumberField } from '@react-aria/numberfield'
import { useNumberFieldState } from '@react-stately/numberfield'
import { useLocale } from '@react-aria/i18n'
import { useRef } from 'react'

function NumberField(props) {
    let { locale } = useLocale();
    let state = useNumberFieldState({...props, locale});
    let inputRef = useRef();
    let { labelProps, groupProps, inputProps } = useNumberField(props, state, inputRef);

    return (
        <div className={`w-full h-auto mb-6 ${props.margin ? "dialog:mb-10" : "dialog:mb-4"}`}>
            <label className="block w-full h-auto text-dark-grayish-cyan text-base font-bold mb-2" {...labelProps}>{props.label}</label>
            <div className="relative w-full h-auto" {...groupProps}>
                <input className="block w-full h-12 bg-light-grayish-cyan-alt rounded-md px-6 text-right text-very-dark-cyan text-2xl font-bold outline-strong-cyan transition-[outline] placeholder:text-dark-grayish-cyan" {...inputProps} ref={inputRef} />
                <div className="absolute top-1/2 left-6 -translate-y-1/2 w-auto h-auto">
                    { props.children }
                </div>
            </div>
        </div>
    );
}

export default NumberField