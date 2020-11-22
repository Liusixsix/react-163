import React  from "react";
import Swiper from "./components/swiper";

export interface banner {
  imageUrl: string;
}

const UserContent = React.createContext({
  name: "aaa",
  leleve: -1,
});
const Chdren1 = () => {
  return <Chdren2></Chdren2>;
};

// class Chdren2 extends React.Component {
  
//   componentDidMount(){
//     console.log(this.context)
//   }
  
//   render() {
//     return <div className="chiden2">

//     </div>;
//   }
// }
// Chdren2.contextType = UserContent

const Chdren2 = () => {
  return (
      <UserContent.Consumer>
        {
          value =>{
            return (
              <div>
                {value.name}
                {value.leleve}
              </div>
            )
          }
        }
        </UserContent.Consumer>
  )
};

const Recommend: React.FC = () => {

  const state = {
    name:'214',
    leleve:2
  }

  return (
    <>
      <Swiper></Swiper>
      <UserContent.Provider value={state}>
       <Chdren1></Chdren1>
      </UserContent.Provider>
    </>
  );
};

export default Recommend;
