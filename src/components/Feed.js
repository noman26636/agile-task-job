import Post from "./Post"

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto' >
    {/*Secton */}
    <section className="col-span-2">

      {/*Posts */}

      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>

    </section>
                 
  
    </main>

  )}

export default Feed