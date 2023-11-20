export default function DropdownItem(props) {
    const { item } = props;

    const hendelEnterLeave = (e) => {
        e.target.classList.toggle('active');
    }

    return (
        <li><a href="https://github.com/GLM-Alyona/ra-dropdown" onMouseEnter={hendelEnterLeave} onMouseLeave={hendelEnterLeave}>{item}</a></li>
    )
}