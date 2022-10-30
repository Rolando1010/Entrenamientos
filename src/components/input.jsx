import { useEffect, useRef } from "react";
import { Text, TextInput, View, TouchableOpacity, InteractionManager } from "react-native";
import { inputStyle } from "../styles/components";
import { MinusIcon, PlusIcon } from "./icons";

const LabelInput = ({ text, onChange, inputRef, autoFocus, ...properties }) => {
    const thisRef = useRef();

    const focus = () => {
        InteractionManager.runAfterInteractions(() => {
            thisRef.current.focus();
        });
    }

    useEffect(() => {
        if(inputRef) inputRef.focus = focus;
        if(autoFocus) setTimeout(focus, 100);
    }, []);

    return (
        <View>
            <Text style={inputStyle.labelText}>{text}:</Text>
            <TextInput
                ref={thisRef}
                onChangeText={onChange}
                style={inputStyle.label}
                {...properties}
            />
        </View>
    );
}

const NumberInput = ({ text, step, value, onChange, ...properties }) => {
    const inputRef = useRef();

    const changeNumber = (callback) => () => {
        const floatValue = parseFloat(value || 0);
        const newValue = callback(floatValue);
        inputRef.focus();
        onChange(newValue);
    }

    return (
        <View>
            <View style={inputStyle.number}>
                <TouchableOpacity onPress={changeNumber(value => value - step)}>
                    <MinusIcon/>
                </TouchableOpacity>
                <LabelInput
                    value={String(value)}
                    text={text}
                    onChange={onChange}
                    inputRef={inputRef}
                    {...properties}
                />
                <TouchableOpacity onPress={changeNumber(value => value + step)}>
                    <PlusIcon/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export {
    LabelInput,
    NumberInput
}