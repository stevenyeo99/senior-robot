const Scroll = ({children}) => {

    return (
        <div style={{overflowY: 'scroll', height: '800px', border: '5px solid black'}}>
            { children }
        </div>
    );
}

export default Scroll;