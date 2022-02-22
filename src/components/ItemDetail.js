import ItemCount from './ItemCount/ItemCount';

const ItemDetail = ({id, size, foto, info, precio}) => {
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #7630E6',
                margin: '40px',
            }}
        >
            <h1>{size}</h1>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
            }}> 
                <img src={foto} width='200px' alt={size}/>
                <div>
                    <p>{info}</p>
                    <h2>{precio}</h2>
                </div>
            </div>
            <ItemCount stock={20} initial={0}/>
        </div>
    );


};
export default ItemDetail;