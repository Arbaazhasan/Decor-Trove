import React from 'react';
import './newArrivalsController.scss';

const NewArrivalsController = () => {
  return (
    <div>
      <div className="ArrivalController">

        <div className="selectArrival">

          <select name="" id="">
            <option value="">Home Decore</option>
            <option value="">Textlies & rugs</option>
            <option value="">Art & prints</option>
            <option value="">Curtains & blinds</option>
            <option value="">Plant Decor</option>
          </select>

        </div>


        <div className="arrivalName">
          <form action="">
            <p>Update Tag Line</p>
            <input type="text" placeholder='Enter the text' />
            <button>Update</button>
          </form>
        </div>


        <div className="arrivalProducts">
          <form action="">



            <div>
              <p>Item 1</p>
              <input type="text" placeholder='Enter the product No:' />
              <button>Upload</button>

            </div>




            <div>
              <p>Item 2</p>
              <input type="text" placeholder='Enter the product No:' />
              <button>Upload</button>

            </div>




            <div>
              <p>Item 3</p>
              <input type="text" placeholder='Enter the product No:' />
              <button>Upload</button>

            </div>




            <div>
              <p>Item 4</p>
              <input type="text" placeholder='Enter the product No:' />
              <button>Upload</button>

            </div>




            <div>
              <p>Item 5</p>
              <input type="text" placeholder='Enter the product No:' />
              <button>Upload</button>

            </div>




            <div>
              <p>Item 6</p>
              <input type="text" placeholder='Enter the product No:' />
              <button>Upload</button>

            </div>




            <div>
              <p>Item 7</p>
              <input type="text" placeholder='Enter the product No:' />
              <button>Upload</button>

            </div>




            <div>
              <p>Item 8</p>
              <input type="text" placeholder='Enter the product No:' />
              <button>Upload</button>

            </div>




          </form>


        </div>
      </div>
    </div>
  );
};

export default NewArrivalsController;