const SearchBox = ({searchValue, searchHandler}) => {
    console.log('SearchBox');
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='search robots'
                value={searchValue}
                onChange={searchHandler} 
            />
        </div>
    );
};

export default SearchBox;