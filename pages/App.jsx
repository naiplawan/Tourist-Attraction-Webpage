import HomePage from "./Homepage";
import appstyle from "../styles/App.module.css";

export default function App() {
    return (
        <div className={appstyle.App}>
            <HomePage />
            <h1>App</h1>
        </div>
    );
}
