const getStudent = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: 'Anri', age: 32});
        },
            4000);
    });
}

getStudent().then(({ name }) => console.log(name));
