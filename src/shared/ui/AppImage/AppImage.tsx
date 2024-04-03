import {
    type ImgHTMLAttributes,
    memo,
    type ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        const img = new Image();

        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    return <img className={className} src={src} alt={alt} {...otherProps} />;
});
