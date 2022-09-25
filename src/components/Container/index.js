import AvailableTableContainer from "./AvailContainer";
import MainSQLContainer from "./MainBody";
import './container.styles.css'

function MainContainer() {
    
    return (
        <div className="main-container">
            <MainSQLContainer />
            <AvailableTableContainer />
        </div>
    )
}

export default MainContainer;