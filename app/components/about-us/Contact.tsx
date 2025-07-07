 
const Contact = () => {

    return (
        <div className="flex flex-col gap-6 px-8">
            <h2 className="h2">Contact Us</h2>
            <div className="flex gap-8 px-8 w-full h-[550px] pb-4">
                <form className="flex-1 text-[1.5rem] bg-primary text-secondary p-4 flex flex-col rounded-lg gap-8">
                    <div className="flex flex-col h-full">
                        <div className="flex flex-col gap-3 flex-1">
                            <label>Email</label>
                            <input className="bg-secondary text-primary rounded-lg pl-4 py-1 h-[40%]"/>
                        </div>
                        
                        <div className="flex flex-col gap-3 flex-2 mb-2">
                            <label>Message</label>
                            <textarea className="bg-secondary text-primary rounded-lg pl-4 py-1 h-full"></textarea>
                        </div>
                    </div>
                    
                    <button className="mt-auto w-32 bg-tertiary ml-auto font-[600] text-primary rounded-lg py-2 px-4 hover:bg-white cursor-pointer transition duration-200">Send</button>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.27119260491!2d55.332911132263185!3d25.26146111212624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdd84c53671%3A0xfbf555f515405c45!2sAl%20Khabaisi%20Park%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1745484362613!5m2!1sen!2s" 
                className="flex-1" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        
        </div>
        
    )
}

export default Contact