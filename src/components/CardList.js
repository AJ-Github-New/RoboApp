import Card from "./Card";
const CardList = ({search,robots}) => {
   // if (true)//to check error boundary
    //{
      //  throw new Error('Noo');
   // }
    return (  
        <div>
        {search==='' && robots.map((robo)=> {return <Card key={robo.id} img={`https://robohash.org/${robo.id}`} name={robo.name} username={robo.username} email={robo.email}></Card>})}
        </div>
    );
}
 
export default CardList;