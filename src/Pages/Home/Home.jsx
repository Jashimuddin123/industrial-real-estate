import Header from "../../SharedPages/Header/Header";
import LeftSideNav from "../../SharedPages/LeftSideNav/LeftSideNav";



const Home = () => {
    return (
        <div>
            
            <Header></Header>
       
         <div className="grid grid-cols-1 md:grid-cols-3  gap-6 border">
              <div className="borer border-pink-400 min-h-screen">
                <h1>left navbar here</h1>
              <LeftSideNav ></LeftSideNav>
              </div>

            <div className="border border-blue-950 col-span-2 min-h-screen">
                 <h1>cart section</h1>
            </div>
            
            
            </div> 

        </div>
    );
};

export default Home;