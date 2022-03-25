import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useRef } from 'react';

function Button(props) {
    let { children } = props;
    let ref = useRef();
    let { buttonProps, isPressed } = useButton({...props, elementType: 'span'}, ref);
    let { isFocusVisible, focusProps } = useFocusRing();

    return (
        <button
            className={`block w-full rounded-md text-center p-2 text-xl uppercase font-bold transition-colors dialog:mt-auto select-none ${isPressed ? "bg-light-grayish-cyan text-strong-cyan" : "bg-strong-cyan text-very-dark-cyan"} ${isFocusVisible ? "ring-1 ring-light-grayish-cyan" : ""}`}
            {...buttonProps}
            {...focusProps}
            ref={ref}
        >
            {children}
        </button>
    );
}

export default Button