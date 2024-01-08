import { Link } from "react-router-dom";

export const Item = ({id, size, foto, precio, stock}) => {
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid  #09daff',
                margin: '4rem',
                padding: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#3e8f13',
                height:'30rem'
            }}
        >
            <h3>{size}</h3>
            <img src={foto} width='90%' alt={size} style={{margin: '1rem'}}/>
            <h4>$ {precio}</h4>
            <Link to={`/item/${id}`}>
                <button style={{
                    margin: '1rem',
                    justifySelf:'center',
                    color:'#09daff',
                    backgroundColor: '#a15ce2d0',
                    fontWeight: '500',
                }}>Ver Más</button>
            </Link>

        </div>
        
    );

};
