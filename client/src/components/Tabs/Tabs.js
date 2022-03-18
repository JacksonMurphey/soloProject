import { TabContainer, TabWrapper, TagText } from "./TabElements";
import './Tabs.css'

const Tabs = (props) => {

    const { allTabs, currentTabIndex, setCurrentTabIndex } = props

    const tabStyle = (index) => {
        if (index === currentTabIndex) {
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    }


    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    }


    return (
        <>
            <TabContainer>
                {allTabs.map((label, index) => (
                    <TabWrapper className={`${tabStyle(index)}`} onClick={e => setSelectedTab(index)}>
                        <TagText>{label.tag}</TagText>
                    </TabWrapper>
                ))}
            </TabContainer>
        </>
    )
}
export default Tabs