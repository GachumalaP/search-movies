import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../button";

describe('button component', () => {
    const text = 'View Details';
    it('renders correct text inside button', () => {
        render( <Button>{text}</Button> );
        const buttonText = screen.getByText(text);
        expect(buttonText).toBeTruthy();
    })
})

