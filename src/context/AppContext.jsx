import { createContext, useCallback, useEffect, useState } from 'react';
import dataJson from '../data/data.json';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState(dataJson);
  const [jobsFilter, setJobsFilter] = useState();
  const [tags, setTags] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  //Get Tag Filter Selected in array
  const getTags = (tag) => {
    if (!tags.includes(tag)) {
      setTags([tag, ...tags]);
    }
  };
  //Remove Tag Filter Selected of array
  const removeTag = (tag) => {
    if (tags.includes(tag)) {
      setTags((tags) => tags.filter((el) => el !== tag));
    }
  };

  //Clear Tags
  const clearTags = () => setTags([]);

  //Compare tags Filter/Job
  const compareTags = useCallback(
    (tagJob) => {
      return tags.every((tag) => tagJob?.includes(tag));
    },
    [tags]
  );

  //Show Jobs by filter
  const filterJobsByTags = useCallback(() => {
    const filtered = jobs?.filter((elem) => compareTags(elem.tags) && elem);

    setJobsFilter(filtered);
  }, [compareTags, jobs]);

  //Hook update tags
  useEffect(() => {
    if (!filterActive) setFilterActive(true);
    tags.length === 0 && setFilterActive(false);
    filterJobsByTags();
  }, [tags, filterJobsByTags, filterActive]);

  //Hook update data/jobs
  useEffect(() => {
    const setData = () => {
      const data = dataJson.map((job) => {
        const tags = [job.role, ...job.languages, ...job.tools];
        return { ...job, tags };
      });

      setJobs(data);
      setJobsFilter(data);
    };
    setData();
  }, []);

  const value = {
    jobs,
    getTags,
    jobsFilter,
    removeTag,
    tags,
    filterActive,
    clearTags,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContextConsumer = AppContext.Consumer;
