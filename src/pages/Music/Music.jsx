import SuggestionResults from '../../components/SuggestionResults/SuggestionResults'
import styles from './Music.css'

const Music = ({ user, suggestions }) => {
    return (
        <>
            <main className={styles.container}>
                <h1>
                    Welcome to the Music page
                </h1>
            </main>
            <body>
                <SuggestionResults SuggestionResults={SuggestionResults} />
            </body>
        </>
    )
}

export default Music


