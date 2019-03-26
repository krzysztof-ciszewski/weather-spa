export default (response, pageNumber) => {
    return {
        ...response,
        items: response.items.map((element) => {
            return {
                ...element,
                city: { name: element.cityName },
            };
        }),
        number: pageNumber,
    };
}
