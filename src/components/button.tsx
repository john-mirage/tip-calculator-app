import { useButton } from '@react-aria/button';
import { AriaButtonProps } from "@react-types/button";
import { PropsWithChildren, RefObject, useRef } from 'react';

function Button(props: PropsWithChildren<AriaButtonProps>) {
    let { children } = props;
    const ref = useRef() as RefObject<HTMLButtonElement>;
    let { buttonProps, isPressed } = useButton({...props, elementType: 'button'}, ref);

    let colors = " ";

    if (props.isDisabled) {
        colors += "bg-[#0D686D] text-very-dark-cyan";
    } else if (isPressed) {
        colors += "bg-light-grayish-cyan text-strong-cyan";
    } else {
        colors += "bg-strong-cyan text-very-dark-cyan";
    }

    return (
        <button
            className={`block w-full rounded-md text-center p-2 text-xl uppercase font-bold transition-colors dialog:mt-auto select-none${colors}`}
            {...buttonProps}
            ref={ref}
        >
            {children}
        </button>
    );
}

export default Button