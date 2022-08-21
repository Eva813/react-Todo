// //包住整個items
// import React, { useEffect, useState } from 'react';

// import ListItem from './ListItem';
// import TabBar from './TabBar';

// const sliceData = (data, currentPageIndex = 0) => {
//   console.log('slice-data-currentPageIndex:', data, currentPageIndex);

//   return [...data].slice(currentPageIndex, currentPageIndex + 2);
// };

// function ListData(props) {
//   const { data } = props;
//   console.log('data', data)
//   const tabName = ['all', 'uncompleted', 'completed']
//   //點擊分頁

//   const [clickPage, setClickPage] = useState(0);
//   const [partData, setPartData] = useState([]);


//   useEffect(() => {
//     const currentPageIndex = clickPage * 2;

//     setPartData(() => {
//       return sliceData(data, currentPageIndex);
//     });

//   }, [data, clickPage]);

//   return (
//     <div className="conatiner todoListPage vhContainer">
//       <div className="todoList_list">
//         <nav>
//           <TabBar
//             dataCount={data.length}
//             setClickPage={setClickPage}
//           // totalPages={totalPages}
//           />
//         </nav>
//       </div>

//       {/* <ul className="py-2">
//         {partData.map((item) => {
//           return <ListItem key={item.id} item={item} />;
//         })}
//       </ul> */}


//     </div>
//   );

// }

// export default ListData;
