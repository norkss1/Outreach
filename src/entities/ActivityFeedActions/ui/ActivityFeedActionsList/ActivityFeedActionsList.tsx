import {memo} from "react";
import {useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {getActivityFeedActionsData} from "src/features/ActivityFeedActions/model/selectors/activityFeedActions";
import {ActivityFeedActionsItem} from "../ActivityFeedActionsItem/ActivityFeedActionsItem";
import { classNames } from 'src/shared/lib/classNames/classNames';
import cls from './ActivityFeedActionsList.module.scss';

interface ActivityFeedActionsListProps {
    className?: string;
}

export const ActivityFeedActionsList = memo((props: ActivityFeedActionsListProps) => {
    const { className } = props;

    const activityFeedActionsData = useSelector(getActivityFeedActionsData);

    return (
        <div className={classNames(cls.ActivityFeedActionsList, {}, [className])}>
            {activityFeedActionsData?.length ? (
                activityFeedActionsData.map((action) => (
                    <ActivityFeedActionsItem key={`${action.id}-${action.action}-${uuidv4()}`} action={action} />
                ))
            ) : null}
        </div>
    );
});
