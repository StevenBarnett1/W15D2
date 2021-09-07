import {useState,useEffect} from "react"

let Folder = ({folders}) => {
    let [currentTab,setCurrentTab] = useState(0)
    let [folder,setFolder] = useState("")
    let [titles,setTitles] = useState([])
    useEffect(() => {
        setFolder(folders[currentTab])
    }, [currentTab])
    useEffect(() => {
        setTitles(folders.map((folder) => folder.title))
    }, [folders])
    // useEffect(() => {
    //     setTitles(folders.map((folder) => folder.title))
    // }, [])
    let selectTab = (idx) => {
        setCurrentTab(idx)
    }

    const Headers = ({ titles, currentTab, selectTab }) => {
      const handleClick = (e) => {
        const idx = parseInt(e.target.id, 10);
        selectTab(idx);
      }

      const tabs = titles.map((title, idx) => {
        const headerClass = (idx === currentTab) ? 'active' : '';

        return (
          <li
            key={idx}
            id={idx}
            onClick={handleClick}
            className={headerClass}
          >
            {title}
          </li>
        );
      });

      return (
        <ul className='tab-header'>
          {tabs}
        </ul>
      );
    }

    return (
        <section>
          <h1>Tabs</h1>
          <div className='tabs'>
            <Headers
              titles={titles}
              currentTab={currentTab}
              selectTab={selectTab}
            />
            <div className='tab-content'>
              {folder.content}
            </div>
          </div>
        </section>
      );

}

export default Folder
