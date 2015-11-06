export default (type) => {
    return (payload, isError) => {
        return {
            type,
            payload,
            isError
        };
    };
};
