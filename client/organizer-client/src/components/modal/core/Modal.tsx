import { ModalContainer } from './ModalContainer';
import { AmPortal } from '../../utils';
import { ReactNode } from 'react';
import { ModalSliderContainer } from './ModalSliderContainer';

type ContainerType = 'default' | 'slider';

export class Modal extends AmPortal {

    constructor(
        public node: ReactNode,
        public containerWidthClass = '',
        public type: 'default' | 'slider' = 'default'
    ) {
        super(node);
        this.container = this.setContainer(type);
    }

    setContainer(type: ContainerType) {
        switch (type) {
            case 'slider':
                return (
                    <ModalSliderContainer
                        onClose={() => this.close()}
                        context={this}
                        widthClass={this.containerWidthClass}
                    >
                        {this.node}
                    </ModalSliderContainer>
                );
            default:
                return (
                    <ModalContainer
                        onClose={() => this.close()}
                        context={this}
                        widthClass={this.containerWidthClass}
                    >
                        {this.node}
                    </ModalContainer>
                );
        }
    }
}
