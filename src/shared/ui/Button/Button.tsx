import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'src/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    CLEAR = 'clear'
}

export enum ButtonSize {
    M = 'size_m',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return (
        <button
            data-testid={'button-component'}
            className={classNames(cls.Button, mods, [className])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );
});
