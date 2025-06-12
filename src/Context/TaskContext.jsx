import React, { createContext, useContext } from 'react'

export const TaskContext = createContext();

export const useTasks = () => {
          const context = useContext(TaskContext);
          if(context === undefined){
                    throw new Error("useTasks must be used within a TaskContext.Provider");
          }
          return context;
}