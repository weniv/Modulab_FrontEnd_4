{/* <ContCard>
  <ProductImage src={'https://picsum.photos/id/237/200/300'} alt={'검은강아지'} />
  <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
  <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
  <ProductDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio sed molestias saepe reiciendis fugit illum enim et inventore, aliquam esse non nam consectetur minima atque consequuntur voluptates, eum quia.</ProductDescription>
  <ProductPrice />
</ContCard> */}

const ContCard = ({ children }) => {
    return (
        <>
            {children}
            <ProductPrice price={1000} currencyCode="KRW" />
            <ProductPrice price={1000} currencyCode="USD" />
        </>
    );
}


const ProductImage = ({ src, alt }) => {
    return <img src={src} alt={alt} />
}

const ProductTitle = ({ children }) => {
    return (
        <h1>{children}</h1>
    );
}

const ProductPrice = ({ price, currencyCode }) => {

    const currencyConfig = {
        KRW: { locale: 'ko-KR', currency: 'KRW', symbol: '₩' },
        USD: { locale: 'en-US', currency: 'USD', symbol: '$' },
    }

    const formatPrice = (price, currencyCode) => {
        return new Intl.NumberFormat(
            currencyConfig[currencyCode].locale,
            {
                style: 'currency',
                currency: currencyCode,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }
        ).format(price);
    }

    return (
        <data value={price}>
            {formatPrice(price, currencyCode)}
        </data>
    )
}


export { ContCard, ProductImage, ProductTitle };