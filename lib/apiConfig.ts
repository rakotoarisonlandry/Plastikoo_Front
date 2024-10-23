const domainePath = '13.38.147.124'
const basePath = `http://${domainePath}` || 'http://localhost:5000';

export const getApiBasePath = () => {
    return basePath;
};