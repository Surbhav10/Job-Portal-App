import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [searchFilter, setsearchFilter] = useState({
        title: '',
        location: '',
    });

    const [isSearched, setIsSearched] = useState(false);

    const [jobs, setJobs] = useState([]);

    // Function to fetch jobs :
    const fetchjobs = async () => {
        setJobs(jobsData)
    }

    useEffect (()=>{
        fetchjobs()

    },[])


    const value = {
        searchFilter,
        setsearchFilter,
        isSearched,
        setIsSearched,
        jobs,setJobs
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
