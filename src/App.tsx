import { useEffect, useState } from "react"

import './main.css'

import enWords from './enWordsList.json'
import ruWords from './ruWordsList.json'

import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"
import Switcher from "./components/Switcher"
import ReloadBtn from "./components/ReloadBtn"


function App() {
  const [language, setLanguage] = useState("en")
  // state for reload on language change and reload btn click
  let [reload, setReload] = useState(false)
  
  const getWordsList = ((language:string) => {
    if (language === 'ru') ruWords
    return enWords
  })

  const [wordToGuess, setWordToGuess] = useState("")

  //useEffect for get new word and remove pressed letters
  useEffect(() => {
    const getWord = () => {
      const words = getWordsList(language)
      return words[Math.floor(Math.random() * words.length)]
    }
    setWordToGuess(getWord)
    setGuessedLetters([])

  }, [language, reload])
  
  const [guessedLetters, setGuessedLetters] = useState<string[]> ([])


  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLosser = incorrectLetters.length >= 6  // 6 body part
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter))

    


  const addGuessedLetter = (letter:string) => {
    if (guessedLetters.includes(letter) || isLosser || isWinner) return

    setGuessedLetters(currentLettets => [...currentLettets, letter])
  }

  // useEffect for keyboard !!! don't work without console.log idk why :)
  useEffect(() => {
    const kbHandler = (e:KeyboardEvent) => {
      console.log();
      const key = e.key
      e.preventDefault()
      if(!key.match(/^[a-z]$/)) return
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", kbHandler)
    return () => document.removeEventListener("keypress", kbHandler)
  }, [])



  return (
    <>
      <div className="container">

        <Switcher 
          language = {language} 
          setLanguage = {setLanguage} 
          setGuessedLetters = {setGuessedLetters}
          getWordsList = {getWordsList} 
        />
        <div className="info">
          {isWinner && "Winner"}
          {isLosser && "Loser"}
        </div>

        <HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>

        <HangmanWord 
          reveal = {isLosser}
          guessedLetters = {guessedLetters} 
          wordToGuess={wordToGuess}
        />

        <div style={{alignSelf: "stretch"}}>
          <Keyboard
            language = {language}
            disabled = {isWinner || isLosser}
            activeLetters = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetters = {incorrectLetters}
            addGuessedLetter = {addGuessedLetter}
          />
        </div>
        
        <ReloadBtn setReload={setReload} reload={reload}/>

      </div>
    </>
  )
}

export default App
