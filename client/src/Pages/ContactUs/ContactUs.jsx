import React from 'react';
import "./contactUs.scss";

const ContactUs = () => {
    return (
        <div>
            <div className="contactUsWindow">

                <div className="left">
                    <p>Decor<span>Trove</span></p>
                </div>

                <div className="right">

                    <h3>CONTACTS</h3>

                    <div className="contactDetails">
                        <p><span>ADDRESS : </span>
                            Bazar Mufti, Nawabpura, Moradabad - 244001, Utter Pradesh, India </p>
                        <p><span>Phone : </span> +91 9058714187, +91 7906427187</p>
                        <p><span>Email : </span>arbaazhasan.ah@gmail.com</p>

                    </div>

                    <form action="">
                        <div>
                            <div>
                                <div><label htmlFor="">Name <span>*</span></label></div>
                                <input type="text" placeholder='Your Name' />
                            </div>

                            <div>
                                <div><label htmlFor="">Email <span>*</span></label></div>
                                <input type="text" placeholder='Your Email' />
                            </div>

                        </div>
                        <div>
                            <div>
                                <label htmlFor="">Comment<span>*</span></label>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        </div>

                        <button>SEND MESSAGE</button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default ContactUs;