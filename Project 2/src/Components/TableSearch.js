import React, { useEffect, useMemo, useState, useRef } from "react";
import "../Assets/Css/Table.css"
import {useSelector} from "react-redux";

function TableSearch() {
  const [userArray, setUserArray] = useState([]);
  const [isCheck, setIsCheck] = useState([]);
  const [search, setSearch] = useState("");
  const { tableUsers } = useSelector((state) => state.SearchUsersReducer);
  const [selectedValue,setSelectedValue]=useState('All')

const handleClick = (e,id,address,postCode,numberOfRooms,area) => {
  const {  checked } = e.target;
  let upComing={id,checked,address,postCode,numberOfRooms,area}
  setIsCheck([...isCheck, upComing]);
  if (!checked) {
    setIsCheck(isCheck.filter(item => item.id !== id));
  }
};

const userArrayMethod = useMemo(() => {
  setUserArray(tableUsers);
  let computedUsers = userArray;
  if (search) {
      computedUsers = computedUsers.filter(
        (users) =>
          users.address.toLowerCase().includes(search.toLowerCase())
          );
    }
  if(selectedValue=='All'){
   return computedUsers;
  }else{
    computedUsers=computedUsers.filter((data)=>data.propertyType==selectedValue)
    return computedUsers;

  }
  // return computedUsers;
  }, [userArray, search, tableUsers,selectedValue]);

    return (
      <>
      <div className="searchInputDiv">
           <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="inputBar" placeholder="Enter Address"/>
      </div>
      <h2 className="text-center">Selected Properties</h2>
      <table class="table handleSelectedTableWidth ">
                  <thead>
                      <tr>
                          <th scope="col">Address</th>
                          <th scope="col">PostCode</th>
                          <th scope="col">Number of rooms</th>
                          <th scope="col">Floor area</th>
                      </tr>
                  </thead>
                  <tbody>
                          {isCheck.length>0?isCheck.map((item)=>{
                             return <tr>
                                    <td>{item.address} </td>
                                    <td>{item.postCode} </td>
                                    <td>{item.numberOfRooms} </td>
                                    <td>{item.area} </td>   
                                    </tr> 
                           }):<h3>Select Any Item</h3>}
                 </tbody>
            </table>

      <div className="searchResultsParent my-4">
           <div className="typesDiv">
                <h5>Property Type</h5>
                <span onClick={()=>setSelectedValue("All")} className={`${selectedValue=="All" && "font-weight-bold"}`}>All</span>
                <span onClick={()=>setSelectedValue("Flat")} className={`${selectedValue=="Flat" && "font-weight-bold"}`}>Flat</span>
                <span onClick={()=>setSelectedValue("Semi-detached")} className={`${selectedValue=="Semi-detached" && "font-weight-bold"}`}>Semi-detached</span>
                <span onClick={()=>setSelectedValue("Terraced house")} className={`${selectedValue=="Terraced house" && "font-weight-bold"}`}>Terraced house</span>
           </div>
           <div>
              <h2 className="text-center">Table Users</h2>
              <table class="table table-striped handleSearchTableWidth">
                  <thead>
                      <tr>
                          <th scope="col">Tick</th>
                          <th scope="col">Address</th>
                          <th scope="col">PostCode</th>
                          <th scope="col">Property Type</th>
                          <th scope="col">Number of rooms</th>
                          <th scope="col">Floor area</th>
                      </tr>
                  </thead>
                  <tbody>
                          {userArrayMethod.length>0&&userArrayMethod.map((item)=>{
                             return <tr>
                                    <td><input type="checkbox" isChecked={isCheck.some((data) => data.id === item.id)} 
                                         onChange={(e) => {handleClick(e,item.id,item.address,item.postCode,item.numberOfRooms,item.area);}} />
                                    </td>
                                    <td>{item.address} </td>
                                    <td>{item.postCode} </td>
                                    <td>{item.propertyType} </td>
                                    <td>{item.numberOfRooms} </td>
                                    <td>{item.area} </td>   
                                    </tr> 
                           })}
                 </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  
  export default TableSearch;
  