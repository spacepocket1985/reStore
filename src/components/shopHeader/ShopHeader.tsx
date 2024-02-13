import './ShopHeader.css';

type ShopHeaderPropsType = {
  numItems: number;
  total: number;
};

const ShopHeader = (props: ShopHeaderPropsType) => {
  const { numItems, total } = props;
  return (
    <header className="shop-header row">
      <a className="logo text-dark" href="#">
        ReStore
      </a>
      <a className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default ShopHeader;
