import { useRadioGroup, useRadio } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { createContext, useContext, useRef } from 'react';

let RadioContext = createContext(null);

export function RadioGroup(props) {
    let {children, label} = props;
    let state = useRadioGroupState(props);
    let {radioGroupProps, labelProps} = useRadioGroup(props, state);

    return (
        <div className="w-full h-auto mb-8" {...radioGroupProps}>
            <span className="block w-full h-auto text-dark-grayish-cyan text-base font-bold mb-4" {...labelProps}>{label}</span>
            <div className="grid grid-cols-2 gap-4 w-full h-auto">
                <RadioContext.Provider value={state}>
                    {children}
                </RadioContext.Provider>
            </div>
        </div>
    )
}

export function Radio(props) {
    let {children} = props;
    let state = useContext(RadioContext);
    let ref = useRef(null);
    let { inputProps } = useRadio(props, state, ref);
    let isSelected = state.selectedValue === props.value

    return (
        <label className={`block w-full h-14 bg-very-dark-cyan rounded-lg text-center text-white text-2xl font-bold leading-[3.5rem] transition-colors cursor-pointer ${isSelected ? "bg-strong-cyan text-very-dark-cyan" : ""}`}>
            <VisuallyHidden>
                <input {...inputProps} ref={ref} />
            </VisuallyHidden>
            {children}
        </label>
    );
}