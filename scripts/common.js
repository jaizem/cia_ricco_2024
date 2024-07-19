document.addEventListener('DOMContentLoaded', function () {
    //sidebar JS
    let isClicked = false;

    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    function toggleDropdownOnClick() {
        isClicked = !isClicked;
        dropdownContent.style.display = isClicked ? 'block' : 'none';
    }

    function showDropdownOnHover() {
        dropdownContent.style.display = 'block';
    }

    function hideDropdownOnLeave() {
        if (!isClicked) { // Hide on leave only if not clicked
            setTimeout(function () {
                dropdownContent.style.display = 'none';
            }, 5000); // Wait for 5000 milliseconds (5 seconds)
        }
    }


    dropdownBtn.addEventListener('click', toggleDropdownOnClick);
    dropdownBtn.addEventListener('mouseenter', showDropdownOnHover);
    dropdownBtn.addEventListener('mouseleave', hideDropdownOnLeave);

    // Adding an event to hide the dropdown when clicked outside
    document.addEventListener('click', function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
            isClicked = false;
        }
    });

})
