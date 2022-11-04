import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

export default function Layout({children}: any) {
    return(
        <div>
            <Navbar />
            <div className = "flex min-h-screen flex-col jusitfy-between pt-24">
                {children}
                <Footer />
            </div>
        </div>
    )
}