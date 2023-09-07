
import s from './styles/HangmanDrawing.module.css'

interface IHangmanDrawing {
  numberOfGuesses: number
}

const HEAD = <div className={s.head}></div>
const BODY = <div className={s.body}></div>
const LEFT_ARM = <div className={s.larm}></div>
const RIGHT_ARM = <div className={s.rarm}></div>
const LEFT_LEG = <div className={s.lleg}></div>
const RIGHT_LEG = <div className={s.rleg}></div>

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]


const HangmanDrawing = ({numberOfGuesses}: IHangmanDrawing) => {


  return (
    <div className={s.container}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className={s.stand4}></div>
        <div className={s.stand3}></div>
        <div className={s.stand2}></div>
        <div className={s.stand1}></div>
    </div>
  )
}

export default HangmanDrawing