import {ItemCount} from './ItemCount/ItemCount';

export const ItemDetail = ({props}) => {
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid #7630E6',
                margin: '40px',
            }}
        >
            <h1>{props.size}</h1>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
            }}> 
                <img src={props.foto} width='200px' alt={props.size}/>
                <div>
                    <p>{props.info}</p>
                    <h2>{props.precio}</h2>
                </div>
            </div>
            <ItemCount stock={20} initial={0}/>
        </div>
    );


};