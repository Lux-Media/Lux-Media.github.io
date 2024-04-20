const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
    // Then trigger an alert
    alert('Media Query Matched!')
}