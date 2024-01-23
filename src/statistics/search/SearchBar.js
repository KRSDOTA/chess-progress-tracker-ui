import { useEffect, useMemo } from 'react';
import _ from 'lodash'
import { TextField } from '@mui/material';

export default function SearchBar({onSearchHandler}) {

    const debouncedSearchResults = useMemo(() => {
        return _.debounce(onSearchHandler, 1000); // wait until user stops typing!
    }, []);

    useEffect(() => {
        return () => {
            debouncedSearchResults.cancel();
        }
    });

    return (
        <>
            <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            label="username"
            variant="outlined"
            onChange={debouncedSearchResults}
            />
        </>
    );

}