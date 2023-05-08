import About from "../Components/About";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <h1 className='title' style={{ textAlign: 'center' }}> Our Service</h1>
            <section className="book" style={{ backgroundImage: 'url(book.jpg)' }} >
                <div className='content'>

                    <div className='text'>
                        <span className="title font-bold">
                            literary service</span>

                        <p>
                            we offer content editing and translation services for translation services, you will send the text to our mailbox after we will send you an invoice and the translation time after payment and we will send you the translated document in time, 0.02$ min per word
                        </p>
                    </div>
                </div>

            </section>

            <Footer />

        </>
    )
}