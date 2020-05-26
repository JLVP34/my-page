export default (baseClass) => {
    window.addEventListener('scroll', () => {
        const classes = document.getElementsByClassName(baseClass)[0].className;
        if (!classes.includes('scroll'))
            document.getElementsByClassName(baseClass)[0].className = `${classes} scroll`;
    });
};