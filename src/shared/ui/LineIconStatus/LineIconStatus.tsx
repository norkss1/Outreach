import {memo} from "react";
import { mapStatusToAction } from 'src/shared/lib/render/mapStatusToAction';
import {classNames, Mods} from 'src/shared/lib/classNames/classNames';
import cls from './LineIconStatus.module.scss';

export enum LineSize {
    SHORT = 'short',
    LONG = 'long',
}

interface LineIconStatusProps {
    className?: string;
    action: string;
    size?: LineSize;
}

export const LineIconStatus = memo((props: LineIconStatusProps) => {
    const { className, action, size = LineSize.SHORT } = props;

    const mods: Mods = {
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.LineIconStatus, mods, [className])}>
            {mapStatusToAction(action)}
        </div>
    );
});
