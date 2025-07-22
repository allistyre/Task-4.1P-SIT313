import './css/NewsletterSignup.css'

function NewsletterSignup() {
    return (
        <div className="newsletter-container">
            <h1 className="newsletter-heading">SIGN UP FOR OUR DAILY INSIDER</h1>
            <hr/>
            <p className="newsletter-subtitle">Enter your email in the box below to receive the latest daily insiders!</p>
            <form action="/subscribe" method="POST">
                <label>
                    <input type="email" placeholder="Enter your email" name="email" required/>
                </label>
                <button className="newsletter-button" type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterSignup;