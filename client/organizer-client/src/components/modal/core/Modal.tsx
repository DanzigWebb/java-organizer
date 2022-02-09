import { ModalContainer } from './ModalContainer';
import { AmPortal } from '../../utils';
import { ReactNode } from 'react';


export class Modal extends AmPortal {

    constructor(
        public node: ReactNode,
        public containerWidthClass = '',
    ) {
        super(node);
    }

    container = (
        <ModalContainer
            onClose={() => this.close()}
            context={this}
            widthClass={this.containerWidthClass}
        >
            {this.node}
        </ModalContainer>
    );
}
