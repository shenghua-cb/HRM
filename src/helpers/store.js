export default {
    fetch(resultSet) {
        return JSON.parse(window.localStorage.getItem(
            resultSet || "[]"))
    },
    save(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    clear() {
        window.localStorage.clear();
    }
}
