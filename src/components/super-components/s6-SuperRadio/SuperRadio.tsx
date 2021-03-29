import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import './SuperRadio.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
        // onChange, onChangeOption - done
    }

    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
        <div className="form_radio" key={name + "-" + i} >
            <input
                id={"hw7-radio" + i}
                className={"radio"}
                type={"radio"}
                name={name}
                checked={i === 0}
                value={o}
                onChange={onChangeCallback}
                // name, checked, value, onChange - done
            />
            <label htmlFor={"hw7-radio" + i}>
                <span></span>{o}
            </label>
        </div>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
