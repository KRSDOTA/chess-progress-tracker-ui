import { useState } from 'react';
import _ from 'lodash'

export default function SearchBar({onSearch}) {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearch = _.debounce(onSearch, 300); // wait until user stops typing!

    const handleChange = (event) => {
        const newQuery = event.target.value;
        setSearchQuery(newQuery);
        debouncedSearch(newQuery);
      };


    return (
        <>
            <input
            type="text"
            placeholder="Username"
            value={searchQuery}
            onChange={handleChange}>
            </input>
        </>
    )

}