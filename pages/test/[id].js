export const getStaticPaths = async () => {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data =await  res.json();

    const paths = data.map(nalu =>{
        return{
            params: {id: nalu.id.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

 export const getStaticProps = async(context)=>{
const id=context.params.id;
const res= await fetch('https://jsonplaceholder.typicode.com/users/'+id);
const data = await res.json();

return{
    props: {nalu: data}
}
 }
const Details = ({nalu}) => {
    return ( 
        <div className="content">
            <h1>Details Information</h1>

            <h3>{nalu.name}            </h3>
            <p>{nalu.email}</p>
            <p>{nalu.phone}</p>
            <p>{nalu.website}</p>
            <p>{nalu.company.name}</p>
            <p>{nalu.address.city}</p>
        </div>
     );
}
 
export default Details ;