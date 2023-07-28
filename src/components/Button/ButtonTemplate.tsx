import React from 'react';
import { Spinner } from '../Spinner';

export enum Color {
    Blue = 'cyan',
    Green = 'lime',
    Red = 'rose',
}

export enum Size {
    Small = 'small',
    Medium = 'medium',
    Big = 'big',
}

interface Props {
    hover?: boolean;
    loading?: boolean;
    disabled?: boolean;
    color?: Color;
    link?: string;
    size?: Size;
    text: string;
    onClick?: () => void;
}
const commonClass = 'rounded-full border cursor-pointer px-4 flex items-center justify-center text-white';
const sizeClasses = {
    [Size.Big]: 'h-14 w-64',
    [Size.Medium]: 'h-12 w-48',
    [Size.Small]: 'h-10 w-36',
}
const colorClasses = {
    [Color.Blue]: 'bg-cyan-600',
    [Color.Green]: 'bg-lime-400',
    [Color.Red]: 'bg-rose-400',
}
const hoverClasses = {
    [Color.Blue]: 'hover:bg-cyan-400',
    [Color.Green]: 'hover:bg-lime-200',
    [Color.Red]: 'hover:bg-rose-200',
}

export const ButtonTemplate = React.memo(({
    hover = true,
    loading,
    disabled,
    color,
    link,
    size,
    text,
    onClick
}: Props) => {
    const onClickWrapper = React.useCallback(() => {
        if (disabled) {
            return;
        }
        onClick && onClick();
    }, [disabled, onClick]);

    const sizeClass = size ? sizeClasses[size] : sizeClasses[Size.Medium];
    const colorClass = color ? colorClasses[color] : colorClasses[Color.Blue];
    const hoverClass = hover ? hoverClasses[color ?? Color.Blue] : '';

    if (loading) {
        return (
            <div
                className={`${commonClass} ${sizeClass} ${colorClass} ${hoverClass}`}
                onClick={onClickWrapper}
            >
                <Spinner />
            </div>
        )
    }

    if (link && !disabled) {
        return (
            <div
                className={`${commonClass} ${sizeClass} ${colorClass} ${hoverClass}`}
                onClick={onClickWrapper}
            >
                    <a href={link}>
                        {text}
                    </a>
            </div>
        )
    }

    return (
        <div
            className={`${commonClass} ${sizeClass} ${colorClass} ${hoverClass}`}
            onClick={onClickWrapper}
            >
            {text}
        </div>
    )
})
