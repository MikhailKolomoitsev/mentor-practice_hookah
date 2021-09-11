import s from './Hero.module.css';
import ProductList from '../../ProductList/ProductList';
const listProduct = [
  { id: 1, name: 'Darkside' },
  { id: 2, name: 'DUFT' },
  { id: 3, name: 'Tangiers special' },
  { id: 4, name: 'DUFT' },
];

export default function Hero() {
  return (
    <section className={s.section__hero}>
      <div>
        <h1>Приветствуем на HOOKAH PORTAL</h1>
        <ul>
          <li>
            <a href="">Здесь ты найдешь миксы на любой вкус</a>
            <p>Каталог табаков</p>
            <button>перейти</button>
          </li>
          <li>
            <a href="">Здесь ты найдешь миксы на любой вкус</a>
          </li>
        </ul>
      </div>
      <ProductList array={listProduct} />
    </section>
  );
}
