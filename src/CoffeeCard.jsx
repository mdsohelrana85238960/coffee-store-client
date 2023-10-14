import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,coffees,setCoffees}) => {
  const {_id,name,quantity,supplier,taste,category,details,photo} = coffee;

  const handleDelete = _id =>{
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       
       
        fetch( `http://localhost:5000/coffee/${_id}`,{
          method:'DELETE',

        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
             Swal.fire(
          'Deleted!',
          'Your coffee has been deleted.',
          'success'
        )
        const remaining = coffees.filter(coffee => coffee._id !== _id)
        setCoffees(remaining)
          }
        })
      }
    })
  }
    
    return (
        <div className="card card-side bg-gray-300 shadow-xl">
  <figure><img className="w-80" src= {photo} alt="Movie"/></figure>
  <div className="flex  justify-center items-center" >
    <div className="p-8">
    <h2 className=""> <span className="font-bold">Name :</span> {name}</h2>
    <p className="py-4"><span className="font-bold">Chef :</span> {supplier}</p>
    <p className=""><span className="font-bold">Price :</span>{quantity}</p>
    </div>
    <div className="btn-group btn-group-vertical space-y-3">
  <button className="btn btn-sm">View</button>
  <Link to={`/updateCoffee/${_id}`}>
  <button className="btn btn-sm">Edit</button>
  </Link>
  <button onClick={() => handleDelete(_id)} className="btn btn-sm">Delete</button>
</div>
  </div>
</div>
    );
};

export default CoffeeCard;