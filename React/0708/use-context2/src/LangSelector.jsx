import UseLang from "./UseLang";

function LangSelector() {

    const { languageData, currentLanguage, changeLanguage } = UseLang();

    return (
        <>
            <h2>{languageData.languageSelector}</h2>
            <button onClick={() => changeLanguage('en')} disabled={currentLanguage === 'en'}>English</button>
            <button onClick={() => changeLanguage('ko')} disabled={currentLanguage === 'ko'}>한국어</button>
            <button onClick={() => changeLanguage('ja')} disabled={currentLanguage === 'ja'}>일본어</button>
        </>
    );
}

export default LangSelector;