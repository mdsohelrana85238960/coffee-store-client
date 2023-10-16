import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;

   
    
    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);

        fetch(`https://coffee-store-server-fxx5ozo4t-my-team-88e02784.vercel.app/coffee/${_id}`,{
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        

        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount>0) {
                Swal.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'Coffee updated success !',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        })
    }


    return (
       
              <div className="bg-gray-300 p-24">
           <h1 className="text-3xl font-bold">Update a Coffee : {name} </h1> 
           <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex gap-8">
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
  </label>
</div>
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name="quantity"  defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
  </label>
</div>
        </div>

        <div className="md:flex gap-8">
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name="supplier"  defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
  </label>
</div>
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name="taste" placeholder="Available Quantity" className="input input-bordered w-full" />
  </label>
</div>
        </div>

        <div className="md:flex gap-8">
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
  </label>
</div>
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text"> Details</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
  </label>
</div>
        </div>

        <div >
        <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <label className="input-group">
    {/* <span>Name</span> */}
    <input type="text" name="photo" placeholder="Photo url" defaultValue={photo} className="input input-bordered w-full" />
  </label>
</div>
        
        </div>
       
<input type="submit" value= "Update Coffee"  className="btn btn-block mt-8" />

           </form>
        </div>
       
    );
};

export default UpdateCoffee;