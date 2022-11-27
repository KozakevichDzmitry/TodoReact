const HeaderStatistic=({statistic})=> {
    const {moreToDo, done} = statistic
    return (
        <div className="header__statistic fs-4 fw-semibold text-muted">
            <span>{moreToDo}</span> more to do, <span>{done}</span> done
        </div>
    );
}
export default HeaderStatistic



