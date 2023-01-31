import styles from './UserAvatar.module.css';
import { Grid, Avatar, Typography, Divider } from '@/components/materialUiComponents/MaterialUiComponents';
import { User } from '@/types/user';
import useDeviceSize from '@/types/useDeviceSize';

export default function UserAvatar({user}: {
    user: User
}) {
    const [width] = useDeviceSize();

    return (
        <Grid>
            <Avatar src={user.Avatar} className={styles.userAvatar}/>
            <Typography className={styles.userName}>{user.Name}</Typography>
            {
                width > 768 && (
                    <Divider />       
                )
            }
        </Grid>
    )
}
