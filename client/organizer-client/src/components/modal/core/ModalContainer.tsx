import { ReactNode, useLayoutEffect, useState } from 'react';
import { Modal } from './Modal';
import { ModalContext } from './ModalContext';
import { SlideDownAnimation } from '../../animations/SlideDownAnimation';

export interface ModalContainerProps {
    children: ReactNode;
    onClose: () => void;
    context: Modal;
}

// Todo: добавить Fade анимацию на оверлей
export const ModalContainer = ({children, onClose}: ModalContainerProps) => {
    const [boxShow, setBoxShow] = useState(false);

    const duration = 140;

    console.log(boxShow);

    // Fixme подумать над тем, почему анимация иногда не проигрывается
    useLayoutEffect(() => {
        setTimeout(() => {
            setBoxShow(true);
        }, 10);
    }, []);

    function onStartClose() {
        setBoxShow(false);

        setTimeout(() => {
            onClose();
        }, duration);
    }

    return (
        <ModalContext.Provider value={{onClose: onStartClose}}>
            <div className="modal modal-open" onClick={onStartClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <SlideDownAnimation key={0} inProp={boxShow} duration={duration}>
                        {children}
                    </SlideDownAnimation>
                </div>
            </div>
        </ModalContext.Provider>
    );
};
