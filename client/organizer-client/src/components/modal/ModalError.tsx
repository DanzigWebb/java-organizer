import { useContext } from 'react';
import { ModalContext } from './core/ModalContext';

type ModalErrorProps = {
    title?: string;
    message: string;
}

export const ModalError = (props: ModalErrorProps) => {
    const {title = 'Ошибка!', message = ''} = props;
    const context = useContext(ModalContext);

    return (
        <div className="modal-box">
            <h2 className="text-xl font-bold py-2">{title}</h2>
            <p>{message}</p>

            <div className="modal-action">
                <button className="btn" onClick={context.onClose}>Закрыть</button>
            </div>
        </div>
    );
};