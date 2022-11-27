import HeaderTitle from "./HeaderTitle";
import HeaderStatistic from "./HeaderStatistic";

const Header=({dataHeader})=> {

    const {title} = dataHeader
    const statistic = {
        moreToDo: dataHeader.moreToDo,
        done: dataHeader.done
    }
    return (
        <header className='header d-flex justify-content-between align-items-end mb-4'>
            <HeaderTitle title={title}/>
            <HeaderStatistic statistic={statistic}/>
        </header>
    );
}
export default Header