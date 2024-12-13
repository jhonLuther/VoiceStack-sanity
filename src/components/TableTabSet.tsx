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

  
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect ( () => {
    setProgressWidth((currentIndex ) * 33.33);
  },[currentIndex,progressWidth])

  console.log({tabs});
  

  return (
    <>
      <ul className={`flex`}>
        {tabs.map((tab: any, index: number) => {
          return (
            <li
                key={tab._uid}
                className={`${currentIndex === index && 'block'} `}
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
