import { v4 as uuidv4 } from 'uuid';
import {mapStatusToAction} from "src/shared/lib/render/mapStatusToAction";
import {classNames, Mods} from 'src/shared/lib/classNames/classNames';
import cls from './ActivityFeedActions.module.scss';

interface ActivityFeedActionsProps {
    className?: string;
    currentAction: string;
    handleActionClick: (value: string) => void;
}

export const actionStatuses = {
    MESSAGE: 'message',
    CALL: 'call',
    COFFEE: 'coffee',
    BEER: 'beer',
    MEETING: 'meeting',
};

export const ActivityFeedActions = ({className, currentAction, handleActionClick}: ActivityFeedActionsProps) => (
    <div className={classNames(cls.ActivityFeedActions, {}, [className])}>
        {Object.values(actionStatuses).map((item: string) => {
            const modsForAction: Mods = {
                [cls[item]]: true,
                [cls.active]: item === currentAction,
            };

            return (
                <div
                    key={`action-${uuidv4()}`}
                    className={classNames(cls.action, modsForAction)}
                    onClick={(event) => {
                        event.stopPropagation();
                        handleActionClick(item);
                    }}
                >
                    {mapStatusToAction(item)}
                </div>
            )
        })}
    </div>
);
