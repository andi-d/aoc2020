
export const stopwatch = () => {
    const start = new Date();
    return () => {

        const end = new Date();
        return {
            start,
            end,
            diff: `${end.getTime() - start.getTime()}ms`,
        };
    }
};