import {
        SearchOutlinedIcon, 
        PlaylistPlayOutlinedIcon,
        LiveTvOutlinedIcon,
        OndemandVideoOutlinedIcon,
        ListOutlinedIcon,
        SettingsOutlinedIcon,
        FavoriteBorderOutlinedIcon,
        UpdateOutlinedIcon,
        LogoutOutlinedIcon
} from '@/components/materialUiComponents/MaterialIcons';

export const mainMenuList = [
    {
        Icon: SearchOutlinedIcon,
        title: 'Discover'
    },
    {
        Icon: PlaylistPlayOutlinedIcon,
        title: 'Playlist'
    },
    {
        Icon: LiveTvOutlinedIcon,
        title: 'Movie'
    },
    {
        Icon: OndemandVideoOutlinedIcon,
        title: 'TV Shows'
    },
    {
        Icon: ListOutlinedIcon,
        title: 'My List'
    }
];

export const likeMenuList = [
    {
        Icon: UpdateOutlinedIcon,
        title: 'Watch Later'
    },
    {
        Icon: FavoriteBorderOutlinedIcon,
        title: 'Recomended'
    }
];

export const userMenuList = [
    {
        Icon: SettingsOutlinedIcon,
        title: 'Settings'
    },
    {
        Icon: LogoutOutlinedIcon,
        title: 'Logout'
    }
];

