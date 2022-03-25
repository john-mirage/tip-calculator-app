import { createContext } from "react";
import { RadioGroupState } from '@react-stately/radio';

let RadioGroupContext = createContext<RadioGroupState | null>(null);

export default RadioGroupContext