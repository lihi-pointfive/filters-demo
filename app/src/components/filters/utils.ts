export const handleURL = (filterName: string, selectedValue: any) => {
    const searchParams = new URLSearchParams(window.location.search);

    // Set the selected value for the filter in the URL search parameters
    searchParams.set(filterName, selectedValue.value);

    // Construct the new URL with the updated search parameters
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

    // Update the browser URL
    window.history.pushState({}, '', newUrl);
};