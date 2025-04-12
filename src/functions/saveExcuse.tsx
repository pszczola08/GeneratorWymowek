export function saveExcuse(excuse: String) {
    var storageExcuses: String[] | undefined = []
    if(localStorage.getItem("excuses") != null) {
        storageExcuses = localStorage.getItem("excuses")?.split("|")
    }

    storageExcuses?.push(excuse)
    var excusesString: string | undefined = storageExcuses?.join("|") || ""

    localStorage.setItem("excuses", excusesString)
}