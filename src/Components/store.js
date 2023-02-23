export function setLanguagetoLocalStorage(value) {
    localStorage.setItem('idNumber', value)
}

export function getLanguageFromLocalStorage() {
    return localStorage.getItem('idNumber')
}