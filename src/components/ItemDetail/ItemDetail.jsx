import '../../styles/style.scss'
import { Link } from 'react-router-dom'
import Rating from '../Widgets/Rating'
import Loader from '../Widgets/Loader'
import { useContext } from 'react'
import ItemCounter from '../smallComponents/ItemCounter'
import { contexto } from '../Context/ContextComponent'

function ItemDetail({ producto }) {

  const {  onAddProduct } = useContext(contexto);
  


  
  return (
    !producto
    ? <Loader />
    : (
      
        <article key={producto.id} className='cardDetail min-h-[40rem] lg:min-h-[30rem] w-3/4 lg:w-2/4 shadow-lg p-4 flex flex-col lg:flex-row mb-5'>
          <figure className='cardDetail__img h-2/6 lg:h-full lg:w-1/4 self-center'>
            <img src={producto.image} alt={producto.title} className='cardDetail__image h-full w-full object-scale-down' />
          </figure>

          <div className='cardDetail__text flex flex-col h-3/6 w-full lg:h-full lg:w-3/4 p-2 items-center'>
            <h3 className='cardDetail__text__title pt-2 text-center font-bold md:text-xl'>{producto.title}</h3>
            <Rating
              rate={producto.rating}
            />
            <p className='cardDetail__text__price text-start pt-2 lg:text-2xl'>{`${producto.price.toLocaleString("es-AR",{style:"currency", currency:"ARS"})}`}</p>
            <p className='cardDetail__text__description p-4 text-sm'>{`${producto.description}`}</p>
          </div>

          
          <div className='cardDetail__btns lg:h-[30rem] self-center w-full lg:w-1/4 lg:w-1/4 flex lg:flex-col justify-center gap-6 rounded-lg p-2'>

            <div className='cardDetail__btns__cantidad w-2/4 lg:w-full flex flex-col lg:flex-col justify-between lg:gap-2 items-center p-2'>
              <label htmlFor="" className='text-md'>Cantidad</label>
              <ItemCounter />
              <p className='text-gray-400 text-xs'>{`Stock: ${producto.stock}`}</p>
            </div>
            <div className='cardDetail__btns__container w-2/4 lg:w-full flex flex-col items-end justify-around lg:gap-4 '>
              <button onClick={() => onAddProduct(producto)} className='cardDetail__btns__agregarCarrito text-sm w-3/4 lg:w-full text-xs lg:text-base h-8 lg:h-12 px-1 py-0.5 rounded '>Agregar <span className='hidden xl:inline'>al Carrito</span></button>
              <Link to={`/category/${producto.category}`} className='cardDetail__btns__volver text-sm rounded text-sm lg:text-md h-8 lg:h-12 px-5 py-0.5 w-3/4 lg:w-full flex justify-center items-center'>Volver</Link>
            </div>

          </div>


        </article>
    )
  )

}

export default ItemDetail