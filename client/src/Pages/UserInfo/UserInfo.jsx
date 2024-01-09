import React from 'react';
import './userInfo.scss';
import { useState } from 'react';
import { useEffect } from 'react';
{/* 

                    name
                    email
                    phone No 1, phone No2
                    address 1, address 2
                    Land Mark, city
                    country, state,
                                    
                */}

const UserInfo = () => {

    const [isUpdate, setIsUpdate] = useState(false);

    const [name, setName] = useState('Arbaz');
    const [email, setEmail] = useState('arbaz@mgail.com');
    const [phoneNo1, setPhoneNo1] = useState('9058714187');
    const [phoneNo2, setPhoneNo2] = useState('7906427187');
    const [address, setAddress] = useState('bazar Mufti Nawabpura');
    const [address2, setAddress2] = useState('Near Super Medical');
    const [landMark, setLandMark] = useState('Roshal Ali Masjid');
    const [city, setCity] = useState('Moradabad');
    const [state, setState] = useState('Utter Pradesh');
    const [country, setCountry] = useState('India');

    const onChangeHandler = (e, field) => {
        const value = e.target.value;
        switch (field) {

            case 'name':
                setName(value);
                break;

            case 'email':
                setEmail(value);
                break;

            case 'phoneNo1':
                setPhoneNo1(value);
                break;

            case 'phoneNo2':
                setPhoneNo2(value);
                break;

            case 'address':
                setAddress(value);
                break;

            case 'address2':
                setAddress2(value);
                break;

            case 'landMark':
                setLandMark(value);
                break;

            case 'city':
                setCity(value);
                break;

            case 'country':
                setCountry(value);
                break;

            case 'state':
                setState(value);
                break;

            default:
                break;
        }
    };

    useEffect(() => {
    }, [isUpdate]);

    return (
        <div>
            <div className="userInfo">
                <div className="heading">
                    <p>User Information</p>
                </div>
                <div className="userPhoto">
                    <img src="userIcon.png" alt="photo" />
                </div>

                <div className='userDetails'>
                    <div>
                        <p>Name</p>
                        <input type="text" value={name} onChange={(e) => onChangeHandler(e, 'name')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="text" value={email} onChange={(e) => onChangeHandler(e, 'email')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Phone no.</p>
                        <input type="text" value={phoneNo1} onChange={(e) => onChangeHandler(e, 'phoneNo1')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Alternative Phone no.</p>
                        <input type="text" value={phoneNo2} onChange={(e) => onChangeHandler(e, 'phoneNo2')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Address</p>
                        <input type="text" value={address} onChange={(e) => onChangeHandler(e, 'address')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Address 2</p>
                        <input type="text" value={address2} onChange={(e) => onChangeHandler(e, 'address2')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Land Mark</p>
                        <input type="text" value={landMark} onChange={(e) => onChangeHandler(e, 'landMark')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>City</p>
                        <input type="text" value={city} onChange={(e) => onChangeHandler(e, 'city')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>

                    <div>
                        <p>State</p>
                        <input type="text" value={state} onChange={(e) => onChangeHandler(e, 'state')} style={{ pointerEvents: isUpdate ? "fill" : "none" }} />
                    </div>
                    <div>
                        <p>Country</p>
                        <input type="text" value={country} onChange={(e) => onChangeHandler(e, 'country')} style={{ pointerEvents: `${isUpdate ? "fill" : "none"}` }} />
                    </div>


                    <button onClick={() => setIsUpdate((pre) => !pre)}>{isUpdate ? "Submit" : "Update"}</button>

                </div>



            </div>


        </div>
    );
};

export default UserInfo;