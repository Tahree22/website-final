

function Contact() {
    return(
        <footer id="contact-sec">
            <h2>Get in touch</h2>
            <div className="footer-sec">
            <form className="contact-form" action="mailto:akinn.taa@gmail.com" method="post" encType="text/plain" style={{color:"white"}}>
                <div className="flex-contact contact-first">
                <input type="text" id="name" size="30" placeholder="Name" style={{color:"white"}}/>
                <input type="text" id="last-name" size="26" placeholder="Last name" style={{color:"white"}}/>
                </div>
                <div className="flex-contact contact-second">
                    <input type="email" id="email" size="30" placeholder="Email" style={{color:"white"}}/>
                    <div className="number-div"><input type="number" id="phone-number" class="number-input" max-length="11" placeholder="Phone number" style={{color:"white"}}/>
                    </div>
                </div>
                <div className="contact-message">
                    <textarea type="text" id="message" rows="5" cols="73" placeholder="Message" style={{color:"white"}}/>
                </div>
                <div className="footer-btn">
                <button className="submit">Submit now</button>
                </div>
            </form>
            </div>
            <p className="copyright">&copy; Copyright Tari Akinnukawe 2022 </p>
        </footer>
    )
}

export default Contact