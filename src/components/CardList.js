import Card from "./Card";

const CardList = (props) => {

    const { items } = props;

    return (
       <div>
        { 
            items.map((item, i) => {
                return <Card key={i} id={item.id} name={item.name} email={item.email} /> 
            })
        }
       </div> 
    );
};

export default CardList;