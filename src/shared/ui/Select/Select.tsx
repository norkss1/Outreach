import {
    memo, useMemo, useRef, useState,
} from 'react';
import { ArrowDownIcon } from 'src/shared/assets/icons/ArrowDownIcon';
import { classNames, Mods } from 'src/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    onOptionClick?: () => void;
    options?: SelectOption[];
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        onOptionClick,
        options,
    } = props;

    const [isOptionsVisible, setOptionsIsVisible] = useState(false);
    const selectBtnRef = useRef<HTMLButtonElement>(null);

    const openSelectHandler = () => {
        setOptionsIsVisible(!isOptionsVisible);
    };


    const mods: Mods = {
        [cls.optionsListVisible]: isOptionsVisible,
    };

    const optionsList = useMemo(() => options?.map(
        (elem) => (
            <div
                className={cls.option}
                key={elem.value}
                onClick={onOptionClick}
            >
                {elem.content}
            </div>
        ),
    ), [onOptionClick, options]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            <button
                data-testid={'select-btn'}
                type="button"
                ref={selectBtnRef}
                className={cls.selectBtn}
                onClick={openSelectHandler}
            >
                <ArrowDownIcon />
            </button>

            <div className={classNames(cls.optionsList, mods, [className])}>
                {optionsList}
            </div>
        </div>
    );
});
