import React, { useEffect } from 'react'

const ScreenOrientation = () => {
    useEffect(() => {
        switch (window.screen.orientation.type) {
            case "landscape-primary":
                console.log("That looks good.");
                break;
            case "portrait-secondary":
            case "portrait-primary":
                console.log("Mmm… you should rotate your device to landscape");
                break;
            default:
                console.log("The orientation API isn't supported in this browser :(");
        }
    }, []);

    return (
        <div>ScreenOrientation</div>
    )
}

export default ScreenOrientation