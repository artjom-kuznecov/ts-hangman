
import s from './styles/ReloadBtn.module.css'

interface IReloadBtnProps {
    setReload: (reload: boolean) => void
    reload: boolean
}

const ReloadBtn = ({setReload, reload}: IReloadBtnProps) => {
  return (
    <button 
        className={s.btn}
        onClick={ () => {setReload(!reload)} }
    >
        Reload
    </button>
  )
}

export default ReloadBtn