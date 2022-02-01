type InputProps = {
    value?: string;
    placeholder?: string;
    pattern?: string;
    onInput?: (v: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
}

export const Input = (props: InputProps) => {

    const {
        value = '',
        placeholder = '',
        onInput = () => {},
        onBlur = () => {},
        onFocus = () => {},
    } = props;

    return (
        <input
            className="input"
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onInput={e => onInput((e.target as HTMLInputElement).value)}
            onFocus={onFocus}
        />
    );
};