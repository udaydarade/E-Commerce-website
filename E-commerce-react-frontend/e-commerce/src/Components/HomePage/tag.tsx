import '/src/assets/css/_tag-block.scss';



interface Props {
    item : string;
    color : string;
    fontcol : string;
    onClick: () => void;
    isActive: boolean;
}

function Tag({item, color, fontcol, onClick, isActive}: Props){

    return(
        <button className="tag" onClick={onClick} style={{ backgroundColor: isActive ? 'rgba(181, 0, 0, 1)': color, color: isActive ? 'rgba(255, 255, 255, 1)' :fontcol }}>
            {item}
        </button>
    );
}

export default Tag;