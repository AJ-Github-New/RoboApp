import Card from "./Card";
const SearchBox = ({search,robots}) => {
    return ( 
        <div>
        {search!=='' && robots.map((robo)=> {
            if(robo.username===search)
            
            return <Card key={robo.id} img={`https://robohash.org/${robo.id}`} name={robo.name} username={robo.username} email={robo.email}></Card>
            
          
          })}
          </div>
     );
}
 
export default SearchBox;
 
