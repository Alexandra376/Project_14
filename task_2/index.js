const getDriverLicence = (success, failure) => {
    if (Math.random() > 0.1) {
        return success('успех!');
    } else {
        return failure('упс, неудача..');
    }
}

const success = (result) => {
    console.log('Успешно завершено с результатом: ' + result);
}

const failure = (error) => {
    console.log('Завершено с ошибкой: ' + error);
}

getDriverLicence(success, failure);
