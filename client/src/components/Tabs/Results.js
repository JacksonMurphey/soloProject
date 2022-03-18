import { ResultsContainer } from '../Tabs/ResultElements'

const Results = (props) => {

    const { allTabs, currentTabIndex } = props

    return (
        <>
            <ResultsContainer>
                {allTabs[currentTabIndex].content}
            </ResultsContainer>
        </>
    )
}
export default Results