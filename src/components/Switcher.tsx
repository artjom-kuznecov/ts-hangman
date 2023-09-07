
import s from './styles/Switcher.module.css'

interface ISwitcher {
    language: string
    setLanguage: (language: string) => void
    getWordsList: (value:string) => void
    setGuessedLetters: (value:string[]) => void
}
const Switcher = ({language, getWordsList, setLanguage, setGuessedLetters}:ISwitcher) => {
    
  return (
    <div className = {s.container}>
        <div className = {s.btns}>
            <div 
            className= {s.en} 
            onClick={() => {
                getWordsList('en')
                setLanguage('en')
                setGuessedLetters([])
            } }
            style = {{background: language === "en" ? "hsl(200, 100%, 75%)" : ""}}
            >
                en
            </div>

            <div 
            className= {s.ru} 
            onClick={() => {
                getWordsList('ru')
                setLanguage('ru')
                setGuessedLetters([])
            } }
            style = {{background: language === "ru" ? "hsl(200, 100%, 75%)" : ""}}
            >
                ru
            </div>
        </div>
    </div>
  )
}

export default Switcher