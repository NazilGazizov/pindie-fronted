export const getData = async (url) => {
try {
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error("Ошибка получения данных");
    }
    const data = await response.json();
    return data;
} catch (error) {
    return error;
}
};

const normalizeDataObject = (obj) => {
    return {
        ...obj,
        category: obj.categories,
        users: obj.users_permissions_users,
    };
};

export const normalizeData = (data) => {
    return data.map((item) => {
        return normalizeDataObject(item);
    });
};

export const getNormalizedGameDataById = async (url, id) => {
    const data = await getData(`${url}/${id}`);
    return isResponseOk(data) ? normalizeDataObject(data) : data;
};

export const getNormalizedGamesDataByCategory = async (url, category) => {
    const data = await getData(`${url}?categories.name=${category}`);
    return isResponseOk(data) ? normalizeData(data) : data;
};

export const isResponseOk = (response) => {
    return !(response instanceof Error);
  };
