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
            {prods.map((producto) => (
                <Item {...producto} key={producto.id} foto={producto.foto}/>
                
            ))}
        </div>
    );
};

export default ItemList;