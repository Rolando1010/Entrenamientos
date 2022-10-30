import { useEffect, useMemo, useState } from "react";
import Routes from "./routes";
import context from "./utils/context";
import useGlobalState from "./hooks/useGlobalState";
import loadInitialData from "./services/initial-data";

loadInitialData();

const App = () => {
    const [globalState, setGlobalState] = useState({});
    const { startGlobalState } = useGlobalState();
    const valueGlobalState = useMemo(() => ({ globalState, setGlobalState }), [globalState]);

    useEffect(() => {
        startGlobalState(setGlobalState);
    }, []);

    return (
        <context.Provider value={valueGlobalState}>
            <Routes/>
        </context.Provider>
    );
}

export default App;