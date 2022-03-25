import { useNumberField } from '@react-aria/numberfield'
import { useNumberFieldState } from '@react-stately/numberfield'
import { useLocale } from '@react-aria/i18n'
import { RefObject, useRef } from 'react'
import { AriaNumberFieldProps } from '@react-types/numberfield';

function NumberFieldCustom(props: AriaNumberFieldProps) {
    let { locale } = useLocale();
    let state = useNumberFieldState({...props, locale});
    let inputRef = useRef() as RefObject<HTMLInputElement>;
    let { groupProps, inputProps } = useNumberField(props, state, inputRef);

    return (
        <div className="grid grid-cols-1 w-full h-auto mb-6 mt-4 xs:-mt-12 xs:grid-cols-2 xs:gap-4 sm:grid-cols-3 dialog:mb-10" {...groupProps}>
            <input className="block w-full h-12 bg-light-grayish-cyan-alt rounded-md px-6 text-right text-very-dark-cyan text-2xl font-bold outline-strong-cyan transition-[outline] placeholder:text-dark-grayish-cyan xs:col-start-2 sm:col-start-3" {...inputProps} ref={inputRef} />
        </div>
    );
}

export default NumberFieldCustom