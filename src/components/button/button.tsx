import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

type TButtonProps = {
    children: string,
    className?: string,
    onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const Button: React.FC<TButtonProps> = ({ children, className, onClickHandler}) => (
    <BootstrapButton className={className} onClick={onClickHandler}>
        {children}
    </BootstrapButton>
)