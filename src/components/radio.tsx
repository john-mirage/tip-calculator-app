import { useRadio } from '@react-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useContext, useRef } from 'react';
import RadioGroupContext from '@contexts/radio-group-context';

function Radio(props) {
    let { customTip, value } = props
    let state = useContext(RadioGroupContext)
    let ref = useRef(null)
    let { inputProps } = useRadio(props, state, ref)
    let isSelected = state.selectedValue === props.value && !customTip

    return (
        <label className={`block w-full h-14 rounded-lg text-center text-2xl font-bold leading-[3.5rem] transition-colors cursor-pointer ${isSelected ? "bg-strong-cyan text-very-dark-cyan" : "bg-very-dark-cyan text-white"}`}>
            <VisuallyHidden>
                <input {...inputProps} ref={ref} />
            </VisuallyHidden>
            { value }%
        </label>
    );
}

export default Radio