

const Header = ({name, handleLogout,admin}) => {
  return (
    <div className='flex justify-between items-center' >
        <h1 className='text-2xl font-medium'>Hello, <br/> <span className='text-3xl font-semibold'>{name} 👋 </span></h1>
        {!admin && <button className='bg-red-600 px-5 py-3 rounded-lg text-white text-lg font-medium' onClick={()=>handleLogout()}>Logout</button>}
    </div>
  )
}

export default Header