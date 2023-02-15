import s from './style.module.css';

const RenderProducts = ({ product, title }) => {
    return (
        <>
            {product.map(list => (
                <div className={s.card} key={list.id}>
                    <img src={list.thumbnail} alt={title} />
                    <h3>{list.title}</h3>
                    <p>{list.description}</p>
                    <p>USD {list.price}</p>
                </div>
            ))}
        </>
    )
}

export default RenderProducts