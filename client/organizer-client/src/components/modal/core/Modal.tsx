import { ModalContainer } from './ModalContainer';
import { AmPortal } from '../../utils';


export class Modal extends AmPortal {
    container = (
        <ModalContainer
            onClose={() => this.close()}
            context={this}>
            {this.node}
        </ModalContainer>
    );
}
