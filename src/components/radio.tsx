import { useRadio } from '@react-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { useContext, useRef } from 'react';
import RadioGroupContext from '@contexts/radio-group-context';

function Radio(props) {
    let { children } = props
    let state = useContext(RadioGroupContext)
    let ref = useRef(null)
    let { inputProps } = useRadio(props, state, ref)
    let { isFocusVisible, focusProps } = useFocusRing();
    let isSelected = state.selectedValue === props.value

    return (
        <label className={`block w-full h-12 rounded-md text-center text-2xl font-bold leading-[3rem] transition-colors cursor-pointer ${isSelected ? "bg-strong-cyan text-very-dark-cyan" : "bg-very-dark-cyan text-white"} ${isFocusVisible ? "ring-2 ring-offset-2 ring-strong-cyan" : ""}`}>
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref}  />
            </VisuallyHidden>
            { children }
        </label>
    );
}

export default Radio