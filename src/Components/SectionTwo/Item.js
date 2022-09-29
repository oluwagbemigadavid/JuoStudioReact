import '../../Styles/SectionTwo/Item.css'

const Item = ({item, bark}) => {
  return (
    <div className='item' onClick={() => bark(item.id)}>
        <img src={item.img} alt="" />
        <div className="attrs">
            <h4 >{item.name}</h4>
            <h4 style={{color: 'red'}}>{item.price}</h4>
        </div>
    </div>
  )
}

export default Item
