function ProductItem({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.info}</p>
      <p>{product.price.toLocaleString()}원</p>
    </div>
  );
}

export default ProductItem;