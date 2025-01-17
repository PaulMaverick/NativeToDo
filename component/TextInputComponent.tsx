import { TextInput } from "react-native";

type Props = {
    name: string;
    value: string;
    input: string;
    multiline: boolean;
    onchange: (name: string, input: string) => void;
}

export default function TextInputComponent({name, value, input, multiline, onchange}: Props) {
    <TextInput 
        value={value}
        multiline={multiline}
        onChange={() => onchange(name, input)}
    />
}