
import s from './styles/Keyboard.module.css'

interface IKeyboard {
    disabled?: boolean
    language: string
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}
const EN_KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

const RU_KEYS = [
    "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"
]
const Keyboard = ({disabled = false, language, activeLetters, inactiveLetters, addGuessedLetter}: IKeyboard) => {
  return (
    <div className = {s.container} >
        {
            language === 'en'
            ? EN_KEYS.map((key) => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return (
                <button
                    onClick={() => addGuessedLetter(key)}
                    className={`${s.btn} ${isActive? s.active: ""} ${isInactive? s.inactive: ""}`} 
                    disabled = {isActive || isInactive || disabled}
                    key={key}
                >
                    {key}
                </button> 
            )})
            : RU_KEYS.map((key) => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${s.btn} ${isActive? s.active: ""} ${isInactive? s.inactive: ""}`} 
                        disabled = {isActive || isInactive || disabled}
                        key={key}
                    >
                        {key}
                    </button> 
                )})
                }
    </div>
  )
}

export default Keyboard