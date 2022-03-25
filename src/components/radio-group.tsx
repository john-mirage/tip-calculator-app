import RadioGroupContext from '@contexts/radio-group-context';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { AriaRadioGroupProps } from '@react-types/radio';
import { PropsWithChildren } from 'react';

function RadioGroup(props: PropsWithChildren<AriaRadioGroupProps>) {
    let {children, label} = props;
    let state = useRadioGroupState(props);
    let {radioGroupProps, labelProps} = useRadioGroup(props, state);

    return (
        <div className="w-full h-auto" {...radioGroupProps}>
            <span className="block w-full h-auto text-dark-grayish-cyan text-base font-bold mb-3" {...labelProps} id="tip-choices">{label}</span>
            <div className="grid grid-cols-1 gap-4 w-full h-auto xs:grid-cols-2 sm:grid-cols-3">
                <RadioGroupContext.Provider value={state}>
                    { children }
                </RadioGroupContext.Provider>
            </div>
        </div>
    )
}

export default RadioGroup