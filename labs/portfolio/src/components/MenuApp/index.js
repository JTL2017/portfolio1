import Menu from "../Menu"
function MenuApp(props) {

    let theMenu = props.data.map((i,index) => < Menu key = {index} menuName={i.menuName} menuItems={i.menuItems} > </Menu >)
    return <>{theMenu}</>

}

export default MenuApp