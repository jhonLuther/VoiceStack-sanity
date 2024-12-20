import React, { useEffect, useState } from "react";

interface TabsetProps {
  tabs: any;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TableTabset: React.FunctionComponent<TabsetProps> = ({
  tabs,
  currentIndex,
  setCurrentIndex,
}) => {

  
 

  // console.log({tabs});
  

  return (
    <>
      <ul className={`hidden md:flex flex-col md:flex-row gap-3 px-[10px] py-[8px] rounded-[100px] bg-gray-50`}>
        {tabs.map((tab: any, index: number) => {
          return (
            <li
                key={tab._uid || index}
                className={`${currentIndex === index ? 'bg-white text-gray-900 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]' : 'text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]'} flex items-center 
                gap-2 px-4 py-3 rounded-[22px] justify-center text-center font-inter text-sm font-medium leading-[145%] cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              >
                {/* {tab.tabIcon && tab.tabIcon.length > 0 && (
                  <ImageLoader image={tab.tabIcon[0].image}></ImageLoader>
                )} */}
                {tab.name}
              </li>
          );
        })}
      </ul>

    </>
  );
};

export default TableTabset;
