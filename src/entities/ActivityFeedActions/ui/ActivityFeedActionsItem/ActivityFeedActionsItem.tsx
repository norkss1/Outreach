import {memo} from 'react';
import {useDispatch} from "react-redux";
import useElapsedTime from "src/shared/lib/hooks/useElapsedTime/useElapsedTime";
import {actionStatuses} from "src/features/ActivityFeedActions/ui/ActivityFeedActions";
import {activityFeedActionsActions} from "src/features/ActivityFeedActions";
import {IActionStatus} from "src/features/ActivityFeedActions/model/types/actionStatus";
import {LineIconStatus} from "src/shared/ui/LineIconStatus/LineIconStatus";
import {Text, TextSize} from "src/shared/ui/Text";
import {Select} from "src/shared/ui/Select/Select";
import {classNames} from 'src/shared/lib/classNames/classNames';
import cls from './ActivityFeedActionsItem.module.scss';

interface ActionStatusItemProps {
    className?: string;
    action: IActionStatus;
}

export const ActivityFeedActionsItem = memo((props: ActionStatusItemProps) => {
    const { className, action } = props;
    const dispatch = useDispatch();

    const elapsedTime = useElapsedTime(new Date(action.time));

    const onItemDelete = () => {
        dispatch(activityFeedActionsActions.deleteAction(action.id));
    };

    return (
        <div className={classNames(cls.ActionItem, {}, [className])}>
            <Text
                className={cls.actionTime}
                size={TextSize.S}
                text={elapsedTime}
            />

            <LineIconStatus
                action={action.action}
            />

            <div className={cls.actionContent}>
                <p className={cls.actionTitle}>
                    <span className={cls.actionTitleUser}>You</span>
                    {action.action === actionStatuses.MESSAGE
                        ? ' added a note to '
                        :  ` had a ${action.action} with `
                    }
                    <span className={cls.actionTitleUser}>Milton Romaguera</span>
                </p>
                <Text
                    size={TextSize.S}
                    text={action.message}
                />

                <Select
                    className={cls.actionSelect}
                    onOptionClick={onItemDelete}
                    options={[
                        { value: 'delete', content: 'Delete' },
                    ]}
                />
            </div>
        </div>
    );
});
