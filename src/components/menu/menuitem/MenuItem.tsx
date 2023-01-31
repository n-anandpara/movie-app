import { Button } from '@/components/materialUiComponents/MaterialUiComponents';
import styles from './MenuItem.module.css';


export default function MenuItem({Icon, title, isActive, onMenuClick}: {
    Icon: React.FC,
    title: string,
    isActive: boolean,
    onMenuClick: (a: string) => void
}) {
    return (
        <Button
            className={`${styles.menuItem} ${isActive && styles.activeButton}`}
            onClick={() => onMenuClick(title)}
            variant="text"
        >
            <span className={styles.icon}><Icon /></span>
            <span className={styles.title}>{title}</span>
        </Button>
    )
}
