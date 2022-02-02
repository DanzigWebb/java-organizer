import { ReactNode } from 'react';

type FormErrorProps = {
    children: ReactNode;
}

export const FormError = (props: FormErrorProps) => {

    const {children} = props;

    return (
        <span className="form-control-error">
                {children}
            </span>
    );
};