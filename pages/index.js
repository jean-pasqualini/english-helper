import Layout from "./components/Layout";
import {SentenceContextProvider} from "./context/sentence-context";

function HomePage({initialState}) {
    return (
        <div>
            <SentenceContextProvider initialState={initialState}>
                <Layout/>
            </SentenceContextProvider>
        </div>
    );
}

export async function getServerSideProps() {

    const res = await fetch('http://localhost:3000/api/language')
    const result = await res.json()

    return {
        props: {
            initialState: {
                parts: [],
                partTypes: result,
            }
        }
    }
}

export default HomePage