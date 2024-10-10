import { products } from '../../data/data'
import { Card } from '../Card/Card'
import s from './Catalog.module.css'
import item from '/item.png'

export function Catalog() {
    return (
        <section>
            <div className={s.container}>

                <div className={s.catalog__block}>
                    <div className={s.title}>
                        <h2>Каталог товаров</h2>
                    </div>

                    <div className={s.category}>
                        <p>Категории:</p>

                        <div className={s.btns}>
                            <button className={s.active}>Все товары</button>
                            <button>Шины/колеса</button>
                            <button>Масла</button>
                            <button>Ароматизаторы</button>
                        </div>
                    </div>

                    <div className={s.items}>

                        {
                            products.map((product)=>{
                                return(
                                <Card id={product.id} image={product.img} name={product.name} desc={product.desc} price={product.price}/>
                                )
                            })
                        }
                    </div>

                    <div className={s.add__more}>
                        <button>Загрузить еще товары</button>
                    </div>
                </div>
            </div>


        </section>
    )
}