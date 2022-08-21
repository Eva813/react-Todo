// import React, { useEffect, useState } from 'react';
// import '../all.css'
// import TabBtn from './TabBtn';

// const createPages = (pagesCount) => {
//   console.log('pagesCount', pagesCount)

//   return [...Array(pagesCount).keys()];
// };
// /* end of createPages(pagesCount) */

// function TabBar(props) {
//   console.log('Bar', props)
//   const { dataCount, setClickPage, tabName } = props;

//   //pagesCount
//   const [pagesCount, setPagesCount] = useState([1]);

//   useEffect(() => {
//     setPagesCount(() => {
//       return createPages(dataCount / 2);
//     });
//   }, [dataCount]);

//   return (
//     <ul className="todoList_tab">
//       {
//         pagesCount.map((p, i) => {
//           const pageString = p + 1;
//           // console.log('pageString', pageString);
//           return (
//             <TabBtn
//               key={i}
//               pageString={pageString}
//               pageNum={p}
//               setClickPage={setClickPage}
//             />
//           );
//         })
//       }
//     </ul>
//   )
// }

// export default TabBar;
