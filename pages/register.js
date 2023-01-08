import Head from 'next/head'
import Link from 'next/link'

export default function Register() {
  return (
    <>
      <Head>
        <title>Paradox - Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="flex">
          <div className="hidden lg:flex lg:flex-auto lg:justify-center lg:items-center w-20 lg:bg-cyan-500">
            <img src="/unindra-logo.png" className="w-96 h-96" alt="Gambar"/>
          </div>
          <div className="flex lg:flex-auto justify-center items-center h-screen w-full lg:w-80">
            <form className="flex justify-center items-center flex-col lg:w-full">
              <img src="/unindra-logo.png" className="w-16 lg:hidden" alt="Gambar"/>
              <h1 className="mt-5 mb-10 text-2xl lg:text-3xl">Register</h1>
              <input className="mb-4 border-2 px-4 py-2 lg:w-96 rounded-md" type="text" placeholder="Username"/>
              <input className="mt-4 border-2 px-4 py-2 lg:w-96 rounded-md" type="password" placeholder="Password"/>
              <button className="border-2 mt-8 bg-cyan-200 px-10 py-2 rounded-md" type="submit">Submit</button>
              <Link href="/" className="mt-8 text-sm lg:text-lg"> I Have a Account </Link>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}