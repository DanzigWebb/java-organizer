import { Transition, TransitionStatus } from 'react-transition-group';
import { CSSProperties, ReactNode } from 'react';
import { Properties } from 'csstype';

// Todo (1) добавить анимацию через namespace (если возможно) <Animation.SlideDown>

const defaultDuration = 300;

interface MenuAnimationProps {
    inProp: boolean;
    children: ReactNode;
    duration?: number;
    length?: number;
    style?: CSSProperties
}

export const SlideDownAnimation = (props: MenuAnimationProps) => {
    const {
        inProp = false,
        children,
        duration = defaultDuration,
        length = 20,
        style = {}
    } = props;

    const defaultStyle = {
        ...style,
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles: Partial<Record<TransitionStatus, Properties>> = {
        entering: {opacity: 1, transform: 'translateY(0)'},
        entered: {opacity: 1, transform: 'translateY(0)'},
        exiting: {opacity: 0, transform: `translateY(${length}px)`},
        exited: {opacity: 0, transform: `translateY(${length}px)`},
    };

    return (
        <Transition in={inProp} timeout={duration}>
            {state => (
                <div style={{...defaultStyle, ...transitionStyles[state]}}>
                    {children}
                </div>
            )}
        </Transition>
    );
};