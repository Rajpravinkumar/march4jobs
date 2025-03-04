const Home = () => {
  return (
    <div className='mx-auto mt-20 p-4 border rounded max-w-xs'>
            <h2 className='mb-4 text-xl'>Home</h2>
            <p>Welcome to the home page</p>
            <ul className='pl-5 list-disc'>
                <li>Click on the links above to register or login</li>
                <li>After logging in, you will be redirected to the dashboard</li>
                <li>You can then search for jobs and apply for them</li>
            </ul>
      </div>
  )
}

export default Home