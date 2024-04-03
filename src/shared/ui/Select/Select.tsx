import {
    memo,
    useMemo,
    useRef
} from 'react';
import { useHover } from "src/shared/lib/hooks/useHover/useHover";
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

    const [isHover, bindHover] = useHover();
    const selectBtnRef = useRef<HTMLButtonElement>(null);

    const mods: Mods = {
        [cls.optionsListVisible]: isHover,
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
        <div {...bindHover} className={classNames(cls.Wrapper, {}, [className])}>
            <button
                data-testid={'select-btn'}
                type="button"
                ref={selectBtnRef}
                className={cls.selectBtn}
            >
                <ArrowDownIcon />
            </button>

            <div className={classNames(cls.optionsList, mods, [className])}>
                {optionsList}
            </div>
        </div>
    );
});
