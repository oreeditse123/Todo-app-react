import CompletedButtonComponent from './inner-components/CompletedButtonComponent'
import RemoveButtonComponent from './inner-components/RemoveButtonComponent'
import TextAreaComponent from './inner-components/TextAreaComponent'
import styles from './styles.module.css'

export default function TaskComponent() {
    return <div className={styles.task}>
        <TextAreaComponent />
        <div className={styles.btn}>
            <CompletedButtonComponent />
            <RemoveButtonComponent />
        </div>
    </div>
}