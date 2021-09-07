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
