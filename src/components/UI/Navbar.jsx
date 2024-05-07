export default function Nav({ links }){
    return (
        <ul className="nav nav-pills">
            {links.map((link)=> link)}
        </ul>
    )
}