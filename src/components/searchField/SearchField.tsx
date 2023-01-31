import { useState, useMemo } from 'react';
import { debounce } from 'lodash';
import { Collapse, TextField } from '@/components/materialUiComponents/MaterialUiComponents';
import { SearchOutlinedIcon, CloseIcon } from '@/components/materialUiComponents/MaterialIcons';
import styles from './SearchField.module.css';

/**
 *
 * Custom Styling Search Field.  
 * @param onSearch callback on search 
 *
 **/
export default function SearchField({onSearch} : {
    onSearch: (searchValue: string) => void
}) {

    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    /**
     * Used debounce to let user type the whole search query
     */
    const debounceFn = useMemo(() => debounce(onSearch, 500), [onSearch]);

    /**
     * It opens the search field
     */
    const handleSearchClick = () => {
        setShow(true);
    }

    /**
     * On Close of Search field
     */
    const onClose = () => {
        debounceFn('');
        setSearchValue('');
        setShow(false);
    }

    /**
     * Triggers onChange of search field
     * @param event onChange event of search
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        debounceFn(event.target.value);
    }

    return (
        <Collapse in={show} orientation="horizontal" collapsedSize={35}>
            <TextField
                id="search_field"
                InputProps={{
                startAdornment: (
                    <SearchOutlinedIcon onClick={handleSearchClick} className={styles.searchIcon} />
                    ),
                endAdornment: (
                    <CloseIcon onClick={onClose} className={styles.closeIcon}/>
                    ),
                classes: {root: styles.textField}
                }}
                fullWidth
                placeholder='Title, Movies, Keyword'
                className={`${styles.searchField}  ${show && styles.searchActive}`}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                value={searchValue}
                
            />
        </Collapse>
    );
}
