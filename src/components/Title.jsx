const Title = ({ name, containerClass, level = 1 }) => {

    let headingLevel = parseInt(level, 10);

    if (isNaN(headingLevel) || headingLevel < 1 || headingLevel > 6) {
        headingLevel = 1;
    }
    
    const Tag = `h${headingLevel}`;
    return <Tag className= {containerClass}>{name}</Tag>;
};

export default Title;
