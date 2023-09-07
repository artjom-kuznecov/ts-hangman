import s from './styles/HangmanWord.module.css'

interface IHangmanWord {
    reveal?: boolean
    guessedLetters: string[]
    wordToGuess: string
}

const HangmanWord = ({guessedLetters, wordToGuess, reveal}:IHangmanWord) => {

    return (
        <div className={s.container}>
            {
                wordToGuess.split("").map((lett, index) => (
                    <span className= {s.letter} key={index}>
                        <span style={{
                            visibility: guessedLetters.includes(lett) || reveal ? 'visible' : 'hidden',
                            color: !guessedLetters.includes(lett) && reveal ? 'red' : 'black'
                        }}>
                            {lett}
                        </span>
                        
                    </span>
                ))
            }
        </div>
    )
}

export default HangmanWord