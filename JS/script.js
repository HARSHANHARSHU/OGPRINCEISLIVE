document.querySelectorAll('.required').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    })
    item.addEventListener('mouseleave', event => {
        item.style.backgroundColor = 'transparent';
    })
})