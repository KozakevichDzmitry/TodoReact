import Input from "../Input";
import ButtonGroupRadio from "./ButtonGroupRadio";


const HeaderPanel = ({onSearch, onFilter}) => {
    const dataButtonGroup = [
        {
            class: 'header-panel__button btn-check',
            id: 'btnradio1',
            checked:true,
            filter: 'all',
            text: 'All'
        },
        {
            class: 'header-panel__button btn-check',
            id: 'btnradio2',
            checked: false,
            filter: 'active',
            text: 'Active'
        },
        {
            class: 'header-panel__button btn-check',
            id: 'btnradio3',
            checked: false,
            filter: 'done',
            text: 'Done'
        }]
    return (
        <div className="header-panel d-flex justify-content-between align-items-center mb-3 gap-2">
            <Input data={{
                class: 'header-panel__search',
                placeholder: "type to search",
                type: 'search',
                onChange: (e)=>{onSearch(e.target.value)}

            }}/>
            <ButtonGroupRadio data={{dataButtonGroup, onFilter}} />
        </div>

    )
}
export default HeaderPanel