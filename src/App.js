import Counter from "./components/Counter";
import Table from "./components/Table";


function App() {
  return (
    <div className="App">
      
      <Table></Table>
      
     <ul>
         <li>
          1
         </li>

         <li>
           2
         </li>

         <li>
           3
         </li>

         <li>
           4   
         </li>
     </ul>

     <Table/>
         
         <Counter/>
    </div>
  );
}

export default App;
