import { LanguageProvider } from "./LanguageProvider"
import LangSelector from "./LangSelector"
import Contents from "./Contents"

function App() {

    return (
        <>
            <LanguageProvider>
                <LangSelector />
                <Contents />
            </LanguageProvider>
        </>
    )
}

export default App
