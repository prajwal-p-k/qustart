function Qustart(){
    //render in constent
    const org="FaceBook";
    const org1="Peehalli";
    //render in array
    let locations=["Peehalli","Hyderabad","Hamburg","London"];
   // locations=[];
   

    //render in function
    function greeting(){

        return <h1>"Hello World.............................................";</h1>
    }
    return <><h3>my own component {org} & {org1} {10*34}</h3> {greeting()} <h3>Cities List</h3>  {locations.length>0? locations.map((loc)=><li>{loc}</li>):"No cities"} </>
}
export default  Qustart;