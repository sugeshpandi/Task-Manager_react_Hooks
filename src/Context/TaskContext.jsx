<<<<<<< HEAD
import React, { createContext, useContext } from 'react'

export const TaskContext = createContext();

export const useTasks = () => {
          const context = useContext(TaskContext);
          if(context === undefined){
                    throw new Error("useTasks must be used within a TaskContext.Provider");
          }
          return context;
=======
import React, { createContext, useContext } from 'react'

export const TaskContext = createContext();

export const useTasks = () => {
          const context = useContext(TaskContext);
          if(context === undefined){
                    throw new Error("seTasks must be used within a TaskContext.Provider");
          }
          return context;
>>>>>>> 5784bb0453f538962d40187beb3929b8f19971b1
}