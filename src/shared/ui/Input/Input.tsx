import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useState,
} from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        ...otherProps
    } = props;

    const [placeholderValue, setPlaceholder] = useState(placeholder);

    useEffect(() => {
        setPlaceholder(placeholder);
    }, [placeholder]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    const onFocusHandler = () => {
        setPlaceholder('');
    };

    const onBlurHandler = () => {
        setPlaceholder(placeholder);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input
                data-testid={'input-element'}
                className={classNames(cls.input)}
                type={type}
                value={value}
                placeholder={placeholderValue}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                {...otherProps}
            />
        </div>
    );
});
