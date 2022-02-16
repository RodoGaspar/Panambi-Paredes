import Item from "./Item";

const ItemList = ({prods}) => {
    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alingnItems: 'center',
            }}
        >
            {prods.map((producto)=> (
                <Item {... producto} key={prods.id}/>
            ))}
        </div>
    );
};

export default ItemList;