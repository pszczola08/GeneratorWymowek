export function getExcuses() {
    var storageExcuses: String[] | undefined = []
    if(localStorage.getItem("excuses") != null) {
        storageExcuses = localStorage.getItem("excuses")?.split("|")
    }

    return storageExcuses
}