import { useEffect, useMemo, useState } from 'react';
import _ from 'lodash'

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
            <input
            type="text"
            placeholder="Username"
            onChange={debouncedSearchResults}>
            </input>
        </>
    );

}