import { useCart, type CartLine } from "../../../cart";
import { formatPrice } from "../../../lib/money";
import { QuantityStepper } from "../QuantityStepper";
import styles from "./CartItem.module.css";

type CartItemProps = {
    line: CartLine;
};

export function CartItem({ line }: CartItemProps) {
    const { increment, decrement, removeItem } = useCart();
    const { product, size, color, quantity, lineId } = line;

    const meta = [size && `Taglia ${size}`, color].filter(Boolean).join(" · ");

    return (
        <article className={styles.item}>
            <div className={styles.thumb}>
                <img src={product.image} alt={product.name} />
            </div>

            <div className={styles.body}>
                <div className={styles.top}>
                    <h3 className={styles.name}>{product.name}</h3>
                    <button
                        type="button"
                        className={styles.remove}
                        onClick={() => removeItem(lineId)}
                        aria-label={`Rimuovi ${product.name} dal carrello`}
                    >
                        <span aria-hidden="true">✕</span>
                    </button>
                </div>

                {meta && <p className={styles.meta}>{meta}</p>}

                <div className={styles.bottom}>
                    <QuantityStepper
                        quantity={quantity}
                        onIncrement={() => increment(lineId)}
                        onDecrement={() => decrement(lineId)}
                        label={product.name}
                    />
                    <span className={styles.price}>
                        {formatPrice(product.price * quantity)}
                    </span>
                </div>
            </div>
        </article>
    );
}
