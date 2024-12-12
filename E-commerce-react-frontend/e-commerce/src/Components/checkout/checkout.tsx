

// import '../../assets/checkout.css'
// import { useEffect, useState } from 'react';
// import axios from 'axios'
// import { Link} from 'react-router-dom';
// import Footer from '../footer/Footer';
// import { useLocation } from 'react-router-dom';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface Address {
//   user: number;
//   door_no: string;
//   street: string;
//   city: string;
//   state: string;
//   pincode: string;
//   phone_number: string;
// }

// const Checkout = () => {
//   const location = useLocation();
//     const productId = location.state.productId;
//   // const {productId} = useParams()
//   console.log(productId)
//   // getting the data . this is working.
//   const [data, setData] = useState<any | null>(null);
//   // const [selectedAddresses, setSelectedAddresses] = useState<number[]>([]);
//   const [userId, setUserId] = useState('');

//   useEffect(() => {
//     AsyncStorage.getItem('userId')
//       .then(userId => {
//         if (userId) {
//           setUserId(userId);
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/user/view_saved_addresses/1');
//         setData(response.data);
//         // console.log(response.data)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

//   const handleAddressSelect = (address: Address) => {
//     setSelectedAddress(address);
//     // console.log(selectedAddress)
//   };

//   // useEffect(() => {
//   //   console.log(selectedAddress); // Log selectedAddress after it's updated
//   // }, [selectedAddress]); // Run this effect whenever selectedAddress changes


//   const [newAddress, setNewAddress] = useState<Address>({
//     user: 1,
//     door_no: '',
//     street: '',
//     city: '',
//     state: '',
//     pincode: '',
//     phone_number: '',
//   });

//   const handleNewAddressSubmit = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/user/add_new_address/', newAddress);
//       console.log('New address added successfully:', response.data);
//     } catch (error) {
//       console.error('Error adding new address:', error);
//     }
//   };


//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>

//       <header className="header">
//         <div className="header__container">
//           <img className="header__logo" src="/image.png" alt="Byte Mart Logo" />

//         </div>
//       </header>

//       <div className='checkout-container'>
//         <div className='address-details'>
//           <div>
//             <Link to="/confirmation" state={{productId: productId,selectedAddress: selectedAddress}}>
//             <button className='next-button'>Confirm</button>
//             </Link>
//           </div>
//           <h3 className='address-heading'>Select Delivery Address</h3>

//           <div className='address'>
//             {data && data.map((address: Address, index: number) => (
//               <div key={index} className='address-card'>
//                 <label>
//                   {/* <input
//                   type="checkbox"
//                   checked={selectedAddresses.includes(index)}
//                   onChange={() => handleAddressSelect(index)}
//                   /> */}
//                   <input
//                     type="radio" // change "checkbox" to "radio"
//                     checked={selectedAddress === address}
//                     onChange={() => handleAddressSelect(address)}
//                   />
//                 </label>
//                 {/* Render address information here */}
//                 <div className='customer-address-details'>
//                   <p className='name'>Uday Darade</p>
//                   <p>{address.door_no}, {address.street}, </p>
//                   <p>{address.city},{address.state}</p>
//                   <p>{address.pincode}</p>
//                   <p>Phone: 9999999999</p>
//                 </div>
//               </div>
//             ))}
//           </div>


//         </div>
//         <div className='new-address'>
//           <h3 className='new-address-heading'>New Address</h3>
//           <form>
//             <label className='addressdetailstext'>House no., Bldg name</label>
//             <input
//             id='door_no'
//               type="text"
//               value={newAddress.door_no}
//               onChange={(e) => setNewAddress({ ...newAddress, door_no: e.target.value })} 
//               />
//               <label className='addressdetailstext'>Street name, Area</label>
//             <input
//               type="text"
//               value={newAddress.street}
//               onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })} />
//             <label className='addressdetailstext'>City</label>
//             <input
//               type="text"
//               // placeholder="City"
//               value={newAddress.city}
//               onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
//             />
//             <label className='addressdetailstext'>State</label>
//             <input
//               type="text"
//               // placeholder="State"
//               value={newAddress.state}
//               onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })} />
//             <label className='addressdetailstext'>Pincode</label>
//             <input
//               type="number"
//               // placeholder="Pincode"
//               value={newAddress.pincode}
//               onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />
//             <label className='addressdetailstext'>Phone number</label>
//             <input
//               type="tel"
//               placeholder="+91 |"
//               value={newAddress.phone_number}
//               onChange={(e) => setNewAddress({ ...newAddress, phone_number: e.target.value })} />
//             <button className='add-button' onClick={handleNewAddressSubmit} > Add New Address</button>
//           </form>
//         </div>

//       </div>
//       <Footer></Footer>
//     </>
//   );
// };

// export default Checkout;
import '../../assets/checkout.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';

// Removed AsyncStorage import

interface Address {
  user: number;
  door_no: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone_number: string;
}

const Checkout = () => {
  const location = useLocation();
  const productId = location.state?.productId; // Added optional chaining for safety
  console.log(productId);

  const [data, setData] = useState<Address[] | null>(null); // Refined type to Address[] | null
  const [userId, setUserId] = useState<string>('');
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  // Removed AsyncStorage logic since it was unused in practice

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user/view_saved_addresses/1');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
  };

  const [newAddress, setNewAddress] = useState<Address>({
    user: 1, // Default user ID, should ideally come dynamically
    door_no: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone_number: '',
  });

  const handleNewAddressSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission default behavior
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/add_new_address/', newAddress);
      console.log('New address added successfully:', response.data);
    } catch (error) {
      console.error('Error adding new address:', error);
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="header__logo" src="/image.png" alt="Byte Mart Logo" />
        </div>
      </header>

      <div className="checkout-container">
        <div className="address-details">
          <div>
            <Link to="/confirmation" state={{ productId, selectedAddress }}>
              <button className="next-button">Confirm</button>
            </Link>
          </div>
          <h3 className="address-heading">Select Delivery Address</h3>

          <div className="address">
            {data.map((address, index) => (
              <div key={index} className="address-card">
                <label>
                  <input
                    type="radio"
                    checked={selectedAddress === address}
                    onChange={() => handleAddressSelect(address)}
                  />
                </label>
                <div className="customer-address-details">
                  <p className="name">Uday Darade</p>
                  <p>{address.door_no}, {address.street}, </p>
                  <p>{address.city}, {address.state}</p>
                  <p>{address.pincode}</p>
                  <p>Phone: 9999999999</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="new-address">
          <h3 className="new-address-heading">New Address</h3>
          <form onSubmit={handleNewAddressSubmit}>
            <label className="addressdetailstext">House no., Bldg name</label>
            <input
              id="door_no"
              type="text"
              value={newAddress.door_no}
              onChange={(e) => setNewAddress({ ...newAddress, door_no: e.target.value })}
            />
            <label className="addressdetailstext">Street name, Area</label>
            <input
              type="text"
              value={newAddress.street}
              onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
            />
            <label className="addressdetailstext">City</label>
            <input
              type="text"
              value={newAddress.city}
              onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
            />
            <label className="addressdetailstext">State</label>
            <input
              type="text"
              value={newAddress.state}
              onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
            />
            <label className="addressdetailstext">Pincode</label>
            <input
              type="number"
              value={newAddress.pincode}
              onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
            />
            <label className="addressdetailstext">Phone number</label>
            <input
              type="tel"
              placeholder="+91 |"
              value={newAddress.phone_number}
              onChange={(e) => setNewAddress({ ...newAddress, phone_number: e.target.value })}
            />
            <button className="add-button" type="submit">Add New Address</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
