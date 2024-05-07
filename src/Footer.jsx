export const Footer = () => {

    const hour = new Date().getHours();
    const openingHour = 11;
    const closingHour = 23;
    const isOpen = hour >= openingHour && hour <= closingHour;
    if (isOpen) {
        return (<footer>
            {new Date().toLocaleTimeString()}. We're currently open
        </footer>);
    } else {
        return (<footer>
            Sorry, we're currently closed
        </footer>);
    }


}