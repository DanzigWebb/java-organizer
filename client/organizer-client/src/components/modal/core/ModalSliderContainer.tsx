import { ReactNode, useLayoutEffect, useState } from 'react';
import { Modal } from './Modal';
import { ModalContext } from './ModalContext';
import { SlideDownAnimation } from '../../animations/SlideDownAnimation';
import { ModalUtils } from './Modal.utils';
import './ModalSliderContainer.css';

export interface ModalContainerProps {
    children: ReactNode;
    onClose: () => void;
    context: Modal;
    widthClass?: string;
}

export const ModalSliderContainer = (props: ModalContainerProps) => {
    const [boxShow, setBoxShow] = useState(false);

    const {
        children,
        onClose,
        widthClass = '',
    } = props;

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
        }, ModalUtils.duration);
    }

    return (
        <ModalContext.Provider value={{onClose: onStartClose}}>
            <div className="modal-slider-wrapper" onClick={onStartClose}>
                <SlideDownAnimation
                    key={0}
                    inProp={boxShow}
                    duration={ModalUtils.duration}
                    length={ModalUtils.length}
                    style={{width: '100%'}}
                >
                    <div className="modal-slider-box bg-base-200 rounded-lg shadow-lg ring-1 ring-base-100" onClick={e => e.stopPropagation()}>
                        <div className="flex p-3 py-5 md:py-3 justify-center items-center cursor-move control">
                            <div className="border-2 rounded-md w-32" />
                        </div>
                        <div
                            style={{'touchAction': 'none'}}
                            className="overflow-y-auto h-full pb-8"
                        >
                            {children}
                        </div>
                    </div>
                </SlideDownAnimation>

            </div>
        </ModalContext.Provider>
    );
};