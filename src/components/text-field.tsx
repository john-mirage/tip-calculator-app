import { useTextField } from '@react-aria/textfield';
import { useRef } from 'react';

export function TextField(props) {
    let { label } = props;
    let ref = useRef();
    let { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, ref);

    return (
        <div className="w-full h-auto mb-8">
            <label className="block w-full h-auto text-dark-grayish-cyan text-base font-bold mb-2" {...labelProps}>{label}</label>
            <div className="relative w-full h-auto">
                <input className="block w-full h-14 bg-light-grayish-cyan-alt rounded-lg px-6 text-right text-very-dark-cyan text-2xl font-bold outline-strong-cyan transition-[outline] placeholder:text-dark-grayish-cyan" {...inputProps} ref={ref} />
                <div className="absolute top-1/2 left-6 -translate-y-1/2 w-auto h-auto">
                    { props.children }
                </div>
            </div>
            {props.description && (
                <div {...descriptionProps} style={{ fontSize: 12 }}>
                    {props.description}
                </div>
            )}
            {props.errorMessage && (
                <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
                    {props.errorMessage}
                </div>
            )}
        </div>
    );
}

export function CustomTextField(props) {
    let ref = useRef();
    let { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(props, ref);

    return (
        <input className="block w-full h-14 bg-light-grayish-cyan-alt rounded-lg px-6 text-right text-very-dark-cyan text-2xl font-bold outline-strong-cyan transition-[outline] placeholder:text-dark-grayish-cyan" {...inputProps} ref={ref} />
    )
}
