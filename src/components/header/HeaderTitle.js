const HeaderTitle = (props) => {
    const {title} = props
    return (
        <h1 className='header__title pe-3 fw-semibold'>{title}</h1>
    );
}
export default HeaderTitle