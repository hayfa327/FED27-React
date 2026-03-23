import {useWindowWidth} from "./hooks/useWindowWidth";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {useFetchAPI} from "./hooks/useFetchAPI";

export function HooksExample() {
    const windowWidth = useWindowWidth();
    const { storedValue, setStoredValue } = useLocalStorage('myColor', 'blue');
    const { data, isLoading } = useFetchAPI('');

    if (isLoading) return <h1>Loading...</h1>;

    return (<>
        <h1>Hooks</h1>
        <h2>Window width {windowWidth}</h2>
        <h2>Value stored in localStorage is {storedValue}</h2>

        {isLoading ? <h2>Loading</h2> : <h2>Data from API: {JSON.stringify(data)}</h2>}
    </>)
}