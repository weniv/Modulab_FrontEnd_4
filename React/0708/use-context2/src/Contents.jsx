import UseLang from "./UseLang";

function Contents() {

    const { languageData } = UseLang();

    return (
        <>
            <h2>{languageData.title}</h2>
            <p>{languageData.greeting}</p>
            <p>{languageData.description}</p>
        </>
    );
}

export default Contents;