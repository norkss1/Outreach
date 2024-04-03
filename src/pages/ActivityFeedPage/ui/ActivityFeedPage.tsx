import {memo, useState} from "react";
import {ActivityFeedForm} from "src/widgets/ActivityFeedForm";
import {ActivityFeedActionsList} from "src/entities/ActivityFeedActions";
import {Text, TextAlign, TextSize, TextWeight,} from 'src/shared/ui/Text';
import { LogoImage } from "src/shared/assets/icons/Logo";
import { WavesImage } from "src/shared/assets/icons/WavesImage";
import {classNames} from 'src/shared/lib/classNames/classNames';
import cls from './ActivityFeedPage.module.scss';

const ActivityFeedPage = () => {
        const [isActive, setIsActive] = useState(false);

        return (
            <div className={classNames(cls.ActivityFeedPageWrapper, {}, [])}>
                    <div className={cls.header}>
                        <div className={cls.headerBody}>
                            <LogoImage />
                        </div>
                        <div className={cls.headerWaves}>
                            <WavesImage />
                        </div>
                    </div>

                <div className={classNames(cls.ActivityFeedPage, {}, [])}>
                    <Text
                        text={'Activity Feed'}
                        weight={TextWeight.LIGHT}
                        size={TextSize.XL}
                        align={TextAlign.LEFT}
                    />

                    <Text
                        className={cls.ListTitle}
                        text={'Create an Activity Feed app per the designs:'}
                        weight={TextWeight.MEDIUM}
                        size={TextSize.M}
                        align={TextAlign.LEFT}
                    />

                    <ActivityFeedForm
                        isActive={isActive}
                        setIsActive={setIsActive}
                    />

                    <ActivityFeedActionsList />
                </div>
            </div>
        );
};

export default memo(ActivityFeedPage);
