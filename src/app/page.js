import Image from 'next/image'
import Carousel from './models/Carousel'
import NavBar from './models/navBar'
import Footer from './models/footer'



export default function Home() {
  return (
    <>
    {/* Nav bar */}
      <NavBar />   
    {/* Nav Bar End */}
    {/* Main Section Start*/}
    <main className="">
      {/* Hero Section Start */}
      <div className=" bg-white sm:pt-[120px] pt-[30px] sm:pb-[110px] lg:pt-[150px]">
        <div className="container mx-auto ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                  <p className=""> Bajampa</p>
                  <p className="text-center"> Junte-se à Nós</p>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                </p>
                
              </div>
              {/* <App /> */}
               <div
                className="hidden opacity-25 fixed inset-0 z-40 bg-black"
                id="modal-id-backdrop"
              />
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12" />
            <div className="w-full px-4 lg:w-6/12">          
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width={93}
                    height={93}
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="invisible md:visible "
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#F97316" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#F97316" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#F97316" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#F97316" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#F97316" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#F97316" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#F97316" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#F97316" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#F97316" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#F97316" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#F97316" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#F97316" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#F97316" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#F97316" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#F97316" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#F97316" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#F97316" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#F97316" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#F97316" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#F97316" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#F97316" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#F97316" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#F97316" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#F97316" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#F97316" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
      <Carousel/>
    </main>
    {/* Main Section End */}
    {/* Footer Section Start */}
    <Footer/>
    {/* Footer Section End */}
  </>
  )
}
