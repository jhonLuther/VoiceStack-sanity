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

  
 

  console.log({tabs:tabs});
  

  return (
    <>
      <ul className={`hidden md:flex flex-col md:flex-row gap-3`}>
        {tabs.map((tab: any, index: number) => {
          return (
            <li
                key={tab._uid || index}
                className={`${currentIndex === index ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white'} flex items-center 
                gap-2 px-4 py-3 rounded-[22px] transition-all duration-300 ease-in-out  justify-center text-center font-inter text-sm font-medium leading-[145%] cursor-pointer`}
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
