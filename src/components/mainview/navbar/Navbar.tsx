import { Grid, IconButton } from '@/components/materialUiComponents/MaterialUiComponents';
import { LightModeOutlined, MoreVert } from '@/components/materialUiComponents/MaterialIcons';
import SearchField from '@/components/searchField/SearchField';

export default function Navbar({onSearch} : {
    onSearch: (searchvalue: string) => void
}) {
    return (
        <Grid container justifyContent='space-between'>
            <Grid item >
                <SearchField onSearch={onSearch}/>
            </Grid>
            <Grid item alignSelf="center">
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton>
                            <LightModeOutlined />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </Grid>
                </Grid>                
            </Grid>
        </Grid>
    );
}
