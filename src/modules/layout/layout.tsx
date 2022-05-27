import React from "react"

type TLayoutProps = {
    children: React.ReactNode
}

export const Layout: React.FC<TLayoutProps> = ({ children }) => {
    return(
        <div>
            {children}
        </div>
    )
}