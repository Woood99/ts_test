'use client';

import React, { useState, useRef, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import cn from 'clsx';

interface Props {
   data: {
      button: {
         className?: string;
         children: ReactNode;
      };
      body: ReactNode;
   }[];
   multiple?: boolean;
   defaultValue?: number | null;
   classNameItem?: string;
}

const Accordion = ({ data, multiple = false, defaultValue, classNameItem = '' }: Props) => {
   const [isOpenIds, setIsOpenIds] = useState(defaultValue !== null && typeof defaultValue === 'number' ? [defaultValue] : []);
   const popupRef = useRef(null);

   const onClickHandler = (id: number) => {
      if (isOpenIds.includes(id)) {
         if (multiple) {
            setIsOpenIds(isOpenIds.filter(item => item !== id));
         } else {
            setIsOpenIds([]);
         }
      } else {
         if (multiple) {
            setIsOpenIds([...isOpenIds, id]);
         } else {
            setIsOpenIds([id]);
         }
      }
   };

   return (
      <>
         {data.map((item, index) => {
            return (
               <div key={index} className={cn(isOpenIds.includes(index) && '_active', classNameItem)}>
                  <button className={cn(item.button.className, isOpenIds.includes(index) && '_active')} onClick={() => onClickHandler(index)}>
                     {item.button.children}
                  </button>

                  <CSSTransition nodeRef={popupRef} in={isOpenIds.includes(index)} classNames="_open-select" timeout={200} unmountOnExit>
                     <div ref={popupRef}>{item.body}</div>
                  </CSSTransition>
               </div>
            );
         })}
      </>
   );
};

export default Accordion;
