import styles from './page.module.css';

export default function ProductDetailsPage() {
    const product = {
        id: 1,
        title: 'Essence Mascara Lash Princess',
        description: 'A popular mascara for volumizing and lengthening lashes.',
        price: 9.99,
        category: 'beauty',
        thumbnail: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{product.title}</h1>
            <img className={styles.image} src={product.thumbnail} alt={product.title} />
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>Price: ${product.price}</p>
        </div>
    );
}
