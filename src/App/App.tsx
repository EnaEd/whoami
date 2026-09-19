import {Info} from "../Components/Info/Info";
import {Terminal} from "../Components/Terminal/Terminal";
import "./App.css";

export const App = () => {
    return (
        <>
            <div className="card-container">

                <div className="info-section">
                    <Info/>
                </div>

                <div className="terminal">
                    <Terminal/>
                </div>

            </div>
        </>
    )
}
