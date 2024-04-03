import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import useFormattedDate from "src/shared/lib/hooks/useFormattedDate/useFormattedDate";
import {ActivityFeedActions, activityFeedActionsActions} from "src/features/ActivityFeedActions";
import {actionStatuses} from "src/features/ActivityFeedActions/ui/ActivityFeedActions";
import {LineIconStatus, LineSize} from "src/shared/ui/LineIconStatus/LineIconStatus";
import {Input} from "src/shared/ui/Input/Input";
import {Button} from "src/shared/ui/Button/Button";
import {classNames, Mods} from 'src/shared/lib/classNames/classNames';
import cls from './ActivityFeedForm.module.scss';

interface ActivityFeedFormProps {
    className?: string;
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}

export const ActivityFeedForm = (props: ActivityFeedFormProps) => {
    const { className, isActive, setIsActive } = props;
    const dispatch = useDispatch();
    const date = useFormattedDate();

    const [inputValue, setInputValue] = useState<string>('');
    const [action, setAction] = useState<string>(actionStatuses.MESSAGE);

    const containerRef = useRef<HTMLInputElement>(null);

    const handleActionClick = (value: string) => {
        setAction(value);
    };

    const onFormSubmit = () => {
        const actionStatusInfo = {
            id: uuidv4(),
            time: date,
            action: action,
            message: inputValue,
        };

        setIsActive(false);
        setInputValue('');
        setAction(actionStatuses.MESSAGE);

        dispatch(activityFeedActionsActions.addAction(actionStatusInfo));
    }

    useEffect(() => {
        document.addEventListener('click', (event) => {
            if (!containerRef?.current?.contains(event.target as Node)) setIsActive(false);
        });
    })

    const mods: Mods = {
        [cls.active]: isActive,
    }

    return (
        <div className={classNames(cls.ActivityFeedForm, {}, [className])} >
            <LineIconStatus
                action={'list'}
                size={isActive ? LineSize.LONG : LineSize.SHORT}
            />

            <div
                ref={containerRef}
                className={classNames(cls.inputContainer, mods)}
                onMouseDown={() => setIsActive(true)}
            >
                <Input
                    className={classNames(cls.activityFeedInput, mods)}
                    type="text"
                    placeholder={'Add a note about Milton Romaguera...'}
                    value={inputValue}
                    onChange={setInputValue}
                />

                <ActivityFeedActions
                    className={classNames(cls.activityFeedActions, mods)}
                    currentAction={action}
                    handleActionClick={handleActionClick}
                />

                <Button
                    className={classNames(cls.activityFeedButton, mods)}
                    onClick={() => onFormSubmit()}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};
