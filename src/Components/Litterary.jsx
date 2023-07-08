
import book from '../assets/book.jpg'
const Litterary = () => {
    return (

        <section className="books p-[1.5rem] sm:p-[4rem] md:flex m-auto ">



            <div className=' flex flex-wrap gap-7' >

                <img src={book} />
            </div>


            <div className=' md:mr-16 ' >

                <div className='w-full'>
                    <div >
                        <p className='sm:text-[18px] text-[14px] text-[#27589e] font-semibold uppercase tracking-wider'>About Us</p>
                        <h2 className='text-[#000000] font-black md:text-[40px] sm:text-[50px] xs:text-[40px] text-[30px]'>We follow you.</h2>
                    </div>

                    <p className='mt-3 text-part text-justify text-[#0e0e29] font-light max-w-[30rem] leading-[30px]'>
                        We are skilled software developers with experience in
                        programing languages like Python, Java, C++, C#
                        JavaScript and expertise in frameworks like React, Node.js,
                        Django.... We deliver quick sevices and collaborate closely with
                        clients to create efficient, scalable, and user-friendly
                        solutions that solve real-world problems.
                    </p>
                </div>
                <button className='herobutton btn mt-8 '>
                    view the team
                </button>
            </div>

        </section >

    )
}

export default Litterary