import Layout from "./components/Layout";
import SentenceContextProvider from "./context/sentence-context";
import languageSet from "../config/language_set";

function HomePage({initialState}) {
    return (
        <div>
            <SentenceContextProvider initialState={initialState}>
                <Layout/>
            </SentenceContextProvider>
        </div>
    );
}

export async function getStaticProps() {

    return {
        props: {
            initialState: {
                parts: [],
                partTypes: languageSet,
            }
        }
    }
}

export default HomePage